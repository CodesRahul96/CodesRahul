"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaTimes,
  FaPaperPlane,
  FaRobot,
  FaTrashAlt,
  FaChevronDown,
  FaWhatsapp,
  FaEnvelope,
  FaGripVertical,
  FaExchangeAlt,
  FaCopy,
  FaCheck
} from "react-icons/fa";
import { generateAiResponse, INITIAL_SUGGESTIONS, RAHUL_PROFILE } from "../lib/aiEngine";

// Sub-component for code blocks with 1-click copy
function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-2 rounded-xl bg-slate-950 text-slate-100 p-2.5 sm:p-3 font-mono text-[11px] sm:text-xs border border-slate-800 shadow-inner group relative">
      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800/80">
        <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider select-none font-mono">
          {language || "code"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 active:scale-95 transition-all touch-manipulation"
          aria-label="Copy code snippet"
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-400" size={10} />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <FaCopy size={10} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="whitespace-pre overflow-x-auto leading-relaxed scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const PREFILLED_WHATSAPP = `https://wa.me/918805159425?text=${encodeURIComponent(
  "Hi Rahul, I was exploring your portfolio (CodesRahul) and would like to discuss a project / role with you!"
)}`;

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: `Hello! 👋 I'm **CodesRahul AI**, Rahul's personal interactive portfolio assistant.\n\nAsk me anything about his **20+ shipped projects**, **Kotlin/Android apps**, **MERN stack**, or how to **hire him**!\n\n*(💡 Tip: You can drag and drop this assistant to either the left or right corner anytime!)*`,
      suggestions: INITIAL_SUGGESTIONS,
      timestamp: "Just now"
    }
  ]);

  // Corner docking state: 'right' (default) or 'left' (saved in localStorage)
  const [dockSide, setDockSide] = useState("right");
  // Custom Y position for floating button (null = default bottom offset)
  const [customY, setCustomY] = useState(null);

  // Active drag tracking
  const [isDraggingButton, setIsDraggingButton] = useState(false);
  const [dragPos, setDragPos] = useState(null); // { x, y }

  const dragStartRef = useRef({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    hasMoved: false,
    rectWidth: 0,
    rectHeight: 0
  });

  const isClickBlockedRef = useRef(false);
  const streamIntervalRef = useRef(null);
  const buttonRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Load saved corner dock preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("codesrahul_ai_dock");
      if (saved === "left" || saved === "right") {
        setDockSide(saved);
      }
    } catch (e) {
      // Ignore in strict private browsing environments
    }
  }, []);

  const updateDockSide = (newSide) => {
    setDockSide(newSide);
    try {
      localStorage.setItem("codesrahul_ai_dock", newSide);
    } catch (e) {}
  };

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      // Auto-focus input on open (only on larger screens to avoid unexpected soft keyboard pop on mobile)
      if (typeof window !== "undefined" && window.matchMedia("(min-width: 640px)").matches) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [isOpen, isMinimized, messages, isTyping]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Keep Y within viewport bounds on screen resize or orientation change
  useEffect(() => {
    const handleResize = () => {
      setCustomY((prevY) => {
        if (prevY === null) return null;
        const maxY = window.innerHeight - 80;
        return Math.max(75, Math.min(prevY, maxY));
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cleanup streaming interval on unmount
  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) {
        clearInterval(streamIntervalRef.current);
      }
    };
  }, []);

  // Auto-close on inactivity (60 seconds of complete idle time)
  const INACTIVITY_TIMEOUT_MS = 60 * 1000;
  const inactivityTimerRef = useRef(null);

  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    if (!isOpen) return;

    inactivityTimerRef.current = setTimeout(() => {
      // Don't auto-close if the user has an active draft or AI is generating a reply
      if (inputMessage.trim().length > 0 || isTyping) {
        resetInactivityTimer();
        return;
      }
      setIsOpen(false);
      setIsMinimized(false);
    }, INACTIVITY_TIMEOUT_MS);
  };

  useEffect(() => {
    if (!isOpen) {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      return;
    }

    // Initialize timer upon opening
    resetInactivityTimer();

    // User activity events that reset the timer
    const activityEvents = ["mousemove", "mousedown", "keydown", "touchstart", "touchmove", "scroll"];
    const handleActivity = () => {
      resetInactivityTimer();
    };

    activityEvents.forEach((evt) => {
      window.addEventListener(evt, handleActivity, { passive: true });
    });

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      activityEvents.forEach((evt) => {
        window.removeEventListener(evt, handleActivity);
      });
    };
  }, [isOpen, inputMessage, isTyping, messages]);

  // =========================================================================
  // DRAG & DROP LOGIC (TOUCH & MOUSE COMPATIBLE)
  // =========================================================================
  const handlePointerDown = (e) => {
    // Only drag with primary touch or left-click
    if (e.type === "mousedown" && e.button !== 0) return;

    const targetEl = buttonRef.current;
    if (!targetEl) return;

    const rect = targetEl.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragStartRef.current = {
      startX: clientX,
      startY: clientY,
      initialX: rect.left,
      initialY: rect.top,
      hasMoved: false,
      rectWidth: rect.width,
      rectHeight: rect.height
    };

    const handlePointerMove = (moveEvt) => {
      const currentX = moveEvt.touches ? moveEvt.touches[0].clientX : moveEvt.clientX;
      const currentY = moveEvt.touches ? moveEvt.touches[0].clientY : moveEvt.clientY;

      const dx = currentX - dragStartRef.current.startX;
      const dy = currentY - dragStartRef.current.startY;

      // Threshold of 6px to separate quick tap/click from drag gesture
      if (!dragStartRef.current.hasMoved && Math.hypot(dx, dy) > 6) {
        dragStartRef.current.hasMoved = true;
        setIsDraggingButton(true);
      }

      if (dragStartRef.current.hasMoved) {
        if (moveEvt.cancelable) moveEvt.preventDefault();

        const newX = dragStartRef.current.initialX + dx;
        const newY = dragStartRef.current.initialY + dy;

        // Viewport padding constraints
        const paddingX = 10;
        const topPadding = 75; // Stay below top navigation bar
        const bottomPadding = 20;

        const clampedX = Math.max(
          paddingX,
          Math.min(window.innerWidth - dragStartRef.current.rectWidth - paddingX, newX)
        );
        const clampedY = Math.max(
          topPadding,
          Math.min(window.innerHeight - dragStartRef.current.rectHeight - bottomPadding, newY)
        );

        setDragPos({ x: clampedX, y: clampedY });
      }
    };

    const handlePointerUp = () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("touchcancel", handlePointerUp);

      if (dragStartRef.current.hasMoved) {
        // Block onClick from triggering open action right after drop
        isClickBlockedRef.current = true;
        setTimeout(() => {
          isClickBlockedRef.current = false;
        }, 150);

        setIsDraggingButton(false);

        // Snap smoothly to left or right corner and persist preference
        setDragPos((lastPos) => {
          if (lastPos) {
            const centerX = lastPos.x + dragStartRef.current.rectWidth / 2;
            const screenMiddle = window.innerWidth / 2;
            const newSide = centerX < screenMiddle ? "left" : "right";
            updateDockSide(newSide);
            setCustomY(lastPos.y);
          }
          return null;
        });
      } else {
        setIsDraggingButton(false);
        setDragPos(null);
      }
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: false });
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("touchcancel", handlePointerUp);
  };

  const toggleDockSide = () => {
    const nextSide = dockSide === "right" ? "left" : "right";
    updateDockSide(nextSide);
  };

  const handleSend = (textToSend = inputMessage) => {
    const query = textToSend.trim();
    if (!query || isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // Realistic AI thinking delay before starting token streaming (200ms)
    setTimeout(() => {
      const response = generateAiResponse(query, messages);
      const fullText = response.text;
      const botId = `bot-${Date.now()}`;

      // Adaptive streaming speed: finishes smoothly within ~0.8s - 1.2s
      const chunkSpeed = 16; // ms per tick
      const chunkSize = Math.max(3, Math.ceil(fullText.length / 55));
      let charIdx = 0;

      // Create initial streaming message container
      const initialBotMsg = {
        id: botId,
        sender: "bot",
        text: "",
        suggestions: [],
        isStreaming: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, initialBotMsg]);

      if (streamIntervalRef.current) {
        clearInterval(streamIntervalRef.current);
      }

      streamIntervalRef.current = setInterval(() => {
        charIdx = Math.min(fullText.length, charIdx + chunkSize);
        const streamedSlice = fullText.slice(0, charIdx);
        const isDone = charIdx >= fullText.length;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === botId
              ? {
                  ...m,
                  text: streamedSlice,
                  suggestions: isDone ? response.suggestions || [] : [],
                  isStreaming: !isDone
                }
              : m
          )
        );

        scrollToBottom();

        if (isDone) {
          clearInterval(streamIntervalRef.current);
          streamIntervalRef.current = null;
          setIsTyping(false);
        }
      }, chunkSpeed);
    }, 220);
  };

  const handleClearChat = () => {
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }
    setIsTyping(false);
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: `Chat cleared! What would you like to know about Rahul Misal's projects or engineering experience?`,
        suggestions: INITIAL_SUGGESTIONS,
        timestamp: "Just now"
      }
    ]);
  };

  // Helper to format block text (bold, links, code, quotes) safely
  const renderBlockText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      // Horizontal divider
      if (line.trim() === "---") {
        return <hr key={lIdx} className="my-2 border-slate-200 dark:border-white/10" />;
      }

      // Blockquote
      if (line.startsWith("> ")) {
        return (
          <div
            key={lIdx}
            className="border-l-2 border-amber-500 pl-2.5 my-1.5 italic text-slate-700 dark:text-gray-300 font-medium"
          >
            {line.replace(/^>\s*/, "")}
          </div>
        );
      }

      // Process inline formatting: bold **text**, inline `code`, and markdown links [text](url)
      const parts = line.split(/(\*\*.*?\*\*|`[^`]+`|\[.*?\]\(.*?\))/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (!part) return null;

        // Bold text
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-slate-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }

        // Inline code
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code
              key={pIdx}
              className="px-1.5 py-0.5 mx-0.5 rounded bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 font-mono text-[11px] border border-amber-500/20 break-all"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        // Markdown Link
        if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, linkText, href] = match;
            const isInternal = href.startsWith("/");
            return isInternal ? (
              <Link
                key={pIdx}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-amber-600 dark:text-amber-400 underline underline-offset-2 hover:text-amber-500 font-medium inline-flex items-center gap-1 active:opacity-70 transition-opacity"
              >
                {linkText}
              </Link>
            ) : (
              <a
                key={pIdx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 underline underline-offset-2 hover:text-amber-500 font-medium inline-flex items-center gap-1 active:opacity-70 transition-opacity"
              >
                {linkText} ↗
              </a>
            );
          }
        }
        return part;
      });

      // Section header ###
      if (line.startsWith("### ")) {
        return (
          <h4
            key={lIdx}
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-2 mb-1 tracking-tight"
          >
            {line.replace("### ", "")}
          </h4>
        );
      }

      // Bullet item
      if (line.startsWith("• ") || line.startsWith("- ")) {
        return (
          <div key={lIdx} className="flex items-start gap-2 ml-0.5 my-1 text-slate-800 dark:text-gray-200">
            <span className="text-amber-500 dark:text-amber-400 mt-1 text-[9px] shrink-0">✦</span>
            <span className="leading-relaxed flex-1">{renderedLine.slice(1)}</span>
          </div>
        );
      }

      // Numbered list item
      if (/^\d+\.\s/.test(line)) {
        const numMatch = line.match(/^(\d+\.)\s/);
        const prefix = numMatch ? numMatch[1] : "";
        return (
          <div key={lIdx} className="flex items-start gap-2 ml-0.5 my-1 text-slate-800 dark:text-gray-200">
            <span className="font-mono text-amber-500 dark:text-amber-400 font-bold text-[11px] shrink-0">{prefix}</span>
            <span className="leading-relaxed flex-1">{renderedLine.slice(1)}</span>
          </div>
        );
      }

      return (
        <p key={lIdx} className={line.trim() === "" ? "h-1.5" : "my-0.5 leading-relaxed"}>
          {renderedLine}
        </p>
      );
    });
  };

  // Helper to format text with support for multiline code blocks
  const renderFormattedText = (text) => {
    if (!text) return null;

    if (text.includes("```")) {
      const segments = text.split(/(```[\s\S]*?```)/g);
      return segments.map((seg, sIdx) => {
        if (seg.startsWith("```") && seg.endsWith("```")) {
          const rawLines = seg.slice(3, -3).trim().split("\n");
          const firstLine = rawLines[0]?.trim() || "";
          const isLang = /^(javascript|typescript|js|ts|css|html|bash|kotlin|json|python)$/i.test(firstLine);
          const codeContent = isLang ? rawLines.slice(1).join("\n") : rawLines.join("\n");

          return (
            <CodeBlock
              key={sIdx}
              language={isLang ? firstLine : "code"}
              code={codeContent}
            />
          );
        }
        return <React.Fragment key={sIdx}>{renderBlockText(seg)}</React.Fragment>;
      });
    }

    return renderBlockText(text);
  };

  // Compute inline styles for button placement
  const getButtonPositionStyle = () => {
    if (dragPos) {
      return {
        position: "fixed",
        left: `${dragPos.x}px`,
        top: `${dragPos.y}px`,
        right: "auto",
        bottom: "auto",
        transition: "none",
        zIndex: 60
      };
    }

    const style = {
      position: "fixed",
      zIndex: 50,
      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
    };

    if (dockSide === "left") {
      style.left = "1rem";
      style.right = "auto";
    } else {
      style.right = "1rem";
      style.left = "auto";
    }

    if (customY !== null) {
      style.top = `${customY}px`;
      style.bottom = "auto";
    } else {
      style.bottom = "1rem";
      style.top = "auto";
    }

    return style;
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] sm:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Floating Draggable Trigger Button */}
      {!isOpen && (
        <aside
          ref={buttonRef}
          aria-label="Portfolio AI Assistant"
          style={getButtonPositionStyle()}
          className="select-none touch-none"
        >
          <div
            onMouseDown={handlePointerDown}
            onTouchStart={handlePointerDown}
            onClick={() => {
              if (isClickBlockedRef.current) return;
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className={`group relative flex items-center gap-2 sm:gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-[0_4px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_32px_rgba(245,158,11,0.6)] active:scale-95 transition-all duration-300 backdrop-blur-md cursor-grab active:cursor-grabbing ${
              isDraggingButton ? "scale-105 shadow-[0_10px_35px_rgba(245,158,11,0.7)] ring-2 ring-amber-400/80 cursor-grabbing" : ""
            }`}
            role="button"
            tabIndex={0}
            aria-label="Open or drag AI Assistant"
            title="Drag to left or right corner, or tap to open chat"
          >
            {/* Drag Handle Icon */}
            <span
              className="text-black/50 group-hover:text-black/80 transition-colors"
              title="Drag to reposition"
            >
              <FaGripVertical size={11} />
            </span>

            <div className="relative flex items-center justify-center">
              <FaRobot className="text-base text-black group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
            </div>

            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase select-none">
              Ask AI
            </span>
          </div>
        </aside>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <aside
          aria-label="CodesRahul AI Assistant"
          className={`z-[60] transition-all duration-300 ease-out ${
            dockSide === "left" ? "origin-bottom-left" : "origin-bottom-right"
          } ${
            isMinimized
              ? dockSide === "left"
                ? "fixed bottom-3 left-3 sm:bottom-6 sm:left-6 w-[calc(100vw-1.5rem)] sm:w-80 h-14"
                : "fixed bottom-3 right-3 sm:bottom-6 sm:right-6 w-[calc(100vw-1.5rem)] sm:w-80 h-14"
              : dockSide === "left"
              ? "fixed inset-x-2.5 bottom-2.5 sm:inset-auto sm:bottom-6 sm:left-6 w-auto sm:w-[420px] h-[84dvh] sm:h-[580px] max-h-[calc(100dvh-1.25rem)] sm:max-h-[85vh]"
              : "fixed inset-x-2.5 bottom-2.5 sm:inset-auto sm:bottom-6 sm:right-6 w-auto sm:w-[420px] h-[84dvh] sm:h-[580px] max-h-[calc(100dvh-1.25rem)] sm:max-h-[85vh]"
          }`}
        >
          <div
            className="w-full h-full rounded-2xl sm:rounded-3xl shadow-2xl bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-label="CodesRahul AI Assistant Dialog"
          >
            {/* Header with Corner Docking Switcher */}
            <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02] shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-black font-black text-xs shadow-md shrink-0">
                  R
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
                </div>
                <div>
                  <h3 className="text-xs font-bold font-mono text-slate-900 dark:text-white flex items-center gap-1.5 leading-none">
                    CodesRahul AI
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/30">
                      Active
                    </span>
                  </h3>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-gray-400 mt-0.5">
                    Instant • Portfolio Assistant
                  </p>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-0.5 sm:gap-1">
                {/* Corner Switcher Button */}
                <button
                  type="button"
                  onClick={toggleDockSide}
                  title={`Dock to ${dockSide === "right" ? "Left" : "Right"} side`}
                  aria-label={`Switch chat dock to ${dockSide === "right" ? "left" : "right"}`}
                  className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 active:scale-95 transition-all text-xs touch-manipulation"
                >
                  <FaExchangeAlt size={11} />
                </button>

                {/* Clear Chat */}
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Clear chat"
                  aria-label="Clear chat messages"
                  className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 active:scale-95 transition-all text-xs touch-manipulation"
                >
                  <FaTrashAlt size={12} />
                </button>

                {/* Minimize / Expand */}
                <button
                  type="button"
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                  className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 active:scale-95 transition-all text-xs touch-manipulation"
                >
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isMinimized ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  aria-label="Close chat window"
                  className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-200/60 dark:hover:bg-white/10 active:scale-95 transition-all text-xs touch-manipulation"
                >
                  <FaTimes size={13} />
                </button>
              </div>
            </div>

            {/* Message Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 space-y-3.5 sm:space-y-4 text-xs font-sans text-slate-800 dark:text-gray-200 scroll-smooth overscroll-contain">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[88%] sm:max-w-[85%] rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 leading-relaxed break-words ${
                          msg.sender === "user"
                            ? "bg-amber-500 text-black font-medium shadow-md rounded-br-none"
                            : "bg-slate-100/90 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 rounded-bl-none shadow-sm"
                        }`}
                      >
                        {renderFormattedText(msg.text)}
                        {/* Blinking streaming cursor */}
                        {msg.isStreaming && (
                          <span className="inline-block w-1.5 h-3.5 bg-amber-500 dark:bg-amber-400 animate-pulse ml-0.5 align-middle rounded-sm" />
                        )}
                      </div>

                      <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500 mt-1 px-1">
                        {msg.timestamp}
                      </span>

                      {/* Interactive suggestion chips under bot messages */}
                      {msg.sender === "bot" && !msg.isStreaming && msg.suggestions && msg.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2 max-w-full animate-fadeIn">
                          {msg.suggestions.map((sug, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => handleSend(sug)}
                              className="text-[11px] font-mono px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-gray-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 active:scale-95 transition-all text-left break-words touch-manipulation"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator before first chunk streams */}
                  {isTyping && !messages.some((m) => m.isStreaming) && (
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 w-24">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Direct Action Quick Bar */}
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-gray-400 bg-slate-50/60 dark:bg-white/[0.01] shrink-0">
                  <span className="hidden xs:inline">Quick Connect:</span>
                  <div className="flex items-center gap-3 ml-auto xs:ml-0">
                    <a
                      href={PREFILLED_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline py-1 px-1.5 rounded active:bg-emerald-500/10 transition-colors touch-manipulation"
                    >
                      <FaWhatsapp size={13} /> <span>WhatsApp</span>
                    </a>
                    <span>•</span>
                    <a
                      href={`mailto:${RAHUL_PROFILE.email}`}
                      className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:underline py-1 px-1.5 rounded active:bg-amber-500/10 transition-colors touch-manipulation"
                    >
                      <FaEnvelope size={12} /> <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Input Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="p-2.5 sm:p-3 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-black/40 flex items-center gap-2 shrink-0 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about projects, skills, hiring..."
                    disabled={isTyping}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="sentences"
                    className="flex-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-amber-500/60 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-black flex items-center justify-center transition-all shadow-sm shrink-0 active:scale-90 touch-manipulation"
                    aria-label="Send message"
                  >
                    <FaPaperPlane size={12} />
                  </button>
                </form>
              </>
            )}
          </div>
        </aside>
      )}
    </>
  );
}

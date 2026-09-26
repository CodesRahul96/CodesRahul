"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaTimes,
  FaPaperPlane,
  FaRobot,
  FaTrashAlt,
  FaChevronDown,
  FaSparkles,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
import { generateAiResponse, INITIAL_SUGGESTIONS, RAHUL_PROFILE } from "../lib/aiEngine";

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: `Hello! 👋 I'm **CodesRahul AI**, Rahul's personal interactive portfolio assistant.\n\nAsk me anything about his **20+ shipped projects**, **Kotlin/Android apps**, **MERN stack**, or how to **hire him**!`,
      suggestions: INITIAL_SUGGESTIONS,
      timestamp: "Just now"
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      // Auto-focus input on open
      setTimeout(() => inputRef.current?.focus(), 150);
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

    // Realistic AI thinking delay (250ms - 450ms)
    setTimeout(() => {
      const response = generateAiResponse(query, messages);
      
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        suggestions: response.suggestions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 380);
  };

  const handleClearChat = () => {
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

  // Helper to format basic markdown (bold, lists, links) safely
  const renderFormattedText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      // Process bold **text**
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-slate-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
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
                className="text-amber-600 dark:text-amber-400 underline underline-offset-2 hover:text-amber-500 font-medium inline-flex items-center gap-1"
              >
                {linkText}
              </Link>
            ) : (
              <a
                key={pIdx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 underline underline-offset-2 hover:text-amber-500 font-medium inline-flex items-center gap-1"
              >
                {linkText} ↗
              </a>
            );
          }
        }
        return part;
      });

      if (line.startsWith("### ")) {
        return (
          <h4 key={lIdx} className="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-1">
            {line.replace("### ", "")}
          </h4>
        );
      }

      if (line.startsWith("• ")) {
        return (
          <div key={lIdx} className="flex items-start gap-2 ml-1 my-0.5">
            <span className="text-amber-500 dark:text-amber-400 mt-1 text-[10px]">✦</span>
            <span>{renderedLine.slice(1)}</span>
          </div>
        );
      }

      return (
        <p key={lIdx} className={line.trim() === "" ? "h-2" : "my-1"}>
          {renderedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <aside aria-label="Portfolio AI Assistant" className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-[0_4px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_32px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
            aria-label="Open AI Assistant"
          >
            <div className="relative flex items-center justify-center">
              <FaRobot className="text-base text-black group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider uppercase">
              Ask AI
            </span>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div
            className={`transition-all duration-300 ease-out origin-bottom-right ${
              isMinimized
                ? "w-80 h-14 overflow-hidden rounded-2xl shadow-xl"
                : "w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl shadow-2xl"
            } bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden animate-fadeIn`}
            role="dialog"
            aria-modal="true"
            aria-label="CodesRahul AI Assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-black font-black text-xs shadow-md">
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
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Clear chat"
                  aria-label="Clear chat messages"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors text-xs"
                >
                  <FaTrashAlt size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors text-xs"
                >
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isMinimized ? "rotate-180" : ""}`}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  aria-label="Close chat window"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors text-xs"
                >
                  <FaTimes size={13} />
                </button>
              </div>
            </div>

            {/* Message Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans text-slate-800 dark:text-gray-200 scroll-smooth">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-amber-500 text-black font-medium shadow-md rounded-br-none"
                            : "bg-slate-100/90 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 rounded-bl-none shadow-sm"
                        }`}
                      >
                        {renderFormattedText(msg.text)}
                      </div>

                      <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500 mt-1 px-1">
                        {msg.timestamp}
                      </span>

                      {/* Interactive suggestion chips under bot messages */}
                      {msg.sender === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                          {msg.suggestions.map((sug, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => handleSend(sug)}
                              className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-gray-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 active:scale-95 transition-all text-left"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 w-24">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Direct Action Quick Bar */}
                <div className="px-4 py-2 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-gray-400 bg-slate-50/60 dark:bg-white/[0.01]">
                  <span>Quick Connect:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={RAHUL_PROFILE.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                    <span>•</span>
                    <a
                      href={`mailto:${RAHUL_PROFILE.email}`}
                      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      <FaEnvelope /> Email
                    </a>
                  </div>
                </div>

                {/* Input Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="p-3 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-black/40 flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about projects, Kotlin, hiring..."
                    disabled={isTyping}
                    className="flex-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-2.5 text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-amber-500/60 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="w-9 h-9 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-black flex items-center justify-center transition-all shadow-sm shrink-0 active:scale-90"
                    aria-label="Send message"
                  >
                    <FaPaperPlane size={12} />
                  </button>
                </form>
              </>
            )}
          </div>
        )}
      </aside>
    </>
  );
}

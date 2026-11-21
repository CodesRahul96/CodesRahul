"use client";

import React, { useRef } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "", compact = false }) {
  const { toggleTheme, theme, resolvedTheme, mounted } = useTheme();
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleTheme({ element: buttonRef.current });
  };

  const getLabelAndTitle = () => {
    if (!mounted) {
      return {
        label: "Switch theme mode",
        title: "Theme: System (Auto) — Next: Dark",
      };
    }
    if (theme === "system") {
      const activeText = resolvedTheme === "dark" ? "Dark" : "Light";
      return {
        label: `Current theme: System Auto (${activeText}). Click to switch to Dark theme.`,
        title: `Theme: System (${activeText}) — Next: Dark`,
      };
    }
    if (theme === "dark") {
      return {
        label: "Current theme: Dark. Click to switch to Light theme.",
        title: "Theme: Dark — Next: Light",
      };
    }
    return {
      label: "Current theme: Light. Click to switch to System Auto theme.",
      title: "Theme: Light — Next: System (Auto)",
    };
  };

  const { label, title } = getLabelAndTitle();

  return (
    <button
      ref={buttonRef}
      type="button"
      data-theme-toggle
      suppressHydrationWarning
      onClick={handleClick}
      className={`
        relative group overflow-hidden
        flex items-center justify-center
        ${compact ? "w-9 h-9" : "w-9 h-9"}
        rounded-full
        bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700
        dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/15 dark:text-gray-300
        hover:text-amber-500 dark:hover:text-amber-400
        hover:border-amber-500/40 dark:hover:border-amber-500/40
        shadow-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]
        transition-all duration-300 active:scale-95
        cursor-pointer z-20 touch-manipulation
        ${className}
      `}
      aria-label={label}
      title={title}
    >
      <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
        {/* System (Auto) Icon */}
        <FaDesktop
          className={`
            text-[12px] text-amber-500 dark:text-amber-400 transition-all duration-300 absolute
            ${
              !mounted || theme === "system"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }
          `}
        />
        {/* Dark (Moon) Icon */}
        <FaMoon
          className={`
            text-[13px] text-amber-400 transition-all duration-300 absolute
            ${
              mounted && theme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }
          `}
        />
        {/* Light (Sun) Icon */}
        <FaSun
          className={`
            text-[14px] text-amber-500 transition-all duration-300 absolute
            ${
              mounted && theme === "light"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-0 opacity-0"
            }
          `}
        />
      </div>
    </button>
  );
}
"use client";

import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "", compact = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      }}
      className={`
        relative group overflow-hidden
        flex items-center justify-center
        ${compact ? "w-8 h-8" : "w-9 h-9"}
        rounded-full
        bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700
        dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/15 dark:text-gray-300
        hover:text-amber-500 dark:hover:text-amber-400
        hover:border-amber-500/40 dark:hover:border-amber-500/40
        shadow-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]
        transition-all duration-300 active:scale-95
        cursor-pointer z-20
        ${className}
      `}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
        {/* Sun Icon for Light Mode */}
        <FaSun
          className={`
            text-[14px] text-amber-500 transition-all duration-300 absolute
            ${
              isDark
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }
          `}
        />
        {/* Moon Icon for Dark Mode */}
        <FaMoon
          className={`
            text-[13px] text-amber-400 transition-all duration-300 absolute
            ${
              isDark
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }
          `}
        />
      </div>
    </button>
  );
}

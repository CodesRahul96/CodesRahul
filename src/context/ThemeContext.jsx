"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext({
  theme: "system",
  resolvedTheme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  resetToSystem: () => {},
  mounted: false,
});

/**
 * Synchronously applies theme classes and meta theme-color to the DOM.
 */
function applyThemeToDOM(resolved) {
  if (typeof document === "undefined") return;
  const isDark = resolved === "dark";
  const root = document.documentElement;

  if (isDark) {
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    root.style.colorScheme = "light";
  }

  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", isDark ? "#050508" : "#f8fafc");
}

/**
 * Resolves active appearance based on current theme preference and OS preference.
 */
function resolveAppearance(targetTheme) {
  if (targetTheme === "dark") return "dark";
  if (targetTheme === "light") return "light";
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "dark";
}

/**
 * Reads initial theme from storage or DOM.
 */
function getSavedTheme() {
  if (typeof window === "undefined") return "system";
  try {
    const saved = localStorage.getItem("app-theme") || localStorage.getItem("theme");
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch (_) {}
  return "system";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  // Initial client boot synchronization
  useEffect(() => {
    const initialTheme = getSavedTheme();
    const initialResolved = resolveAppearance(initialTheme);

    setThemeState(initialTheme);
    setResolvedTheme(initialResolved);
    applyThemeToDOM(initialResolved);
    setMounted(true);
  }, []);

  // Real-time OS color-scheme listener with backward compatibility
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e) => {
      if (themeRef.current === "system") {
        const isDark = typeof e.matches === "boolean" ? e.matches : mq.matches;
        const newResolved = isDark ? "dark" : "light";
        setResolvedTheme(newResolved);
        applyThemeToDOM(newResolved);
      }
    };

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleSystemChange);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(handleSystemChange);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handleSystemChange);
      } else if (typeof mq.removeListener === "function") {
        mq.removeListener(handleSystemChange);
      }
    };
  }, []);

  /**
   * Directly sets the theme: "system" | "light" | "dark"
   */
  const setTheme = (nextTheme) => {
    const validTheme = nextTheme === "light" || nextTheme === "dark" ? nextTheme : "system";
    const nextResolved = resolveAppearance(validTheme);

    setThemeState(validTheme);
    setResolvedTheme(nextResolved);
    applyThemeToDOM(nextResolved);

    try {
      localStorage.setItem("app-theme", validTheme);
      localStorage.setItem("theme", validTheme);
    } catch (_) {}
  };

  /**
   * Resets theme to system auto mode
   */
  const resetToSystem = () => {
    setTheme("system");
  };

  /**
   * Smooth 3-state circular reveal toggle:
   * System (Auto) -> Dark -> Light -> System (Auto)
   */
  const toggleTheme = (options) => {
    const cycleMap = {
      system: "dark",
      dark: "light",
      light: "system",
    };

    const nextTheme = cycleMap[themeRef.current] || "dark";
    const nextResolved = resolveAppearance(nextTheme);
    const isNextLight = nextResolved === "light";

    // 1. Calculate physical click coordinates (x, y)
    let x = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    let y = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

    let targetEl = null;
    if (options && options.element) {
      targetEl = options.element;
    } else if (options && options.currentTarget) {
      targetEl = options.currentTarget;
    } else if (options && options.target && options.target.closest) {
      targetEl = options.target.closest("button") || options.target;
    } else if (typeof document !== "undefined") {
      targetEl = document.querySelector("[data-theme-toggle]");
    }

    if (targetEl && typeof targetEl.getBoundingClientRect === "function") {
      const rect = targetEl.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (options && typeof options.clientX === "number" && typeof options.clientY === "number") {
      x = options.clientX;
      y = options.clientY;
    }

    // 2. Compute radius needed to fully sweep the viewport
    const vw = typeof window !== "undefined" ? Math.max(window.innerWidth, document.documentElement.clientWidth || 0) : 0;
    const vh = typeof window !== "undefined" ? Math.max(window.innerHeight, document.documentElement.clientHeight || 0) : 0;
    const maxDistX = Math.max(x, vw - x);
    const maxDistY = Math.max(y, vh - y);
    const endRadius = Math.ceil(Math.hypot(maxDistX, maxDistY)) + 24;

    const commitThemeChange = () => {
      setThemeState(nextTheme);
      setResolvedTheme(nextResolved);
      applyThemeToDOM(nextResolved);
      try {
        localStorage.setItem("app-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
      } catch (_) {}
    };

    // 3. Instant switch for reduced-motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      commitThemeChange();
      return;
    }

    // 4. Circular View Transitions API (Chromium, Safari 18+)
    if (typeof document !== "undefined" && typeof document.startViewTransition === "function") {
      document.documentElement.classList.add("theme-transitioning");

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          commitThemeChange();
        });
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(${endRadius}px at ${x}px ${y}px)`,
              `circle(0px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: isNextLight ? 650 : 580,
            easing: "cubic-bezier(0.35, 0, 0.15, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
          }
        );
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove("theme-transitioning");
      });
      return;
    }

    // 5. CSS expanding ripple circle fallback (Firefox, legacy browsers)
    if (typeof document !== "undefined") {
      try {
        const ripple = document.createElement("div");
        ripple.className = "theme-ripple";
        const diameter = endRadius * 2.4;
        ripple.style.width = `${diameter}px`;
        ripple.style.height = `${diameter}px`;
        ripple.style.left = `${x - diameter / 2}px`;
        ripple.style.top = `${y - diameter / 2}px`;
        ripple.style.backgroundColor = nextResolved === "dark" ? "#050508" : "#f8fafc";
        document.body.appendChild(ripple);

        setTimeout(() => {
          commitThemeChange();
        }, 280);

        setTimeout(() => {
          if (ripple && ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 700);
        return;
      } catch (_) {}
    }

    commitThemeChange();
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        toggleTheme,
        setTheme,
        resetToSystem,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
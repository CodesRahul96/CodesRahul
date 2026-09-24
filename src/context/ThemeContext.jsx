"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  resetToSystem: () => {},
  isUserForced: false,
  mounted: false,
});

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.style.colorScheme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    document.documentElement.style.colorScheme = "light";
  }
}

/**
 * Read the theme the inline <head> script already applied to <html>.
 * This runs on the first client render so React state matches the DOM exactly —
 * eliminating all hydration mismatches in child components.
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark"; // SSR placeholder
  // The inline script already set the correct class — read it directly
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  // Initialise from the DOM (already corrected by the inline <head> script),
  // so the first client render matches the visible page — no flash/mismatch.
  const [theme, setThemeState] = useState(getInitialTheme);
  const [isUserForced, setIsUserForced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (saved) {
      setIsUserForced(true);
      // State already correct from getInitialTheme; just mark forced
    } else {
      setIsUserForced(false);
      // Keep listening for device theme changes (only when no user override)
    }

    setMounted(true);

    // Live-sync with device theme — only when the user has NOT forced a choice
    const handleSystemChange = (e) => {
      if (!localStorage.getItem("theme")) {
        const isDark = e.matches;
        setThemeState(isDark ? "dark" : "light");
        applyTheme(isDark);
      }
    };

    mq.addEventListener("change", handleSystemChange);
    return () => mq.removeEventListener("change", handleSystemChange);
  }, []);

  // Manual toggle — with circular reveal animation from click origin
  const toggleTheme = (e) => {
    const isDark = theme === "dark";
    const next = isDark ? "light" : "dark";
    const willBeDark = next === "dark";

    // 1. Calculate origin coordinates (button center, click event, or screen center)
    let x = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    let y = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

    if (e) {
      if (e.currentTarget && typeof e.currentTarget.getBoundingClientRect === "function") {
        const rect = e.currentTarget.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else if (typeof e.clientX === "number" && typeof e.clientY === "number" && (e.clientX !== 0 || e.clientY !== 0)) {
        x = e.clientX;
        y = e.clientY;
      }
    }

    // 2. Compute radius needed to fully cover viewport from (x, y) + buffer for corners
    const endRadius = typeof window !== "undefined"
      ? Math.ceil(
          Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
          )
        ) + 15
      : 0;

    // 3. Fallback for environments without document.startViewTransition (e.g. Firefox) or reduced-motion
    if (
      typeof document === "undefined" ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Create smooth circular ripple wave overlay for Firefox & unsupported engines
      if (typeof document !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        try {
          const ripple = document.createElement("div");
          ripple.className = "theme-ripple";
          const diameter = endRadius * 2.2;
          ripple.style.width = `${diameter}px`;
          ripple.style.height = `${diameter}px`;
          ripple.style.left = `${x - diameter / 2}px`;
          ripple.style.top = `${y - diameter / 2}px`;
          ripple.style.backgroundColor = willBeDark ? "#050508" : "#f8fafc";
          document.body.appendChild(ripple);
          setTimeout(() => {
            if (ripple && ripple.parentNode) {
              ripple.parentNode.removeChild(ripple);
            }
          }, 800);
        } catch (_) {}
      }

      setThemeState(next);
      try {
        localStorage.setItem("theme", next);
        setIsUserForced(true);
        applyTheme(willBeDark);
      } catch (err) {
        console.error("Theme toggle error:", err);
      }
      return;
    }

    // 4. Native View Transitions API (Chromium, Safari 18+)
    document.documentElement.classList.add("theme-transitioning");

    const transition = document.startViewTransition(() => {
      // flushSync ensures React synchronously updates the DOM before the snapshot is captured
      flushSync(() => {
        setThemeState(next);
        applyTheme(willBeDark);
      });
      try {
        localStorage.setItem("theme", next);
        setIsUserForced(true);
      } catch (err) {
        console.error("Theme toggle error:", err);
      }
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      const isSwitchingToLight = !willBeDark;
      const duration = isSwitchingToLight ? 750 : 650;
      const easing = "cubic-bezier(0.4, 0, 0.2, 1)"; // Gentle start (zero initial velocity spike), smooth glide

      document.documentElement.animate(
        {
          clipPath: willBeDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration,
          easing,
          fill: "forwards",
          pseudoElement: willBeDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove("theme-transitioning");
    });
  };

  // Direct set — also user-forced
  const changeTheme = (newTheme) => {
    try {
      localStorage.setItem("theme", newTheme);
      setIsUserForced(true);
      applyTheme(newTheme === "dark");
    } catch (err) {
      console.error("Theme change error:", err);
    }
    setThemeState(newTheme);
  };

  // Clear user override and re-sync with system preference
  const resetToSystem = () => {
    try {
      localStorage.removeItem("theme");
      setIsUserForced(false);
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(isDark);
      setThemeState(isDark ? "dark" : "light");
    } catch (err) {
      console.error("Reset to system error:", err);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: changeTheme, resetToSystem, isUserForced, mounted }}
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

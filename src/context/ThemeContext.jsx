"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

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

  // Manual toggle — user-forced, saves to localStorage
  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
        setIsUserForced(true);
        applyTheme(next === "dark");
      } catch (err) {
        console.error("Theme toggle error:", err);
      }
      return next;
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

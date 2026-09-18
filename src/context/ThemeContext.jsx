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

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  // true = user manually chose a theme (localStorage has a value)
  const [isUserForced, setIsUserForced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (saved) {
      // User previously forced a theme — respect it
      const isDark = saved === "dark";
      setThemeState(isDark ? "dark" : "light");
      setIsUserForced(true);
      applyTheme(isDark);
    } else {
      // No override — follow system
      const isDark = mq.matches;
      setThemeState(isDark ? "dark" : "light");
      setIsUserForced(false);
      applyTheme(isDark);
    }

    setMounted(true);

    // Live-sync with device theme — only when user hasn't forced a choice
    const handleSystemChange = (e) => {
      const hasSaved = localStorage.getItem("theme");
      if (!hasSaved) {
        const isDark = e.matches;
        setThemeState(isDark ? "dark" : "light");
        applyTheme(isDark);
      }
    };

    mq.addEventListener("change", handleSystemChange);
    return () => mq.removeEventListener("change", handleSystemChange);
  }, []);

  // Manual toggle — saves preference to localStorage (user-forced)
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

  // Reset to system preference — clears user override
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

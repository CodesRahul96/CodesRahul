"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved preference; fall back to system prefers-color-scheme
    const saved = localStorage.getItem("theme");
    let current;
    if (saved) {
      current = saved === "dark" ? "dark" : "light";
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      current = prefersDark ? "dark" : "light";
    }
    setTheme(current);
    if (current === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.style.colorScheme = "light";
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
          document.documentElement.style.colorScheme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
          document.documentElement.style.colorScheme = "light";
        }
      } catch (err) {
        console.error("Theme toggle error:", err);
      }
      return nextTheme;
    });
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.style.colorScheme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        document.documentElement.style.colorScheme = "light";
      }
    } catch (err) {
      console.error("Theme change error:", err);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: changeTheme, mounted }}>
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

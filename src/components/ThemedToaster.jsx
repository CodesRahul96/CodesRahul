"use client";

import React from "react";
import { Toaster } from "sonner";
import { useTheme } from "../context/ThemeContext";

export default function ThemedToaster() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="bottom-right"
      theme={resolvedTheme === "light" ? "light" : "dark"}
      toastOptions={{
        style:
          resolvedTheme === "light"
            ? {
                background: "#ffffff",
                border: "1px solid rgba(15, 23, 42, 0.12)",
                color: "#0f172a",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }
            : {
                background: "#070913",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
              },
      }}
    />
  );
}
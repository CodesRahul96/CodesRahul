import React, { useEffect, useState } from "react";
import Logo from "../assets/orangecode.svg";

/**
 * Modern Preloader
 * - shows centered logo + brand
 * - simulated progress bar (nice UX while assets load)
 * - calls onLoaded() when complete (if provided)
 */
const Preloader = ({ onLoaded, minDuration = 600 }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Preload logo to help LCP and SEO-friendly rendering
    try {
      if (typeof document !== "undefined") {
        const exists = document.querySelector(`link[rel="preload"][href="${Logo}"]`);
        if (!exists) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = Logo;
          document.head.appendChild(link);
        }
      }
    } catch {
      // ignore in non-browser environments
    }

    let mounted = true;
    const start = Date.now();

    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // respect reduced motion: complete quickly
      setProgress(100);
      setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        if (typeof onLoaded === "function") onLoaded();
      }, Math.max(minDuration, 300));
      return () => {
        mounted = false;
      };
    }

    const id = setInterval(() => {
      setProgress((p) => {
        // ease out progress, never go backward
        const next = Math.min(100, p + Math.random() * (10 - p / 12));
        return next;
      });
    }, 100);

    const checkComplete = setInterval(() => {
      if (!mounted) return;
      if (progress >= 98 || Date.now() - start > Math.max(minDuration, 800)) {
        clearInterval(id);
        clearInterval(checkComplete);
        // finalize to 100 and fade out
        setProgress(100);
        setTimeout(() => {
          if (!mounted) return;
          setVisible(false);
          if (typeof onLoaded === "function") onLoaded();
        }, 380);
      }
    }, 150);

    return () => {
      mounted = false;
      clearInterval(id);
      clearInterval(checkComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={progress < 100}
      className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center gap-6 px-6 py-8 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
            <img src={Logo} alt="CodesRahul logo" className="w-8 h-8" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-extrabold text-white leading-tight">
              <span className="text-yellow-400">Codes</span>
              <span className="text-gray-100">Rahul</span>
            </h1>
            <p className="text-xs text-gray-400">Loading, please wait…</p>
          </div>
        </div>

        <div className="w-64 sm:w-80">
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
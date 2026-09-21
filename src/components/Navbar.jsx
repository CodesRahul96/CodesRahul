"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDownload, FaSpinner } from "react-icons/fa";
import { NAV_LINKS, CV_FILE_ID, CV_FILENAME } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = useCallback(() => {
    const cvUrl = `https://drive.google.com/uc?export=download&id=${CV_FILE_ID}`;

    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = CV_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/75 dark:bg-[#050508]/80 backdrop-blur-md shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-slate-200/70 dark:border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center w-full">
          
          {/* Logo Brand Badge */}
          <Link href="/" prefetch={true} className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight">
                <span className="text-slate-900 dark:text-white">Codes</span><span className="text-amber-500">Rahul</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-amber-600 dark:text-amber-400/80 uppercase font-medium">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Floating Pill Nav */}
          <ul className="hidden md:flex space-x-1 items-center bg-white/90 dark:bg-slate-950 backdrop-blur-xl border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-300">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.path}
                    prefetch={true}
                    className={`relative z-10 text-[11px] font-mono uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 block ${
                      isActive
                        ? "text-black font-bold bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions (Desktop: ThemeToggle + Resume CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className={`
                group relative overflow-hidden
                flex items-center gap-2.5 
                border border-amber-500
                bg-amber-500 hover:bg-amber-400
                text-black font-mono text-[11px] uppercase tracking-widest font-bold
                py-2.5 px-5 rounded-full
                transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.35)]
                ${isDownloading ? "cursor-not-allowed opacity-50" : ""}
              `}
            >
              {isDownloading ? (
                <>
                  <FaSpinner className="animate-spin text-xs" />
                  <span>Processing</span>
                </>
              ) : (
                <>
                  <FaDownload className="text-xs transition-transform group-hover:-translate-y-0.5" />
                  <span>Resume</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Right Bar: ThemeToggle + Hamburger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle compact />
            <button
              onClick={toggleMenu}
              className="text-slate-800 dark:text-white focus:outline-none z-50 relative p-2"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span
                  className={`h-[2px] bg-amber-500 dark:bg-amber-400 block transition-all duration-300 ${
                    isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
                />
                <span
                  className={`h-[2px] bg-slate-800 dark:bg-white block transition-all duration-300 ${
                    isOpen ? "opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`h-[2px] bg-slate-800 dark:bg-white block transition-all duration-300 ${
                    isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Glass Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 dark:bg-[#070710]/95 backdrop-blur-2xl z-[45] flex flex-col justify-center items-center px-6 overflow-hidden transition-colors duration-300">
          <ul className="flex flex-col items-center space-y-8 w-full relative z-10 mt-8">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  prefetch={true}
                  onClick={toggleMenu}
                  className={`text-3xl font-serif tracking-tight transition-colors duration-300 block ${
                    pathname === item.path
                      ? "text-amber-500 dark:text-amber-400 font-bold italic"
                      : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-6 w-full max-w-xs space-y-4">
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="w-full flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                {isDownloading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <FaDownload />
                    <span>Download Resume</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default React.memo(Navbar);

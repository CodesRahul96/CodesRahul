"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaSpinner } from "react-icons/fa";
import { NAV_LINKS, CV_FILE_ID, CV_FILENAME } from "../constants";

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
    }, 2000);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isOpen
            ? "bg-transparent py-6 border-b border-transparent"
            : scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center w-full">
        {/* Logo */}
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tighter uppercase flex flex-col leading-none">
                <span>Codes</span>
                <span className="text-gray-500 text-sm tracking-widest font-sans font-light">Rahul</span>
            </Link>
        </motion.div>

        {/* Hamburger Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50 relative p-2"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-between items-end"
            >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, width: "100%" },
                    open: { rotate: 45, y: 10, width: "100%" },
                  }}
                  className="h-[1px] bg-white block transition-all"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, width: "70%" },
                    open: { opacity: 0, width: "0%" },
                  }}
                  className="h-[1px] bg-white block transition-all"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, width: "100%" },
                    open: { rotate: -45, y: -12, width: "100%" },
                  }}
                  className="h-[1px] bg-white block transition-all"
                />
            </motion.div>
          </button>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-10 items-center">
          {NAV_LINKS.map((item) => {
             const isActive = pathname === item.path;
             return (
                <li key={item.name} className="relative group overflow-hidden">
                    <Link
                        href={item.path}
                        prefetch={false}
                        className={`relative z-10 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 pb-1 block ${
                            isActive ? "text-white" : "text-gray-500 hover:text-white"
                        }`}
                    >
                        {item.name}
                    </Link>
                    <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300"
                        initial={false}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        whileHover={{ width: "100%" }}
                    />
                </li>
             );
          })}
        </ul>
        
        {/* CV Button (Desktop) */}
        <div className="hidden md:block">
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className={`
                group relative overflow-hidden
                flex items-center gap-3 
                border border-white/20 
                hover:border-white hover:bg-white
                text-white hover:text-black
                py-3 px-6 rounded-none
                transition-all duration-500 text-[10px] uppercase tracking-widest font-bold
                ${isDownloading ? 'cursor-not-allowed opacity-50' : ''}
              `}
            >
              {isDownloading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Processing</span>
                </>
              ) : (
                <>
                  <FaDownload className="transition-transform group-hover:-translate-y-1" />
                  <span>Resume</span>
                </>
              )}
            </button>
        </div>

      </div>
    </motion.nav>

    {/* Mobile Menu */}
    <AnimatePresence>
        {isOpen && (
        <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-[#050505] z-[45] flex flex-col justify-center items-center px-6 overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none noise-bg opacity-[0.03]"></div>
             <motion.ul 
                initial="closed"
                animate="open"
                variants={{
                    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                className="flex flex-col items-center space-y-8 w-full relative z-10 mt-16"
             >
                {NAV_LINKS.map((item) => (
                    <motion.li 
                        key={item.name}
                        variants={{
                            open: { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: 20 }
                        }}
                    >
                        <Link
                            href={item.path}
                            prefetch={false}
                            onClick={toggleMenu}
                            className={`text-4xl md:text-5xl font-serif tracking-tight transition-colors duration-300 block ${
                                pathname === item.path
                                ? "text-white italic"
                                : "text-gray-500 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
                <motion.li
                     variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                    }}
                    className="pt-12 w-full max-w-xs"
                >
                    <button
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className={`
                        w-full flex items-center justify-center gap-3
                        border border-white/20 text-white hover:bg-white hover:text-black
                        text-xs uppercase tracking-widest font-bold py-4 px-6 rounded-none
                        transition duration-500 
                        ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    >
                     {isDownloading ? (
                        <>
                            <FaSpinner className="animate-spin" />
                            <span>Processing</span>
                        </>
                    ) : (
                        <>
                            <FaDownload />
                            <span>Download Resume</span>
                        </>
                    )}
                    </button>
                </motion.li>
            </motion.ul>
        </motion.div>
        )}
    </AnimatePresence>
  </>
  );
}

export default React.memo(Navbar);

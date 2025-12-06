import React, { useState, useCallback, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, CV_FILE_ID, CV_FILENAME } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md shadow-lg border-b border-gray-800 py-2"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
        >
            <NavLink to="/" className="text-3xl font-extrabold text-gray-100 tracking-tight flex items-center gap-1">
                <span className="text-yellow-400">Codes</span>Rahul
            </NavLink>
        </motion.div>

        {/* Hamburger Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none z-50 relative p-2"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-6 h-0.5 bg-yellow-400 block mb-1.5"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-yellow-400 block mb-1.5"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-6 h-0.5 bg-yellow-400 block"
                />
            </motion.div>
          </button>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-2 items-center bg-gray-900/50 p-1.5 rounded-full border border-gray-800/50 backdrop-blur-sm">
          {NAV_LINKS.map((item) => {
             const isActive = location.pathname === item.path;
             return (
                <li key={item.name} className="relative">
                    {isActive && (
                        <motion.div
                            layoutId="navbar-indicator"
                            className="absolute inset-0 bg-gray-800 rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <NavLink
                        to={item.path}
                        className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                            isActive ? "text-yellow-400" : "text-gray-300 hover:text-white"
                        }`}
                    >
                        {item.name}
                    </NavLink>
                </li>
             );
          })}
        </ul>
        
        {/* CV Button (Desktop) */}
        <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className={`bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold py-2.5 px-6 rounded-full shadow-lg shadow-yellow-500/20 transition duration-300 text-sm ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isDownloading ? 'Downloading...' : 'Download CV'}
            </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "100vh" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                className="md:hidden absolute top-0 left-0 w-full bg-gray-950 z-[45] flex flex-col pt-24 px-6 overflow-hidden"
            >
                 <motion.ul 
                    initial="closed"
                    animate="open"
                    variants={{
                        open: { transition: { staggerChildren: 0.1 } },
                        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                    className="flex flex-col space-y-6"
                 >
                    {NAV_LINKS.map((item) => (
                        <motion.li 
                            key={item.name}
                            variants={{
                                open: { opacity: 1, x: 0 },
                                closed: { opacity: 0, x: -20 }
                            }}
                        >
                            <NavLink
                                to={item.path}
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                `text-3xl font-bold transition-colors duration-300 block py-2 ${
                                    isActive
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                                }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </motion.li>
                    ))}
                    <motion.li
                         variants={{
                            open: { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: 20 }
                        }}
                        className="pt-8"
                    >
                        <button
                        onClick={handleDownloadCV}
                        disabled={isDownloading}
                        className={`w-full bg-yellow-500 hover:bg-yellow-600 text-xl text-gray-900 font-bold py-4 px-6 rounded-xl shadow-lg transition duration-300 ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                        {isDownloading ? 'Downloading...' : 'Download CV'}
                        </button>
                    </motion.li>
                </motion.ul>
            </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default React.memo(Navbar);

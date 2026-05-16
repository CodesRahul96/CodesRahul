"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    let currentProgress = 0;
    
    // Simulate a fast, smooth, non-linear loading curve
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      
      if (currentProgress > 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Wait a tiny bit at 100% before firing the exit animation
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 400);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle noise texture to match the brand */}
          <div className="absolute inset-0 pointer-events-none noise-bg opacity-[0.03]"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
            
            {/* The Brand Name */}
            <div className="overflow-hidden mb-12">
               <motion.h1 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tighter uppercase flex flex-col items-center leading-none"
               >
                  <span>Codes</span>
                  <span className="text-gray-500 text-sm tracking-widest font-sans font-light">Rahul</span>
               </motion.h1>
            </div>

            {/* Brutalist Loading Bar & Counter */}
            <div className="w-full flex items-center justify-between gap-4">
              <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
              <motion.span 
                className="text-xs font-mono text-white tracking-widest w-12 text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {progress}%
              </motion.span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
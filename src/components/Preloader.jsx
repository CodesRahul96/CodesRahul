import React, { useEffect, useState } from "react";
import Logo from "../assets/orangecode.svg";

/**
 * Modern Preloader
 */
const Preloader = ({ onLoaded, minDuration = 800 }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // preload logo
    try {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = Logo;
      document.head.appendChild(link);
    } catch {}

    let mounted = true;
    const start = Date.now();

    const interval = setInterval(() => {
        setProgress(old => {
            const next = old + Math.random() * 5; 
            return next > 90 ? 90 : next; // Stall at 90% until done
        });
    }, 100);

    const onComplete = () => {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
             if(mounted) setVisible(false);
             if(onLoaded) onLoaded();
        }, 500);
    };

    // Simulate checks or waiting for window load if needed
    // For now we just use a timer + simulated progress
    const checkTimeout = setTimeout(() => {
        onComplete();
    }, minDuration);

    const loadListener = () => {
         // Window loaded, ensure we wait at least minDuration
         const elapsed = Date.now() - start;
         if (elapsed < minDuration) {
             setTimeout(onComplete, minDuration - elapsed);
         } else {
             onComplete();
         }
         clearTimeout(checkTimeout);
    };

    if (document.readyState === 'complete') {
        loadListener();
    } else {
        window.addEventListener('load', loadListener);
    }

    return () => {
      mounted = false;
      window.removeEventListener('load', loadListener);
      clearTimeout(checkTimeout);
      clearInterval(interval);
    };
  }, [minDuration, onLoaded]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}
    >
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse"></div>
            <img src={Logo} alt="CodesRahul" className="w-20 h-20 relative z-10 animate-bounce-slow" />
        </div>

        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Codes</span>Rahul
        </h1>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
                className="h-full bg-amber-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
        <p className="mt-4 text-gray-500 text-sm font-mono tracking-widest">{Math.round(progress)}%</p>
    </div>
  );
};

export default Preloader;
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show top progress bar on route change
    setLoading(true);
    setProgress(30);

    const timer1 = setTimeout(() => setProgress(70), 100);
    const timer2 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 200);
    }, 250);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div 
        className="h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(245,158,11,0.8)]"
        style={{ 
          width: `${progress}%`,
          opacity: loading ? 1 : 0 
        }}
      />
    </div>
  );
};

export default React.memo(Preloader);
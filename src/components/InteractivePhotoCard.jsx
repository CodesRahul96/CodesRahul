"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function InteractivePhotoCard({
  imageSrc,
  alt = "Rahul Misal",
  badgeText = "Rahul Misal — Pune, India",
  priority = false,
  className = "",
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0 });
  const [isActive, setIsActive] = useState(false);
  const rafId = useRef(null);

  const calculateTilt = useCallback((clientX, clientY) => {
    if (!cardRef.current) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Subtle tilt: max 6 degrees
      const normalizedX = (x / rect.width) * 2 - 1;
      const normalizedY = (y / rect.height) * 2 - 1;
      const maxTilt = 6;
      const rotateX = -normalizedY * maxTilt;
      const rotateY = normalizedX * maxTilt;

      setCoords({
        rotateX: Number(rotateX.toFixed(2)),
        rotateY: Number(rotateY.toFixed(2)),
      });
    });
  }, []);

  const handleMouseMove = (e) => calculateTilt(e.clientX, e.clientY);
  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsActive(false);
    setCoords({ rotateX: 0, rotateY: 0 });
  };

  const handleTouchStart = (e) => {
    setIsActive(true);
    if (e.touches && e.touches[0]) calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
  };
  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
  };
  const handleTouchEnd = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsActive(false);
    setCoords({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative select-none touch-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Restrained Human Card Frame */}
      <div
        className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] rounded-2xl p-1 bg-white dark:bg-[#070913] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-md transition-transform duration-200 ease-out cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isActive
            ? `rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)`
            : "rotateX(0deg) rotateY(0deg)",
        }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-50 dark:bg-[#0a0d18] flex items-center justify-center border border-slate-100 dark:border-white/5">
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-contain object-bottom p-1.5"
              priority={priority}
            />
          </div>
        </div>

        {badgeText && (
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-mono tracking-wider shadow-sm whitespace-nowrap pointer-events-none font-medium">
            {badgeText}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function InteractivePhotoCard({
  imageSrc,
  alt = "Rahul Misal",
  badgeText = "Rahul Misal — Pune, India",
  gradientBorder = "from-white/15 via-amber-500/20 to-transparent",
  glowColor = "rgba(245, 158, 11, 0.25)",
  priority = false,
  className = "",
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates: -1 to +1
      const normalizedX = (x / rect.width) * 2 - 1;
      const normalizedY = (y / rect.height) * 2 - 1;

      // Max tilt degrees
      const maxTilt = 14;
      const rotateX = -normalizedY * maxTilt;
      const rotateY = normalizedX * maxTilt;

      // Glare position in percentages
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setCoords({
        rotateX: Number(rotateX.toFixed(2)),
        rotateY: Number(rotateY.toFixed(2)),
        glareX: Number(glareX.toFixed(1)),
        glareY: Number(glareY.toFixed(1)),
      });
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        perspective: "1200px",
      }}
    >
      {/* 3D Root Card */}
      <div
        className={`relative w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] rounded-3xl p-1 bg-gradient-to-b ${gradientBorder} backdrop-blur-xl border border-white/15 shadow-2xl transition-transform ease-out cursor-pointer`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transitionDuration: isHovered ? "120ms" : "600ms",
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}, 0 0 30px rgba(0,0,0,0.8)`
            : "0 20px 40px -15px rgba(0,0,0,0.7)",
        }}
      >
        {/* Inner Card Frame */}
        <div
          className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#070913] flex items-center justify-center border border-white/10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Ambient Background Glow inside frame */}
          <div
            className="absolute -top-16 -left-16 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.8 : 0.4 }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.8 : 0.4 }}
          />

          {/* Micro Grid Ambient Texture */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Developer Photo Layer with 3D Depth */}
          <div
            className="relative w-full h-full flex items-center justify-center p-2 transition-transform ease-out"
            style={{
              transform: isHovered ? "translateZ(35px) scale(1.04)" : "translateZ(0px) scale(1)",
              transitionDuration: isHovered ? "150ms" : "600ms",
            }}
          >
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-contain object-bottom p-1.5 transition-filter duration-300"
              priority={priority}
            />
          </div>

          {/* Specular Glare / Light Reflection Overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[22px] transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.45 : 0,
              background: `radial-gradient(circle 280px at ${coords.glareX}% ${coords.glareY}%, rgba(255, 255, 255, 0.45), rgba(255,255,255,0.05) 50%, transparent 80%)`,
            }}
          />
        </div>

        {/* 3D Floating Role Badge */}
        {badgeText && (
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0a0d18] border border-white/20 text-amber-400 text-[10px] font-mono uppercase tracking-widest shadow-xl whitespace-nowrap pointer-events-none transition-transform ease-out"
            style={{
              transform: isHovered
                ? "translateX(-50%) translateZ(55px) scale(1.05)"
                : "translateX(-50%) translateZ(0px) scale(1)",
              transitionDuration: isHovered ? "150ms" : "600ms",
              boxShadow: isHovered
                ? "0 10px 25px rgba(0,0,0,0.9), 0 0 15px rgba(245,158,11,0.3)"
                : "0 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            {badgeText}
          </div>
        )}

        {/* Interactive Hologram Corner Accents */}
        <div
          className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-amber-400 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.3,
            boxShadow: isHovered ? "0 0 8px rgba(245, 158, 11, 0.9)" : "none",
          }}
        />
        <div
          className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-cyan-400 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.3,
            boxShadow: isHovered ? "0 0 8px rgba(6, 182, 212, 0.9)" : "none",
          }}
        />
      </div>
    </div>
  );
}

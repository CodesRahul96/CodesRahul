"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaCode, FaTerminal } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function DevProfileAvatar({ variant = "home" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt matrix calculation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateY = (x / (rect.width / 2)) * 14;
    const rotateX = -(y / (rect.height / 2)) * 14;

    setTransform({
      rotateX: rotateX.toFixed(2),
      rotateY: rotateY.toFixed(2),
      shadowX: (x / 8).toFixed(2),
      shadowY: (y / 8).toFixed(2)
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0 });
  };

  // Background floating code particles & light matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const width = (canvas.width = 340);
    const height = (canvas.height = 420);

    const particles = [];
    const charList = ["0", "1", "{", "}", "<>", "=>", "React", "JS", "Node", "CSS"];

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        char: charList[Math.floor(Math.random() * charList.length)],
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.2 + Math.random() * 0.6,
        size: 9 + Math.random() * 5
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
        ctx.font = `${p.size}px monospace`;
        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] perspective-1000 cursor-pointer select-none"
    >
      {/* Outer Solid 3D Card Box */}
      <div
        className="w-full h-full rounded-3xl p-1 bg-gradient-to-br from-amber-500/30 via-cyan-500/20 to-purple-500/30 border border-white/20 shadow-2xl transition-transform duration-150 ease-out flex flex-col justify-between overflow-hidden relative"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          boxShadow: isHovered
            ? `${transform.shadowX}px ${transform.shadowY}px 35px rgba(245, 158, 11, 0.25)`
            : "0 15px 35px rgba(0,0,0,0.7)",
        }}
      >
        {/* Solid Rich Dark Container Fill (No glassy transparency inside Dev Card) */}
        <div className="absolute inset-0 bg-[#070914] rounded-[22px] overflow-hidden border border-amber-500/20">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

          {/* Floating Code Matrix Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />

          {/* Top Status Header */}
          <div className="relative z-20 flex justify-between items-center p-5">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DEV // ONLINE</span>
            </div>
            <div className="text-gray-400 hover:text-white transition-colors">
              <FaCode className="text-amber-400 text-base" />
            </div>
          </div>

          {/* Animated 2D/3D Developer Person Illustration */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto px-4 -mt-2">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              
              {/* Background Glowing Aura Ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-500/25 via-cyan-500/20 to-purple-500/25 blur-xl animate-pulse" />

              {/* Vector Developer Character (Headphones, Hoodie, Laptop) */}
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                <defs>
                  <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>

                {/* Character Body / Hoodie */}
                <path d="M 40 180 C 40 135 65 125 100 125 C 135 125 160 135 160 180 Z" fill="url(#hoodieGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <path d="M 85 125 L 100 155 L 115 125 Z" fill="#0f172a" />

                {/* Neck */}
                <rect x="90" y="112" width="20" height="16" rx="4" fill="#fdba74" />

                {/* Head */}
                <rect x="75" y="65" width="50" height="52" rx="24" fill="#fdba74" />

                {/* Stylish Hair */}
                <path d="M 72 70 C 72 45 90 40 100 40 C 115 40 128 48 128 70 C 122 60 108 58 95 62 Z" fill="url(#hairGrad)" />

                {/* Glasses */}
                <rect x="79" y="80" width="18" height="12" rx="3" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <rect x="103" y="80" width="18" height="12" rx="3" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <line x1="97" y1="86" x2="103" y2="86" stroke="#f59e0b" strokeWidth="2" />

                {/* Headphones */}
                <path d="M 68 85 C 65 52 135 52 132 85" fill="none" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
                <rect x="64" y="80" width="10" height="20" rx="4" fill="#06b6d4" />
                <rect x="126" y="80" width="10" height="20" rx="4" fill="#06b6d4" />

                {/* Animated Typing Holographic Laptop Screen */}
                <g className="animate-bounce-slow">
                  <path d="M 55 155 L 145 155 L 155 185 L 45 185 Z" fill="#0f172a" stroke="url(#laptopGrad)" strokeWidth="2" />
                  {/* Glowing Screen Light */}
                  <polygon points="65,155 135,155 145,178 55,178" fill="rgba(245, 158, 11, 0.3)" />
                  {/* Code lines on laptop screen */}
                  <line x1="72" y1="163" x2="110" y2="163" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="72" y1="170" x2="128" y2="170" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            <div className="text-center mt-1">
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-white tracking-wide">
                Rahul Misal
              </h3>
              <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mt-0.5">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Bottom Tech Icons & Terminal Line */}
          <div className="relative z-20 p-5 pt-0 space-y-3">
            <div className="flex justify-center items-center gap-3 py-2 px-4 rounded-xl bg-black/50 border border-white/10 text-gray-300 text-sm">
              <SiReact className="hover:text-cyan-400 hover:scale-125 transition-all" title="React" />
              <FaNodeJs className="hover:text-emerald-400 hover:scale-125 transition-all" title="Node.js" />
              <SiTypescript className="hover:text-blue-400 hover:scale-125 transition-all" title="TypeScript" />
              <SiTailwindcss className="hover:text-cyan-300 hover:scale-125 transition-all" title="Tailwind CSS" />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 px-3 py-1.5 rounded-lg bg-black/70 border border-white/10">
              <span className="flex items-center gap-1.5 text-amber-400">
                <FaTerminal className="text-[9px]" />
                <span>build(&quot;awesome_apps&quot;)</span>
              </span>
              <span className="text-gray-500">v3.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute -top-3 -right-3 z-30 px-3 py-1.5 rounded-xl bg-amber-500 text-black text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg animate-bounce-slow">
        3+ Yrs Exp
      </div>

      <div className="absolute -bottom-3 -left-3 z-30 px-3 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
        ⚡ 100% Performant
      </div>
    </div>
  );
}

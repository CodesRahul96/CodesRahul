"use client";

import React, { useEffect, useRef } from "react";

export default function AppBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radiusSq: 22500 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      // Read from DOM directly — always accurate, reacts to theme changes immediately
      const isDarkMode = document.documentElement.classList.contains("dark");
      const rgb = isDarkMode ? "245, 158, 11" : "217, 119, 6";

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distSqMouse = dxMouse * dxMouse + dyMouse * dyMouse;

        let alphaMultiplier = 1;
        if (distSqMouse < mouse.radiusSq) {
          alphaMultiplier = 1 + (1 - Math.sqrt(distSqMouse) / 150) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        const particleAlpha = isDarkMode
          ? Math.min(p1.baseAlpha * alphaMultiplier, 0.85)
          : Math.min(p1.baseAlpha * 1.2 * alphaMultiplier, 0.9);
        ctx.fillStyle = `rgba(${rgb}, ${particleAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 10000) {
            const dist = Math.sqrt(distSq);
            const lineAlphaMultiplier = isDarkMode ? 0.12 : 0.18;
            const lineAlpha = (1 - dist / 100) * lineAlphaMultiplier * alphaMultiplier;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${rgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Pure Tailwind dark: classes — no JS-driven className → zero hydration mismatch
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#f8fafc] dark:bg-[#07070c] transition-colors duration-300">
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/15 dark:bg-amber-500/10 blur-[150px] pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-sky-400/15 dark:bg-purple-600/10 blur-[170px] pointer-events-none transition-colors duration-300" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ willChange: "transform" }} />
    </div>
  );
}

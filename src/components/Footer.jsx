import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-10 w-full pt-20 pb-12 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Call to Action Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono">
              Available for New Projects
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-medium tracking-tight text-white leading-tight">
              Let&apos;s Build <br />
              <span className="text-amber-400 italic">Something Extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-base font-light max-w-lg">
              Have an ambitious project or want to level up your existing digital presence? Let&apos;s turn your vision into high-impact code.
            </p>
          </div>

          <Link 
            href="/contact"
            className="relative z-10 group flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-500 shrink-0 hover:scale-105"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase font-mono font-bold tracking-widest">Get In Touch</span>
              <FaArrowRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="text-xl font-serif font-bold text-white tracking-tight">
              Codes<span className="text-amber-400 font-mono text-sm font-light">Rahul</span>
            </Link>
            <span className="hidden sm:inline text-gray-600">|</span>
            <p className="text-xs font-mono text-gray-400">
              © {new Date().getFullYear()} Rahul Misal. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:codesrahul96@gmail.com" 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-amber-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full transition-all hover:border-amber-500/30"
            >
              <FaEnvelope /> Email
            </a>
            <a 
              href="https://github.com/codesrahul96" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-amber-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full transition-all hover:border-amber-500/30"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/codesrahul" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-amber-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full transition-all hover:border-amber-500/30"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default React.memo(Footer);

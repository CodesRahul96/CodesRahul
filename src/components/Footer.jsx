import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-10 w-full pt-20 pb-12 border-t border-slate-200 dark:border-white/10 bg-slate-100/40 dark:bg-white/[0.02] backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Call to Action Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] backdrop-blur-md shadow-xl dark:shadow-2xl relative overflow-hidden group transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-medium">
              Available for New Projects
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-medium tracking-tight text-slate-900 dark:text-white leading-tight">
              Let&apos;s Build <br />
              <span className="text-amber-500 dark:text-amber-400 italic">Something Extraordinary.</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base font-light max-w-lg">
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
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-black font-black text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform">
                R
              </div>
              <span className="text-xl font-black tracking-tight">
                <span className="text-slate-900 dark:text-white">Codes</span><span className="text-amber-500">Rahul</span>
              </span>
            </Link>
            <span className="hidden sm:inline text-slate-300 dark:text-gray-600">|</span>
            <p className="text-xs font-mono text-slate-500 dark:text-gray-400">
              © {new Date().getFullYear()} Rahul Misal. All rights reserved.
            </p>
          </div>

          {/* Navigation & Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a 
              href="https://blogsify.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full transition-all hover:bg-amber-500/20 shadow-sm"
              title="Blogsify — Technical Blog by Rahul Misal"
            >
              <span>Blog</span> ↗
            </a>
            <a 
              href="mailto:codesrahul96@gmail.com" 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full transition-all hover:border-amber-500/40 dark:hover:border-amber-500/30 shadow-sm"
            >
              <FaEnvelope /> Email
            </a>
            <a 
              href="https://github.com/codesrahul96" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full transition-all hover:border-amber-500/40 dark:hover:border-amber-500/30 shadow-sm"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/codesrahul" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full transition-all hover:border-amber-500/40 dark:hover:border-amber-500/30 shadow-sm"
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

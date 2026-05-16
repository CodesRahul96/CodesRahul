import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10 relative overflow-hidden w-full">
      <div className="absolute inset-0 pointer-events-none noise-bg opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Massive Call to Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div className="space-y-6 max-w-2xl">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter leading-none text-white">
                    Let&apos;s Build<br />
                    <span className="text-gray-500 italic">Something.</span>
                </h2>
                <p className="text-gray-400 text-lg font-light max-w-md">
                    Looking for a developer to architect your next big idea? I&apos;m currently open for new opportunities.
                </p>
            </div>
            
            <Link 
                href="/contact"
                className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-500 shrink-0"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-bold">Start</span>
                    <FaArrowRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </Link>
        </div>

        {/* Bottom Bar: Links and Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div className="flex flex-col gap-2">
                <Link href="/" className="text-xl font-serif font-bold text-white tracking-tighter uppercase flex items-baseline gap-2">
                    <span>Codes</span>
                    <span className="text-gray-500 text-[10px] tracking-widest font-sans font-light">Rahul</span>
                </Link>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                    © {new Date().getFullYear()} Rahul Misal. All rights reserved.
                </p>
            </div>

            <div className="flex items-center gap-6">
                <a href="mailto:codesrahul96@gmail.com" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all">
                    Email
                </a>
                <a href="https://github.com/codesrahul96" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/codesrahul" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all">
                    LinkedIn
                </a>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

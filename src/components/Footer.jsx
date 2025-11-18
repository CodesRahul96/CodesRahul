import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 relative text-gray-300 py-6">
      {/* subtle ripple behind footer */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-6 ripple-grid" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">© {new Date().getFullYear()}</span>
            <a
              href="/"
              className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition-colors"
            >
              CodesRahul
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/codesrahul96"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/codesrahul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <p className="text-xs text-gray-500">Made with <span aria-hidden>❤️</span> by <a href="https://codesrahul.xyz" className="underline text-gray-400 hover:text-yellow-400">CodesRahul</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

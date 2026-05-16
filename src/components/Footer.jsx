import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { NAV_LINKS } from "../constants";

function Footer() {
  return (
    <footer className="bg-gray-950 relative text-gray-300 pt-16 pb-8 border-t border-gray-900 overflow-hidden">
      {/* subtle ripple behind footer */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-5 ripple-grid" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
                <Link to="/" className="text-2xl font-bold tracking-tight inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Codes</span><span className="text-gray-100">Rahul</span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Building digital experiences with modern technologies. focused on performance, accessibility, and user-centric design.
                </p>
                <div className="flex space-x-4 pt-2">
                     <a href="https://github.com/codesrahul96" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20}/></a>
                     <a href="https://linkedin.com/in/codesrahul" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><FaLinkedin size={20}/></a>
                     <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter size={20}/></a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-gray-100 font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    {NAV_LINKS.map(link => (
                        <li key={link.name}>
                            <Link to={link.path} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-gray-100 font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-400">
                        <FaEnvelope className="text-amber-500 shrink-0" />
                        <a href="mailto:codesrahul96@gmail.com" className="hover:text-white transition-colors">codesrahul96@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-400">
                        <FaMapMarkerAlt className="text-amber-500 shrink-0" />
                        <span>Pune, Maharashtra, India</span>
                    </li>
                </ul>
            </div>

            {/* Newsletter / CTA */}
            <div>
                <h3 className="text-gray-100 font-semibold mb-4">Hire Me</h3>
                <p className="text-gray-400 text-sm mb-4">
                    Always open to new opportunities and interesting projects.
                </p>
                <Link 
                    to="/contact"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-black text-sm font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
                >
                    Let's Talk
                </Link>
            </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Rahul Misal. All rights reserved.
             </p>
             <p className="text-xs text-gray-500 flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤</span> in React & Tailwind
             </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

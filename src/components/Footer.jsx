import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold text-gray-100 mb-4 animate-fadeIn">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {["Home", "About", "Projects", "Contact"].map((item) => (
                    <li key={item} className="animate-fadeIn delay-200">
                      <Link
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold text-gray-100 mb-4 animate-fadeIn delay-200">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center animate-fadeIn delay-400">
                    <FaEnvelope className="text-yellow-400 mr-2" />
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      codesrahul96@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center animate-fadeIn delay-600">
                    <FaPhone className="text-yellow-400 mr-2" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      +91 8805159425
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold text-gray-100 mb-4 animate-fadeIn delay-400">
                  Follow Me
                </h3>
                <div className="flex space-x-4 animate-fadeIn delay-600">
                  <a
                    href="https://github.com/codesrahul96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/codesrahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://twitter.com/Codesrahul96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Divider with Gradient */}
            <div className="my-8 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full animate-fadeIn delay-1000"></div>

            {/* Copyright Notice */}
            <div className="text-center animate-fadeIn delay-1200">
              <p className="text-gray-400">
                © {new Date().getFullYear()} CodesRahul. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

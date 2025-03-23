import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    // Google Drive file ID (replace with your actual file ID)
    const fileId = "1buayPMpn_P3-tEYAxt_JzBekcj8vyB_4";
    // Construct direct download URL from Google Drive
    const cvUrlOrg = `https://drive.google.com/file/d/1buayPMpn_P3-tEYAxt_JzBekcj8vyB_4/view?usp=sharing`;
    const cvUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    setIsDownloading(true);
    
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Rahul-Misal-CV.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset downloading state after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-gray-950 via-blue-550 to-violet-950 shadow-lg animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-gray-100 tracking-tight">
          <Link to="/">
            <span className="text-yellow-300 animate-pulse">Codes</span>Rahul
          </Link>
        </h1>

        {/* Hamburger Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-300 focus:outline-none"
          >
            <div
              className={`w-8 h-1 bg-gray-400 mb-1 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-gray-400 mb-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-gray-400 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="relative text-lg font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative text-lg font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            {/* <button
              onClick={handleDownloadCV}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-pulse"
            >
              Download CV
            </button> */}
            <button
          onClick={handleDownloadCV}
          className={`bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105
            ${isDownloading ? 'animate-bounce' : ''}`}
          disabled={isDownloading}
        >
          {isDownloading ? 'Downloading...' : 'Download CV'}
        </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950 shadow-lg transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-lg font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            {["About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-lg font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleDownloadCV}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-pulse"
              >
                Download CV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

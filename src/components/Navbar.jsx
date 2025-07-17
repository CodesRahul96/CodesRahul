import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import { toast } from "react-toastify";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    // Google Drive file ID (replace with your actual file ID)
    const fileId = "1buayPMpn_P3-tEYAxt_JzBekcj8vyB_4";
    // const cvUrlOrg = `https://drive.google.com/file/d/1buayPMpn_P3-tEYAxt_JzBekcj8vyB_4/view?usp=sharing`;
    const cvUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Rahul-Misal-CV.pdf"; // filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset downloading state after 2 secondss
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
          <NavLink to="/">
            <span className="text-yellow-300 animate-pulse">Codes</span>Rahul
          </NavLink>
        </h1>

        {/* Hamburger Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-300 focus:outline-none"
          >
            <div
              className={`w-8 h-1 bg-yellow-400 mb-1 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-yellow-400 mb-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-yellow-400 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`
                }
              >
                {item}
              </NavLink>
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950 shadow-lg transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 p-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`
                  }
                >
                  {item}
                </NavLink>
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

import React, { useEffect } from "react";
import developerImage from "../assets/crwg.png";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = 'CodesRahul';
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 via-blue-550 to-violet-950"
    >
      <div className="max-w-4xl w-full">
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-16">
          {/* Left Side: Title, Description, CTA */}
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 drop-shadow-lg">
              Welcome to <span className="text-yellow-300">Codes</span><span className="text-gray-100">Rahul</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              I am a passionate Full Stack Developer skilled in React,
              TailwindCSS, and Node.js, creating modern and interactive web
              experiences.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Link>
          </div>

          {/* Right Side: Animated Developer Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fadeIn delay-200">
            <img
              src={developerImage}
              alt="Developer"
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-bounce-slow rounded-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

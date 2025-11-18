import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    document.title = "CodesRahul";

    let mounted = true;
    // Dynamically import the developer image to reduce initial bundle weight
    (async () => {
      try {
        const mod = await import("../assets/crwg.png");
        if (mounted) setImageSrc(mod?.default ?? mod);
      } catch (err) {
        // If dynamic import fails, leave imageSrc null (no crash)
        console.error("Failed to load developer image:", err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen pb-10 flex items-center justify-center bg-gray-950"
    >
      {/* Decorative ripple grid background for subtle texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 ripple-grid ripple-grid-animated" />
      <div className="max-w-4xl w-full">
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-16">
          {/* Left Side: Title, Description, CTA */}
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 drop-shadow-lg">
              Welcome to <span className="text-yellow-300">Codes</span><span className="text-gray-100">Rahul</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              I'm Rahul, a passionate Full Stack Web developer skilled in React,
              TailwindCSS and Node.js, creating modern and interactive web
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
              src={imageSrc}
              alt="Developer"
              width="320"
              height="320"
              decoding="async"
              loading="lazy"
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-bounce-slow rounded-full"
            />
          </div>
        </div>
          {/* Key highlights / necessary points */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div
              id="highlight-fast"
              tabIndex={0}
              role="article"
              aria-labelledby="highlight-fast-heading"
              className="bg-gray-800/60 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <svg className="mx-auto mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12l4 4L19 6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 id="highlight-fast-heading" className="text-lg font-semibold text-gray-100">Fast & Responsive</h4>
              <p className="text-gray-300 mt-2">Optimized for performance and mobile-first responsive layouts.</p>
            </div>
            <div
              id="highlight-clean"
              tabIndex={0}
              role="article"
              aria-labelledby="highlight-clean-heading"
              className="bg-gray-800/60 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <svg className="mx-auto mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2v6l4 2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 id="highlight-clean-heading" className="text-lg font-semibold text-gray-100">Clean Code</h4>
              <p className="text-gray-300 mt-2">Readable, maintainable code following industry best practices.</p>
            </div>
            <div
              id="highlight-prod"
              tabIndex={0}
              role="article"
              aria-labelledby="highlight-prod-heading"
              className="bg-gray-800/60 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <svg className="mx-auto mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4 15a8 8 0 1 0-14.8 0" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 id="highlight-prod-heading" className="text-lg font-semibold text-gray-100">Production Ready</h4>
              <p className="text-gray-300 mt-2">Deployed solutions with CI/CD, monitoring and scalable architecture.</p>
            </div>
          </div>
          {/* Quick projects teaser */}
          <div className="mt-10 text-center">
            <Link to="/projects" className="inline-block bg-transparent border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 font-semibold py-2 px-6 rounded-full transition">
              See Featured Projects
            </Link>
          </div>
      </div>
    </section>
  );
}

export default React.memo(Home);

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    document.title = "CodesRahul";

    // set SEO-friendly description and canonical
    try {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
        desc = document.createElement('meta');
        desc.name = 'description';
        document.head.appendChild(desc);
      }
      desc.content = 'Rahul — Full Stack Web Developer. I build modern, responsive web apps with React, TailwindCSS and Node.js.';

      let canon = document.querySelector('link[rel="canonical"]');
      if (!canon) {
        canon = document.createElement('link');
        canon.rel = 'canonical';
        document.head.appendChild(canon);
      }
      canon.href = 'https://www.codesrahul.xyz/';
    } catch {
      // ignore in non-browser environments
    }

    let mounted = true;
    (async () => {
      try {
        const mod = await import("../assets/crwg.png");
        if (mounted) setImageSrc(mod?.default ?? mod);
      } catch (err) {
        console.error("Failed to load developer image:", err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pb-10 flex flex-col items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Decorative ripple grid background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 ripple-grid ripple-grid-animated" />
      
      {/* Background Gradient elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '7s' }}></div>

      <div className="max-w-6xl w-full z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          
          {/* Left Side: Title, Description, CTA */}
          <motion.div 
            className="text-center md:text-left w-full md:w-1/2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold text-gray-100 leading-tight tracking-tight"
            >
              Welcome to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">CodesRahul</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              I'm Rahul, a passionate Full Stack Web Developer. 
              I craft <span className="text-gray-200 font-semibold">modern, responsive, and performance-driven</span> web experiences using the latest tech stack.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                to="/projects"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(234,179,8,0.7)]"
              >
                Explore My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full font-bold text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500/10 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Developer Image */}
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative group">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                src={imageSrc}
                alt="Rahul - Developer"
                width="350"
                height="350"
                className="relative z-10 w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl animate-bounce-slow"
                />
            </div>
          </motion.div>
        </div>

          {/* Key highlights */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
                { title: "Fast & Responsive", icon: "M13 10V3L4 14h7v7l9-11h-7z", desc: "Optimized for speed and mobile devices." },
                { title: "Clean Code", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", desc: "Scalable and maintainable architecture." },
                { title: "Production Ready", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Deployed with best CI/CD practices." }
            ].map((item, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -5, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                    className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl shadow-lg transition-colors"
                >
                    <div className="bg-gray-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-yellow-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                </motion.div>
            ))}
          </motion.div>
      </div>
    </motion.section>
  );
}

export default React.memo(Home);

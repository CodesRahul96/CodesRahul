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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>

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
              className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Digital Mastery</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              I'm Rahul Misal, a passionate Full Stack Web Developer. 
              I craft <span className="text-gray-200 font-semibold">modern, responsive, and performance-driven</span> web experiences using the latest tech stack.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                to="/projects"
                className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-4 px-10 rounded-2xl shadow-[0_10px_30px_rgba(245,158,11,0.2)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 rounded-2xl font-bold text-amber-500 border border-amber-500/20 hover:bg-amber-500/5 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Developer Image */}
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center perspective-2000"
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative group">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
                <div className="relative z-10 p-4 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                    <img
                    src={imageSrc}
                    alt="Rahul Misal"
                    className="w-64 h-64 md:w-[450px] md:h-[450px] object-contain drop-shadow-2xl"
                    />
                </div>
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
                    whileHover={{ y: -8, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
                    className="bg-[#111827]/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-2xl transition-all duration-500 group"
                >
                    <div className="bg-amber-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon}></path></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
          </motion.div>
      </div>
    </motion.section>
  );
}

export default React.memo(Home);

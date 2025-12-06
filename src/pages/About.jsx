import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiCanva, SiMysql, SiMongodb, SiTypescript, SiAxios, SiExpress, SiPostman, SiWordpress, SiShopify  } from 'react-icons/si';
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 95 },
  { name: 'CSS', icon: <FaCss3 />, level: 90 },
  { name: 'ReactJS', icon: <FaReact />, level: 90 },
  { name: 'NodeJS', icon: <FaNodeJs />, level: 70 },
  { name: 'ExpressJS', icon: <SiExpress />, level: 75 },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 80 },
  { name: 'Typescript ', icon: <SiTypescript  />, level: 70 },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
  { name: 'Three.js', icon: <TbBrandThreejs />, level: 75 },
  { name: 'Axios ', icon: <SiAxios  />, level: 80 },
  { name: 'Postman ', icon: <SiPostman  />, level: 70 },
  { name: 'Git', icon: <FaGitAlt />, level: 80 },
  { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
  { name: 'MySQL', icon: <SiMysql  />, level: 60 },
  { name: 'Canva', icon: <SiCanva />, level: 65 },
  { name: 'Wordpress ', icon: <SiWordpress  />, level: 65 },
  { name: 'Shopify  ', icon: <SiShopify   />, level: 75 },
];

function About() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    document.title = 'CodesRahul | About';
    
    // SEO setup
    try {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
          desc = document.createElement('meta');
          desc.name = 'description';
          document.head.appendChild(desc);
      }
      desc.content = 'About Rahul — Full Stack Developer. Learn about skills, experience and how to get in touch.';
      
      let canon = document.querySelector('link[rel="canonical"]');
      if (!canon) {
          canon = document.createElement('link');
          canon.rel = 'canonical';
          document.head.appendChild(canon);
      }
      canon.href = 'https://www.codesrahul.xyz/about';
    } catch {}

    let mounted = true;
    (async () => {
      try {
        const mod = await import('../assets/crbg.png');
        if (mounted) setImageSrc(mod?.default ?? mod);
      } catch (err) {
        console.error('Failed to load profile image', err);
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
  <motion.section 
    id="about" 
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 0.3 } }}
    className="py-20 bg-gray-950 min-h-screen flex items-center justify-center relative overflow-hidden"
  >
      {/* Ripple grid background overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 ripple-grid ripple-grid-animated" />
      
      {/* Background gradients */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <motion.div variants={itemVariants} className="max-w-3xl w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform scale-x-0 animate-expand-width" style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}></div>
            </h2>
          </motion.div>
        </div>

        {/* About Me Section */}
        <div className="flex justify-center mb-16">
          <motion.div variants={containerVariants} className="max-w-5xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left Side: Profile Image */}
              <motion.div variants={itemVariants} className="w-full md:w-1/2 flex justify-center md:justify-center relative group">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={imageSrc}
                  alt="Rahul Profile"
                  width="280"
                  height="280"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-gray-800 z-10 transform transition duration-500 group-hover:scale-105 group-hover:rotate-2"
                />
              </motion.div>
              
              {/* Right Side: Titles and Description */}
              <motion.div variants={itemVariants} className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h3 className="text-3xl font-semibold text-gray-100">
                    Who Am I?
                </h3>
                <div className="w-20 h-1 bg-yellow-500 mx-auto md:mx-0 rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am <span className="text-yellow-400 font-semibold">Rahul</span>, a dedicated Full Stack Developer with over <span className="text-gray-100 font-semibold">2+ years</span> of experience in crafting dynamic and responsive web applications. My journey in tech began with a passion for problem-solving, which led me to master a wide range of technologies.
                </p>
                <p className="text-gray-300 text-lg">
                  I thrive on building user-friendly interfaces and robust back-end systems, always striving to deliver innovative solutions that exceed expectations.
                </p>
                <p className="text-gray-400 italic mt-2 border-l-4 border-gray-700 pl-4">
                  "Outside of coding, I enjoy exploring new frameworks, contributing to open-source projects, and staying updated with the latest industry trends."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-5xl"
          >
            <h3 className="text-3xl font-semibold text-center mb-10 text-gray-100">My Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700/50 hover:border-yellow-500/50 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl text-yellow-400 mb-3 drop-shadow-lg">{skill.icon}</span>
                    <h4 className="text-gray-200 font-bold mb-2">{skill.name}</h4>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                      <motion.div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Get in Touch Section */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl w-full text-center bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Interested in collaborating or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:codesrahul96@gmail.com"
                className="flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 hover:text-gray-900 text-gray-200 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <FaEnvelope className="mr-2" />
                <span>Email Me</span>
              </a>
              <a
                href="https://linkedin.com/in/codesrahul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <FaLinkedin className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/codesrahul96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-[#333] hover:bg-black text-white rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <FaGithub className="mr-2" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Fun Fact Section */}
        <div className="flex justify-center pb-10">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl w-full text-center relative"
            >
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl text-gray-800 select-none opacity-50">"</span>
                <p className="text-gray-400 italic text-xl px-8 relative z-10">
                I once coded a website in a single night to help a friend showcase their art—talk about a creative rush!
                </p>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default React.memo(About);
import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiCanva, SiMysql, SiMongodb, SiTypescript, SiAxios, SiExpress, SiPostman, SiWordpress, SiShopify } from 'react-icons/si';
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-blue-400" />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
      { name: 'CSS3', icon: <FaCss3 />, level: 90, color: "text-blue-500" },
      { name: 'React', icon: <FaReact />, level: 90, color: "text-cyan-400" },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 85, color: "text-teal-400" },
      { name: 'JavaScript', icon: <FaJsSquare />, level: 80, color: "text-yellow-400" },
      { name: 'TypeScript', icon: <SiTypescript />, level: 70, color: "text-blue-600" },
      { name: 'Three.js', icon: <TbBrandThreejs />, level: 75, color: "text-white" },
    ]
  },
  {
    title: "Backend & CMS",
    icon: <FaBriefcase className="text-green-400" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: "text-green-500" },
      { name: 'Express', icon: <SiExpress />, level: 75, color: "text-gray-400" },
      { name: 'MongoDB', icon: <SiMongodb />, level: 70, color: "text-green-600" },
      { name: 'MySQL', icon: <SiMysql />, level: 60, color: "text-blue-400" },
      { name: 'WordPress', icon: <SiWordpress />, level: 65, color: "text-blue-300" },
      { name: 'Shopify', icon: <SiShopify />, level: 75, color: "text-green-400" },
    ]
  },
  {
    title: "Tools & Utilities",
    icon: <FaGraduationCap className="text-yellow-400" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 80, color: "text-red-500" },
      { name: 'Postman', icon: <SiPostman />, level: 70, color: "text-orange-500" },
      { name: 'Axios', icon: <SiAxios />, level: 80, color: "text-purple-400" },
      { name: 'Canva', icon: <SiCanva />, level: 85, color: "text-blue-400" },
    ]
  }
];

const experience = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    desc: "Architecting and developing full-stack web applications for diverse clients. Specializing in MERN stack solutions, performance optimization, and custom UI/UX design."
  },
  {
    year: "2021 - 2023",
    role: "Frontend Developer",
    company: "Project-Based",
    desc: "Collaborated on various web projects, translating design mockups into responsive, interactive code using React and Tailwind CSS. Focused on component reusability and clean state management."
  }
];

const education = [
  {
    year: "2017 - 2020",
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    desc: "Specialized in Software Development and Database Management. Graduated with a focus on web technologies."
  }
];

function About() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    document.title = 'CodesRahul | About';
    // SEO setup (kept from original)
    try {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
          desc = document.createElement('meta');
          desc.name = 'description';
          document.head.appendChild(desc);
      }
      desc.content = 'About Rahul — Full Stack Developer. Experience, Skills, and Portfolio.';
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
    return () => { mounted = false; };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="about" 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="py-20 bg-gray-950 min-h-screen relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 ripple-grid ripple-grid-animated" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex justify-center mb-16">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 relative inline-block mb-4">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transforming complex problems into simple, beautiful, and intuitive designs.
            </p>
          </motion.div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div variants={itemVariants} className="w-full md:w-1/3 flex justify-center relative group">
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Rahul Profile"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-2 border-gray-700/50 z-10 transform transition duration-500 group-hover:scale-105 group-hover:-rotate-2 grayscale-[20%] group-hover:grayscale-0"
              />
            )}
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-100">
              I'm <span className="text-yellow-400">Rahul Misal</span>, a Full Stack Developer.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building high-quality websites and applications with modern technologies like React, Node.js, and Tailwind CSS. My passion lies in creating seamless user experiences and robust backend architectures.
            </p>
            <p className="text-gray-300 text-lg">
              With over <span className="font-semibold text-white">2+ years</span> of experience, I've worked on diverse projects ranging from e-commerce platforms to interactive dashboards. I'm constantly learning and adapting to the latest tech trends.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
               {["Web Development", "UI/UX Design", "API Integration", "Database Management"].map((tag, i) => (
                 <span key={i} className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-yellow-500/50 transition-colors">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
           <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center text-gray-100 mb-12">Technical Expertise</motion.h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {skillCategories.map((category, idx) => (
               <motion.div 
                 key={idx} 
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-50px" }}
                 className="bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
               >
                 <div className="flex items-center gap-3 mb-6">
                   <span className="text-2xl">{category.icon}</span>
                   <h4 className="text-xl font-bold text-gray-200">{category.title}</h4>
                 </div>
                 <div className="space-y-4">
                   {category.skills.map((skill, sIdx) => (
                     <div key={sIdx} className="group">
                       <div className="flex justify-between mb-1">
                         <div className="flex items-center gap-2">
                            <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                         </div>
                         <span className="text-xs text-gray-500 group-hover:text-yellow-400 transition-colors">{skill.level}%</span>
                       </div>
                       <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.level}%` }}
                           transition={{ duration: 1, delay: 0.1 * sIdx }}
                           className={`h-full rounded-full ${skill.color.replace('text-', 'bg-')}`}
                         />
                       </div>
                     </div>
                   ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3">
              <FaBriefcase className="text-yellow-500" /> Experience
            </h3>
            <div className="space-y-8 border-l-2 border-gray-800 pl-8 ml-3">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-gray-900 bg-yellow-500 group-hover:scale-125 transition-transform"></span>
                  <spam className="text-sm text-yellow-500 font-mono mb-1 block">{exp.year}</spam>
                  <h4 className="text-xl font-bold text-gray-200">{exp.role}</h4>
                  <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-500 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-blue-500" /> Education
            </h3>
            <div className="space-y-8 border-l-2 border-gray-800 pl-8 ml-3">
               {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-gray-900 bg-blue-500 group-hover:scale-125 transition-transform"></span>
                  <spam className="text-sm text-blue-400 font-mono mb-1 block">{edu.year}</spam>
                  <h4 className="text-xl font-bold text-gray-200">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-500 leading-relaxed">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact CTA (Simplified version of original) */}
        <div className="flex justify-center mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 text-center max-w-2xl w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <div className="flex justify-center gap-6 mt-6">
              <a href="mailto:codesrahul96@gmail.com" className="p-3 bg-gray-700 rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                <FaEnvelope size={24} />
              </a>
              <a href="https://linkedin.com/in/codesrahul" target="_blank" className="p-3 bg-gray-700 rounded-full hover:bg-[#0077b5] hover:text-white transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/codesrahul96" target="_blank" className="p-3 bg-gray-700 rounded-full hover:bg-black hover:text-white transition-all">
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}

export default React.memo(About);
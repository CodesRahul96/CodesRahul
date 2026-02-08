import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaMobile } from 'react-icons/fa';
import { SiTailwindcss, SiCanva, SiMysql, SiMongodb, SiTypescript, SiAxios, SiExpress, SiPostman, SiWordpress, SiShopify, SiKotlin, SiAndroid, SiFirebase, SiAndroidstudio } from 'react-icons/si';
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-cyan-400" />,
    skills: [
      { name: 'React', icon: <FaReact />, level: 90, color: "text-cyan-400", bgColor: "bg-cyan-400" },
      { name: 'JavaScript', icon: <FaJsSquare />, level: 85, color: "text-amber-400", bgColor: "bg-amber-400" },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: "text-orange-500", bgColor: "bg-orange-500" },
      { name: 'CSS3', icon: <FaCss3 />, level: 90, color: "text-blue-500", bgColor: "bg-blue-500" },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: "text-teal-400", bgColor: "bg-teal-400" },
      { name: 'TypeScript', icon: <SiTypescript />, level: 75, color: "text-blue-600", bgColor: "bg-blue-600" },
    ]
  },
  {
    title: "Mobile Development",
    icon: <FaMobile className="text-purple-400" />,
    skills: [
      { name: 'React Native', icon: <FaReact />, level: 75, color: "text-cyan-400", bgColor: "bg-cyan-400" },
      { name: 'Android', icon: <SiAndroid />, level: 70, color: "text-green-500", bgColor: "bg-green-500" },
      { name: 'Kotlin', icon: <SiKotlin />, level: 65, color: "text-purple-500", bgColor: "bg-purple-500" },
      { name: 'Firebase', icon: <SiFirebase />, level: 75, color: "text-amber-500", bgColor: "bg-amber-500" },
      { name: 'Android Studio', icon: <SiAndroidstudio />, level: 70, color: "text-blue-500", bgColor: "bg-blue-500" },
    ]
  },
  {
    title: "Backend & Database",
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: "text-green-500", bgColor: "bg-green-500" },
      { name: 'Express.js', icon: <SiExpress />, level: 80, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: "text-green-600", bgColor: "bg-green-600" },
      { name: 'MySQL', icon: <SiMysql />, level: 65, color: "text-blue-400", bgColor: "bg-blue-400" },
      { name: 'REST APIs', icon: <FaCode />, level: 85, color: "text-purple-400", bgColor: "bg-purple-400" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <FaGitAlt className="text-orange-500" />,
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt />, level: 85, color: "text-orange-500", bgColor: "bg-orange-500" },
      { name: 'WordPress', icon: <SiWordpress />, level: 70, color: "text-blue-300", bgColor: "bg-blue-300" },
      { name: 'Shopify', icon: <SiShopify />, level: 75, color: "text-green-400", bgColor: "bg-green-400" },
      { name: 'Postman', icon: <SiPostman />, level: 75, color: "text-orange-400", bgColor: "bg-orange-400" },
      { name: 'Canva', icon: <SiCanva />, level: 80, color: "text-blue-400", bgColor: "bg-blue-400" },
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
            <h2 className="text-4xl md:text-6xl font-black text-white relative inline-block mb-6 tracking-tighter">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 via-amber-600 to-transparent rounded-full"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
              Architecting elegant solutions for complex digital challenges.
            </p>
          </motion.div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div variants={itemVariants} className="w-full md:w-1/3 flex justify-center relative group">
            <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-[80px] group-hover:opacity-60 transition-opacity duration-500"></div>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Rahul Profile"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[32px] shadow-2xl border border-white/10 z-10 transform transition duration-700 group-hover:scale-105 group-hover:-rotate-1"
              />
            )}
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Rahul Misal</span>, a Full Stack Developer.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building high-quality websites and applications with modern technologies like React, Node.js, and Tailwind CSS. My passion lies in creating seamless user experiences and robust backend architectures.
            </p>
            <p className="text-gray-300 text-lg">
              With over <span className="font-semibold text-white">2+ years</span> of experience, I've worked on diverse projects ranging from e-commerce platforms to interactive dashboards. I'm constantly learning and adapting to the latest tech trends.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
               {["MERN Stack", "UI/UX Architecture", "System Design", "Cloud Optimization"].map((tag, i) => (
                 <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:text-amber-400 hover:border-amber-400/30 transition-all cursor-default backdrop-blur-sm">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
           <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-black text-white mb-4 text-center tracking-tighter">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Expertise</span>
           </motion.h3>
           <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Proficient in modern web technologies and tools for building scalable applications</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {skillCategories.map((category, idx) => (
                <motion.div 
                  key={idx} 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-[#111827]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/10 shadow-2xl transition-all duration-500"
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
                             <span className={`text-lg transition-transform group-hover:scale-110 ${skill.color}`}>{skill.icon}</span>
                             <span className="text-gray-200 font-semibold tracking-tight">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono text-gray-500 group-hover:text-amber-500 transition-colors">{skill.level}%</span>
                       </div>
                        <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 * sIdx, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full ${skill.bgColor}`}
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
            <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-4 tracking-tighter uppercase">
              <FaBriefcase className="text-amber-500" /> Experience
            </h3>
            <div className="space-y-10 border-l-[3px] border-white/5 pl-10 ml-4">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[54px] top-1.5 h-6 w-6 rounded-full border-[5px] border-[#0f172a] bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-sm text-amber-500 font-black tracking-widest mb-2 block uppercase">{exp.year}</span>
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
            <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-4 tracking-tighter uppercase">
              <FaGraduationCap className="text-blue-500" /> Education
            </h3>
            <div className="space-y-10 border-l-[3px] border-white/5 pl-10 ml-4">
               {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[54px] top-1.5 h-6 w-6 rounded-full border-[5px] border-[#0f172a] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-sm text-blue-400 font-black tracking-widest mb-2 block uppercase">{edu.year}</span>
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
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-[#1e293b]/40 to-[#0f172a]/40 backdrop-blur-xl p-10 rounded-[32px] border border-white/5 text-center max-w-2xl w-full shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-amber-500/5 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-3xl font-extrabold text-white mb-6 relative z-10 transition-colors group-hover:text-amber-400">Let's create something extraordinary.</h3>
            <div className="flex justify-center gap-8 mt-8 relative z-10">
              <a href="mailto:codesrahul96@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 shadow-xl">
                <FaEnvelope size={28} />
              </a>
              <a href="https://linkedin.com/in/codesrahul" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 shadow-xl">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/codesrahul96" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-xl">
                <FaGithub size={28} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}

export default React.memo(About);
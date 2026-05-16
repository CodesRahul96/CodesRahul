"use client";

import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaMobile } from 'react-icons/fa';
import { SiTailwindcss, SiCanva, SiMysql, SiMongodb, SiTypescript, SiExpress, SiPostman, SiWordpress, SiShopify, SiKotlin, SiAndroid, SiFirebase, SiAndroidstudio } from 'react-icons/si';
import { motion } from 'framer-motion';
import Image from 'next/image';
import crbg from '../../assets/crbg.png';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-gray-400" />,
    skills: [
      { name: 'React', icon: <FaReact />, level: 90, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'JavaScript', icon: <FaJsSquare />, level: 85, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'CSS3', icon: <FaCss3 />, level: 90, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'TypeScript', icon: <SiTypescript />, level: 75, color: "text-gray-400", bgColor: "bg-gray-400" },
    ]
  },
  {
    title: "Mobile Development",
    icon: <FaMobile className="text-gray-400" />,
    skills: [
      { name: 'React Native', icon: <FaReact />, level: 75, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Android', icon: <SiAndroid />, level: 70, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Kotlin', icon: <SiKotlin />, level: 65, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Firebase', icon: <SiFirebase />, level: 75, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Android Studio', icon: <SiAndroidstudio />, level: 70, color: "text-gray-400", bgColor: "bg-gray-400" },
    ]
  },
  {
    title: "Backend & Database",
    icon: <FaNodeJs className="text-gray-400" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Express.js', icon: <SiExpress />, level: 80, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'MySQL', icon: <SiMysql />, level: 65, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'REST APIs', icon: <FaCode />, level: 85, color: "text-gray-400", bgColor: "bg-gray-400" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <FaGitAlt className="text-gray-400" />,
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt />, level: 85, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'WordPress', icon: <SiWordpress />, level: 70, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Postman', icon: <SiPostman />, level: 75, color: "text-gray-400", bgColor: "bg-gray-400" },
      { name: 'Canva', icon: <SiCanva />, level: 80, color: "text-gray-400", bgColor: "bg-gray-400" },
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

export default function About() {
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
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="py-10 min-h-screen relative"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-tight">
              About.
            </h2>
            <div className="w-full h-[1px] bg-white/20 mb-8"></div>
            <p className="text-gray-400 max-w-2xl text-xl font-light leading-relaxed">
              Architecting elegant solutions for complex digital challenges.
            </p>
          </motion.div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
          <motion.div variants={itemVariants} className="w-full md:w-1/3 relative grayscale hover:grayscale-0 transition-all duration-700">
             <div className="w-full h-[400px] relative border border-white/10">
                <Image
                  src={crbg}
                  alt="Rahul Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
             </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full md:w-2/3 space-y-8 mt-4 md:mt-0">
            <h3 className="text-3xl font-serif font-medium text-white tracking-tight">
              I&apos;m Rahul Misal, a Full Stack Developer.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I specialize in building high-quality websites and applications with modern technologies like React, Node.js, and Tailwind CSS. My passion lies in creating seamless user experiences and robust backend architectures.
            </p>
            <p className="text-gray-400 text-lg font-light">
              With over <span className="text-white font-medium">2+ years</span> of experience, I&apos;ve worked on diverse projects ranging from e-commerce platforms to interactive dashboards. I&apos;m constantly learning and adapting to the latest tech trends.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
               {["MERN Stack", "UI/UX Architecture", "System Design", "Cloud Optimization"].map((tag, i) => (
                 <span key={i} className="px-4 py-2 border border-white/20 text-xs uppercase tracking-widest text-gray-300 hover:bg-white hover:text-black transition-colors cursor-default">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
           <motion.div variants={itemVariants}>
             <h3 className="text-3xl font-serif font-medium text-white mb-8 tracking-tight">Technical Expertise</h3>
             <div className="w-full h-[1px] bg-white/20 mb-12"></div>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {skillCategories.map((category, idx) => (
                <motion.div 
                  key={idx} 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="p-8 border border-white/10 hover:border-white/30 transition-all duration-500 bg-black/50"
                >
                 <div className="flex items-center gap-4 mb-8">
                   <h4 className="text-xl font-medium text-gray-200 tracking-wide uppercase text-sm">{category.title}</h4>
                 </div>
                 <div className="space-y-6">
                   {category.skills.map((skill, sIdx) => (
                     <div key={sIdx} className="group">
                       <div className="flex justify-between items-center mb-2">
                         <div className="flex items-center gap-3">
                             <span className="text-gray-500">{skill.icon}</span>
                             <span className="text-gray-300 font-light text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                       </div>
                        <div className="h-[2px] bg-gray-900 w-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 * sIdx, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-white/70"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Experience */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-serif font-medium text-white mb-8 tracking-tight">
               Experience
            </h3>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative group border-l border-white/20 pl-8">
                  <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] bg-white"></span>
                  <span className="text-xs text-gray-500 tracking-widest mb-2 block uppercase">{exp.year}</span>
                  <h4 className="text-xl font-medium text-gray-200 mb-1">{exp.role}</h4>
                  <p className="text-gray-400 text-sm mb-4 font-light">{exp.company}</p>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">{exp.desc}</p>
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
            <h3 className="text-2xl font-serif font-medium text-white mb-8 tracking-tight">
               Education
            </h3>
            <div className="space-y-12">
               {education.map((edu, index) => (
                <div key={index} className="relative group border-l border-white/20 pl-8">
                  <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] bg-white"></span>
                  <span className="text-xs text-gray-500 tracking-widest mb-2 block uppercase">{edu.year}</span>
                  <h4 className="text-xl font-medium text-gray-200 mb-1">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mb-4 font-light">{edu.institution}</p>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

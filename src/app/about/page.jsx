"use client";

import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaJsSquare, FaGitAlt, FaCode, FaMobile } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiTypescript, SiExpress, SiPostman, SiWordpress, SiKotlin, SiFirebase, SiAndroidstudio, SiFigma } from 'react-icons/si';
import DevProfileAvatar from '../../components/DevProfileAvatar';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FaReact className="text-amber-400 text-xl" />,
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 90 },
      { name: 'JavaScript (ES6+)', icon: <FaJsSquare className="text-amber-400" />, level: 88 },
      { name: 'HTML5 & CSS3', icon: <FaHtml5 className="text-orange-400" />, level: 95 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 92 },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, level: 80 },
    ]
  },
  {
    title: "Mobile Development",
    icon: <FaMobile className="text-cyan-400 text-xl" />,
    skills: [
      { name: 'React Native', icon: <FaReact className="text-cyan-400" />, level: 78 },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-emerald-400" />, level: 75 },
      { name: 'Kotlin', icon: <SiKotlin className="text-purple-400" />, level: 70 },
      { name: 'Firebase & Auth', icon: <SiFirebase className="text-amber-400" />, level: 80 },
    ]
  },
  {
    title: "Backend & Cloud Architecture",
    icon: <FaNodeJs className="text-amber-400 text-xl" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-emerald-400" />, level: 85 },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" />, level: 85 },
      { name: 'MongoDB & Mongoose', icon: <SiMongodb className="text-emerald-500" />, level: 80 },
      { name: 'MySQL & Relational DBs', icon: <SiMysql className="text-blue-400" />, level: 70 },
      { name: 'REST APIs & Integrations', icon: <FaCode className="text-amber-400" />, level: 88 },
    ]
  },
  {
    title: "Dev Tools & Design Systems",
    icon: <FaGitAlt className="text-cyan-400 text-xl" />,
    skills: [
      { name: 'Git & GitHub Workflows', icon: <FaGitAlt className="text-orange-500" />, level: 88 },
      { name: 'Figma UI/UX Design', icon: <SiFigma className="text-pink-400" />, level: 82 },
      { name: 'Postman API Testing', icon: <SiPostman className="text-orange-400" />, level: 85 },
      { name: 'WordPress CMS', icon: <SiWordpress className="text-blue-400" />, level: 75 },
    ]
  }
];

const experience = [
  {
    year: "2023 - Present",
    role: "Full Stack Software Developer",
    company: "Freelance & Bespoke Clients",
    desc: "Architecting end-to-end full-stack web platforms, custom MERN stack architectures, and high-performance WebGL user interfaces."
  },
  {
    year: "2021 - 2023",
    role: "Frontend Engineer",
    company: "Project-Based Engagements",
    desc: "Engineered responsive client-side web applications using React, Next.js, and Tailwind CSS with focus on performance optimization and component reusability."
  }
];

const education = [
  {
    year: "2017 - 2020",
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    desc: "Focused on Core Computer Science Fundamentals, Object-Oriented Architecture, Web Technologies, and Database Systems."
  }
];

export default function About() {
  return (
    <section className="py-12 min-h-screen relative text-white max-w-5xl mx-auto px-4 animate-fadeIn">
      <div className="relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-4 tracking-tight">
              About.
            </h2>
            <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-6" />
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Architecting elegant, resilient, and performant solutions for complex digital experiences.
            </p>
          </div>
        </div>

        {/* Profile Section with Animated 2D/3D Dev Profile Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-2/5 flex justify-center">
            <DevProfileAvatar variant="about" />
          </div>
          
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono">
              Rahul Misal — Full Stack Developer
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight leading-tight">
              Crafting bespoke web applications & resilient architectures.
            </h3>

            <p className="text-gray-300 text-base font-light leading-relaxed">
              I specialize in engineering high-quality web applications using modern stacks like React, Next.js, Node.js, and Tailwind CSS. My passion lies in building intuitive user interfaces backed by scalable server architectures.
            </p>

            <p className="text-gray-400 text-base font-light">
              With over <span className="text-amber-400 font-medium font-mono">3+ years</span> of active engineering experience, I deliver scalable digital products built to perform.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
               {["Full-Stack MERN", "UI/UX Architecture", "API Integration", "Performance Tuning"].map((tag, i) => (
                 <span key={i} className="px-3.5 py-1.5 border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-wider text-amber-400 rounded-full backdrop-blur-md">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
           <div>
             <h3 className="text-3xl font-serif font-medium text-white mb-4 tracking-tight">Technical Expertise</h3>
             <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-12" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {skillCategories.map((category, idx) => (
                <div 
                  key={idx} 
                  className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-xl hover:border-amber-500/30 transition-all duration-300 shadow-xl"
                >
                 <div className="flex items-center gap-3.5 mb-8">
                   {category.icon}
                   <h4 className="text-base font-mono font-semibold text-white tracking-wider uppercase">{category.title}</h4>
                 </div>

                 <div className="space-y-6">
                   {category.skills.map((skill, sIdx) => (
                     <div key={sIdx} className="group">
                       <div className="flex justify-between items-center mb-2">
                         <div className="flex items-center gap-3">
                             <span className="text-lg">{skill.icon}</span>
                             <span className="text-gray-200 font-light text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono text-amber-400">{skill.level}%</span>
                       </div>
                        <div className="h-[3px] bg-white/10 w-full rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-500 to-cyan-400 transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                       </div>
                     </div>
                   ))}
                 </div>
                </div>
             ))}
           </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <div className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-serif font-medium text-white mb-8 tracking-tight">
               Experience
            </h3>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <div key={index} className="relative group border-l-2 border-amber-500/40 pl-6">
                  <span className="absolute -left-[7px] top-1.5 h-[12px] w-[12px] rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                  <span className="text-xs font-mono text-amber-400 tracking-widest mb-1 block uppercase">{exp.year}</span>
                  <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                  <p className="text-gray-400 text-xs mb-3 font-mono">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed font-light text-sm">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-serif font-medium text-white mb-8 tracking-tight">
               Education
            </h3>
            <div className="space-y-10">
               {education.map((edu, index) => (
                <div key={index} className="relative group border-l-2 border-cyan-500/40 pl-6">
                  <span className="absolute -left-[7px] top-1.5 h-[12px] w-[12px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  <span className="text-xs font-mono text-cyan-400 tracking-widest mb-1 block uppercase">{edu.year}</span>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-gray-400 text-xs mb-3 font-mono">{edu.institution}</p>
                  <p className="text-gray-300 leading-relaxed font-light text-sm">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

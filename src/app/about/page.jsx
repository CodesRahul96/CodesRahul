import React from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaHtml5, FaJsSquare, FaGitAlt, FaCode, FaMobile } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiTypescript, SiExpress, SiPostman, SiWordpress, SiKotlin, SiFirebase, SiAndroidstudio, SiFigma } from 'react-icons/si';
import rahulAbout3D from '../../assets/rahul_about_3d.png';
import InteractivePhotoCard from '../../components/InteractivePhotoCard';

export const metadata = {
  title: 'About',
  description: 'Learn about Rahul Misal — Full Stack Software Engineer from Pune, India with 3+ years of experience building MERN stack web applications, mobile apps, and intuitive UIs.',
};


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
    role: "Full Stack Software Engineer",
    company: "Freelance & Bespoke Solutions",
    desc: "Architecting high-performance MERN web applications, Next.js platforms, and native Android apps. Specializing in enterprise HTTP security hardening, Technical SEO (#1 Google ranking architecture), and real-time Socket.IO systems."
  },
  {
    year: "2021 - 2023",
    role: "Frontend & Full Stack Engineer",
    company: "Project Engagements & Client Delivery",
    desc: "Engineered responsive client-side web platforms with React, Next.js, and Tailwind CSS. Focused on Core Web Vitals optimization, RESTful API integrations, and intuitive UI component systems."
  }
];

const education = [
  {
    year: "2017 - 2020",
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    desc: "Core Computer Science Fundamentals, Data Structures, Web Technologies, and Database Systems."
  }
];

export default function About() {
  return (
    <section className="py-12 min-h-screen relative text-slate-900 dark:text-white max-w-5xl mx-auto px-4 animate-fadeIn transition-colors duration-300">
      <div className="relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">Background & Experience</span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 dark:text-white mb-4 tracking-tight mt-1">
              About Me.
            </h2>
            <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-6" />
            <p className="text-slate-600 dark:text-gray-300 text-lg font-light leading-relaxed max-w-2xl">
              Software Engineer dedicated to building dependable web solutions with clean code practices and intuitive design.
            </p>
          </div>
        </div>

        {/* Profile Section with 3D Interactive Portrait */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-2/5 flex justify-center">
            <InteractivePhotoCard
              imageSrc={rahulAbout3D}
              alt="Rahul Misal"
              badgeText="Rahul Misal — Full Stack Developer"
              gradientBorder="from-amber-500/30 via-cyan-500/20 to-purple-500/30"
              glowColor="rgba(6, 182, 212, 0.25)"
              priority
            />
          </div>
          
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-medium">
              Rahul Misal — Full Stack MERN & Android Engineer
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 dark:text-white tracking-tight leading-tight">
              Architecting scalable MERN platforms & native Android applications.
            </h3>

            <p className="text-slate-600 dark:text-gray-300 text-base font-light leading-relaxed">
              I specialize in engineering resilient full-stack systems using <span className="text-amber-600 dark:text-amber-400 font-medium">React, Next.js, Node.js, Express, and MongoDB</span>, complemented by native <span className="text-cyan-600 dark:text-cyan-400 font-medium">Android applications</span> written in Kotlin and Jetpack Compose.
            </p>

            <p className="text-slate-500 dark:text-gray-400 text-base font-light">
              With over <span className="text-amber-600 dark:text-amber-400 font-medium font-mono">3+ years</span> of active engineering experience and 20+ applications built, I focus on delivering clean component architectures, robust security practices, and reliable database structures.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
               {["Full-Stack MERN", "Android (Kotlin)", "Next.js 15", "REST & Socket APIs", "UI/UX Systems", "Cloud & Docker"].map((tag, i) => (
                 <span key={i} className="px-3.5 py-1.5 border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 rounded-full backdrop-blur-md shadow-sm dark:shadow-none font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
           <div>
             <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-medium">Technical Capability</span>
             <h3 className="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-4 tracking-tight mt-1">Technical Skills</h3>
             <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-12" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {skillCategories.map((category, idx) => (
                <div 
                  key={idx} 
                  className="p-8 border border-slate-200 dark:border-white/10 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 shadow-md dark:shadow-xl"
                >
                 <div className="flex items-center gap-3.5 mb-8">
                   {category.icon}
                   <h4 className="text-base font-mono font-semibold text-slate-900 dark:text-white tracking-wider uppercase">{category.title}</h4>
                 </div>

                 <div className="space-y-6">
                   {category.skills.map((skill, sIdx) => (
                     <div key={sIdx} className="group">
                       <div className="flex justify-between items-center mb-2">
                         <div className="flex items-center gap-3">
                             <span className="text-lg">{skill.icon}</span>
                             <span className="text-slate-700 dark:text-gray-200 font-light text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">{skill.level}%</span>
                       </div>
                        <div className="h-[3px] bg-slate-200 dark:bg-white/10 w-full rounded-full overflow-hidden">
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
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-md dark:shadow-xl">
            <h3 className="text-2xl font-serif font-medium text-slate-900 dark:text-white mb-8 tracking-tight">
               Work History
            </h3>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <div key={index} className="relative group border-l-2 border-amber-500/40 pl-6">
                  <span className="absolute -left-[7px] top-1.5 h-[12px] w-[12px] rounded-full bg-amber-500 dark:bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 tracking-widest mb-1 block uppercase font-medium">{exp.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h4>
                  <p className="text-slate-500 dark:text-gray-400 text-xs mb-3 font-mono">{exp.company}</p>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light text-sm">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-md dark:shadow-xl">
            <h3 className="text-2xl font-serif font-medium text-slate-900 dark:text-white mb-8 tracking-tight">
               Education
            </h3>
            <div className="space-y-10">
               {education.map((edu, index) => (
                <div key={index} className="relative group border-l-2 border-cyan-500/40 pl-6">
                  <span className="absolute -left-[7px] top-1.5 h-[12px] w-[12px] rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-widest mb-1 block uppercase font-medium">{edu.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                  <p className="text-slate-500 dark:text-gray-400 text-xs mb-3 font-mono">{edu.institution}</p>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light text-sm">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

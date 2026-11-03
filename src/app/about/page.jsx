import React from 'react';
import Link from 'next/link';
import { FaReact, FaNodeJs, FaHtml5, FaJsSquare, FaGitAlt, FaCode, FaMobile, FaArrowRight, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCodeBranch } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiTypescript, SiExpress, SiPostman, SiWordpress, SiKotlin, SiFirebase, SiAndroidstudio, SiFigma, SiNextdotjs, SiSupabase, SiDocker } from 'react-icons/si';
import rahulAbout3D from '../../assets/rahul_about_3d.png';
import InteractivePhotoCard from '../../components/InteractivePhotoCard';

export const metadata = {
  title: 'About Rahul Misal — Full Stack Developer & Freelancer in Pune, India',
  description: 'Learn about Rahul Misal (CodesRahul) — Leading Full Stack Software Engineer, Freelancer & Native Android Developer based in Pune, Maharashtra, India. 3+ years engineering MERN platforms, Next.js, and Kotlin mobile apps.',
};

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FaReact className="text-amber-500 dark:text-amber-400 text-xl" />,
    badge: "User Interface Architecture",
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-400" />, level: "Core Architecture" },
      { name: 'Next.js 15 (App Router)', icon: <SiNextdotjs className="text-slate-900 dark:text-white" />, level: "SSR & Hydration" },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, level: "Strict Type Safety" },
      { name: 'JavaScript (ES6+)', icon: <FaJsSquare className="text-amber-400" />, level: "Event Loop & V8" },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: "Responsive Systems" },
      { name: 'HTML5 & CSS3', icon: <FaHtml5 className="text-orange-400" />, level: "Semantic Markup" },
    ]
  },
  {
    title: "Mobile Development",
    icon: <FaMobile className="text-cyan-500 dark:text-cyan-400 text-xl" />,
    badge: "Native & Cross-Platform",
    skills: [
      { name: 'Kotlin', icon: <SiKotlin className="text-purple-400" />, level: "Modern Idiomatic" },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-emerald-400" />, level: "Gradle & Native NDK" },
      { name: 'Jetpack Compose', icon: <FaMobile className="text-emerald-400" />, level: "Declarative UI" },
      { name: 'React Native', icon: <FaReact className="text-cyan-400" />, level: "Mobile Applications" },
      { name: 'Firebase & Auth', icon: <SiFirebase className="text-amber-400" />, level: "Realtime & Push" },
    ]
  },
  {
    title: "Backend & Cloud Architecture",
    icon: <FaNodeJs className="text-emerald-500 dark:text-emerald-400 text-xl" />,
    badge: "Server & Data Engines",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-emerald-400" />, level: "Asynchronous I/O" },
      { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-gray-300" />, level: "RESTful Routing" },
      { name: 'MongoDB & Mongoose', icon: <SiMongodb className="text-emerald-500" />, level: "Aggregations & Indexing" },
      { name: 'Supabase & PostgreSQL', icon: <SiSupabase className="text-emerald-400" />, level: "Relational DB & RLS" },
      { name: 'MySQL', icon: <SiMysql className="text-blue-400" />, level: "Schemas & Relational" },
      { name: 'REST & WebSockets', icon: <FaCode className="text-amber-400" />, level: "Real-time Sync" },
    ]
  },
  {
    title: "DevOps & Engineering Tools",
    icon: <FaGitAlt className="text-orange-500 text-xl" />,
    badge: "Pipelines & Reliability",
    skills: [
      { name: 'Git & GitHub Workflows', icon: <FaGitAlt className="text-orange-500" />, level: "Version Control CI" },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" />, level: "Containerization" },
      { name: 'Postman API Testing', icon: <SiPostman className="text-orange-400" />, level: "Contract Verification" },
      { name: 'Figma UI/UX Design', icon: <SiFigma className="text-pink-400" />, level: "Design Systems" },
      { name: 'WordPress CMS', icon: <SiWordpress className="text-blue-400" />, level: "Custom Theme & CMS" },
    ]
  }
];

const experience = [
  {
    year: "2023 - Present",
    role: "Full Stack Software Engineer",
    company: "Freelance & Bespoke Solutions",
    desc: "Architecting high-performance MERN web applications, Next.js platforms, and native Android apps. Specializing in enterprise HTTP security hardening, Technical SEO (#1 Google ranking architecture), and real-time Socket.IO systems."
  }
];

const education = [
  {
    year: "2017 - 2020",
    degree: "B.Sc. in Computer Science",
    institution: "Savitribai Phule Pune University",
    desc: "Core Computer Science fundamentals, Object-Oriented Analysis & Design, Relational Database Management Systems (RDBMS), Operating Systems, and Web Engineering."
  }
];

export default function About() {
  return (
    <section className="py-12 min-h-screen relative text-slate-900 dark:text-white max-w-5xl mx-auto px-4 animate-fadeIn transition-colors duration-300">
      <div className="relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-medium">Background & Experience</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-4 tracking-tight mt-1">
              About Me.
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-6" />
            <p className="text-slate-600 dark:text-gray-300 text-lg font-light leading-relaxed max-w-2xl">
              Software engineer dedicated to building dependable web applications and native mobile platforms with clean code practices, enterprise security standards, and intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Profile Section with 3D Interactive Portrait */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
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
              With over <span className="text-amber-600 dark:text-amber-400 font-medium font-mono">3+ years</span> of active engineering experience and 20+ applications shipped, I focus on delivering clean component architectures, robust security practices, and reliable database structures.
            </p>

            {/* Quick Credentials Bento Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="text-xs font-medium text-slate-900 dark:text-white mt-0.5 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-amber-500 text-[11px]" /> Pune, India
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Education</span>
                <span className="text-xs font-medium text-slate-900 dark:text-white mt-0.5 flex items-center gap-1.5">
                  <FaGraduationCap className="text-cyan-500 text-[11px]" /> B.Sc. Comp. Sci.
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Delivery</span>
                <span className="text-xs font-medium text-slate-900 dark:text-white mt-0.5 flex items-center gap-1.5">
                  <FaCodeBranch className="text-emerald-500 text-[11px]" /> 20+ Shipped Apps
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
               {["Full-Stack MERN", "Android (Kotlin)", "Next.js 15", "REST & Socket APIs", "UI/UX Systems", "Cloud & Docker"].map((tag, i) => (
                 <span key={i} className="px-3.5 py-1.5 border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-xs font-mono tracking-wide text-amber-700 dark:text-amber-400 rounded-full backdrop-blur-md shadow-sm dark:shadow-none font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </div>

        {/* Technical Skills Bento Grid */}
        <div className="mb-20">
           <div>
             <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-medium">Technical Capability</span>
             <h3 className="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-4 tracking-tight mt-1">Technical Skills</h3>
             <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-10" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
             {skillCategories.map((category, idx) => (
                <div 
                  key={idx} 
                  className="p-8 border border-slate-200 dark:border-white/10 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 shadow-md dark:shadow-xl flex flex-col justify-between h-full group"
                >
                 <div>
                   <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3.5">
                       {category.icon}
                       <h4 className="text-base font-mono font-semibold text-slate-900 dark:text-white tracking-wide">{category.title}</h4>
                     </div>
                     <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-gray-500 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04]">
                       {category.badge}
                     </span>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {category.skills.map((skill, sIdx) => (
                       <div
                         key={sIdx}
                         className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 hover:border-amber-500/30 transition-all"
                       >
                         <div className="flex items-center gap-2.5">
                           <span className="text-lg">{skill.icon}</span>
                           <span className="text-slate-800 dark:text-gray-200 font-medium text-xs">{skill.name}</span>
                         </div>
                         <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded-full bg-amber-500/10">
                           {skill.level}
                         </span>
                       </div>
                     ))}
                   </div>
                 </div>
                </div>
             ))}
           </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-stretch">
          {/* Experience */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-md dark:shadow-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 dark:text-white mb-8 tracking-tight flex items-center gap-2.5">
                 <FaBriefcase className="text-amber-500 text-lg" />
                 <span>Work History</span>
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative group border-l-2 border-amber-500/40 pl-6">
                    <span className="absolute -left-[7px] top-1.5 h-[12px] w-[12px] rounded-full bg-amber-500 dark:bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400 tracking-wider mb-1 block uppercase font-medium">{exp.year}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-xs mb-3 font-mono">{exp.company}</p>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-md dark:shadow-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 dark:text-white mb-8 tracking-tight flex items-center gap-2.5">
                 <FaGraduationCap className="text-cyan-500 text-xl" />
                 <span>Education & Credentials</span>
              </h3>
              <div className="space-y-8">
                 {education.map((edu, index) => (
                  <div key={index} className="relative group border-l-2 border-cyan-500/40 pl-6">
                    <span className="absolute -left-[7px] top-1.5 h-[12px] w-[12px] rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider mb-1 block uppercase font-medium">{edu.year}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-xs mb-3 font-mono">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light text-sm">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-cyan-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-serif font-medium text-slate-900 dark:text-white">
              Interested in collaborating or hiring Rahul?
            </h4>
            <p className="text-sm text-slate-600 dark:text-gray-300 font-light">
              Available for full-time software engineering roles and freelance contracts worldwide.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs uppercase font-bold tracking-widest rounded-full transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <FaArrowRight size={11} />
          </Link>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import DevProfileAvatar from "../components/DevProfileAvatar";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

// Technologies for the marquee
const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "Express", "Framer Motion", "React Native", "Firebase", "PostgreSQL"
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "12+", label: "Modern Tech Stacks" },
  { value: "100%", label: "Code Quality" },
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="relative w-full text-white animate-fadeIn">
      {/* Decorative noise texture */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] noise-bg" />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12">
          
          {/* Left Side: Title, Description, CTA */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Available for High-Impact Projects</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[92px] font-serif font-medium tracking-tight text-white leading-[0.95]">
              Digital<br />
              <span className="italic text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Craftsmanship.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              I&apos;m Rahul Misal. I engineer bespoke digital experiences that live at the intersection of minimal design and robust architecture.
            </p>
            
            <div className="flex items-center gap-6 pt-2 pb-2">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-black text-xs font-mono font-bold uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:bg-amber-400"
              >
                <span>Selected Works</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Developer Profile Canvas */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <DevProfileAvatar variant="home" />
          </div>
        </div>
      </section>

      {/* Infinite Tech Stack Marquee */}
      <section className="py-10 border-y border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden relative my-16">
         <div className="flex whitespace-nowrap animate-marquee w-fit">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
               <span key={index} className="mx-8 text-3xl sm:text-5xl font-serif font-medium text-transparent text-stroke-1 text-stroke-white uppercase tracking-wider opacity-40 hover:opacity-100 hover:text-amber-400 hover:text-stroke-transparent transition-all duration-300 cursor-default">
                  {tech}
               </span>
            ))}
         </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-6">
           <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight">
             Featured Works.
           </h2>
           <Link href="/projects" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-amber-400 transition-colors pb-2">
              View All <FaArrowRight />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {featuredProjects.map((project) => (
             <ProjectCard key={project.id} project={project} />
           ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
           <Link href="/projects" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white border border-white/20 px-6 py-3 rounded-full hover:border-amber-400 transition-colors">
              View All Projects
           </Link>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="mb-24 py-16 px-6 sm:px-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl text-center shadow-2xl hover:border-amber-500/30 transition-all duration-300">
         <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight">
              Architecture over aesthetics.<br />
              <span className="text-amber-400 italic">But why not both?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              I believe that premium products require more than just a beautiful surface. Underneath the minimal design must lie a resilient, scalable, and optimized architecture. I build systems that look stunning and perform flawlessly under pressure.
            </p>
            <div className="pt-4">
               <Link href="/about" className="inline-block border-b border-amber-400 text-xs font-mono font-bold uppercase tracking-widest text-amber-400 hover:text-white hover:border-white transition-colors duration-200 pb-1">
                 Discover My Expertise
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}

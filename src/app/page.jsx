"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import crwg from "../assets/crwg.png";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

// Technologies for the marquee
const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "Express", "Framer Motion", "React Native", "Firebase", "PostgreSQL"
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Featured Projects (top 2)
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="relative overflow-hidden w-full">
      {/* Decorative anti-ai noise/grain */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] noise-bg"></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative flex flex-col justify-center min-h-[90vh] pt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-12">
          
          {/* Left Side: Title, Description, CTA */}
          <motion.div 
            className="w-full md:w-3/5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif font-medium tracking-tight text-white leading-[0.9]">
              Digital<br />
              <span className="italic text-gray-400">Craftsmanship.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              I&apos;m Rahul Misal. I engineer bespoke digital experiences that live at the intersection of minimal design and robust architecture.
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest overflow-hidden rounded-sm"
              >
                <div className="absolute inset-0 w-0 bg-amber-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Selected Works <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            style={{ y }}
            className="w-full md:w-2/5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full -z-10"></div>
              <Image
                src={crwg}
                alt="Rahul Misal"
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Infinite Tech Stack Marquee */}
      <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden relative w-[100vw] left-1/2 -ml-[50vw] mb-32">
         <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
         <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
         
         <div className="flex whitespace-nowrap animate-marquee w-fit">
            {/* 3 sets of the list to create a seamless infinite loop that is wide enough */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
               <span key={index} className="mx-8 text-4xl md:text-6xl font-serif font-medium text-transparent text-stroke-1 text-stroke-gray-800 uppercase tracking-wider opacity-60 hover:text-white hover:text-stroke-transparent transition-all duration-300">
                  {tech}
               </span>
            ))}
         </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-8">
           <h2 className="text-4xl md:text-6xl font-serif font-medium text-white tracking-tight">
             Featured Works.
           </h2>
           <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors pb-2">
              View All <FaArrowRight />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {featuredProjects.map((project) => (
             <ProjectCard key={project.id} project={project} />
           ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
           <Link href="/projects" className="flex items-center gap-2 text-sm uppercase tracking-widest text-white border border-white/20 px-6 py-3 rounded-sm">
              View All Projects
           </Link>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="mb-32 py-20 bg-gradient-to-b from-transparent to-black/80 border-t border-white/5 w-[100vw] left-1/2 -ml-[50vw] relative flex justify-center">
         <div className="max-w-4xl w-full px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight">
              Architecture over aesthetics.<br />
              <span className="text-amber-500 italic">But why not both?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              I believe that premium products require more than just a beautiful surface. Underneath the minimal design must lie a resilient, scalable, and optimized architecture. I build systems that look stunning and perform flawlessly under pressure.
            </p>
            <div className="pt-8">
               <Link href="/about" className="inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white text-sm font-bold uppercase tracking-widest hover:text-amber-500 hover:after:bg-amber-500 transition-colors pb-1">
                 Discover My Expertise
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}

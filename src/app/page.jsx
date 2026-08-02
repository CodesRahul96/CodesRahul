"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import crwg from "../assets/crwg.png";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

// Clean technology tags
const coreSkills = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "Express", "React Native", "Firebase", "PostgreSQL"
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Production Projects" },
  { value: "MERN", label: "Core Stack" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="relative w-full text-white animate-fadeIn">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12">
          
          {/* Left Column: Authentic Executive Bio */}
          <div className="w-full lg:w-7/12 space-y-8">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-time Roles & Contracts</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.05]">
              Full Stack Software Engineer.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
              Hi, I&apos;m <span className="text-white font-medium">Rahul Misal</span>. I design and build high-performance web applications, scalable MERN architectures, and intuitive digital interfaces.
            </p>
            
            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-amber-500 text-black text-xs font-mono font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-200 hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 hover:border-white/30 text-white text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-200 hover:bg-white/10"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Clean High-Res Portrait */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] rounded-3xl p-1 bg-gradient-to-b from-white/15 via-amber-500/20 to-transparent backdrop-blur-xl border border-white/15 shadow-2xl group">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#070913] flex items-center justify-center">
                <Image
                  src={crwg}
                  alt="Rahul Misal"
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>

              {/* Subtle Floating Role Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0a0d18] border border-white/15 text-amber-400 text-[10px] font-mono uppercase tracking-widest shadow-xl whitespace-nowrap">
                Rahul Misal — Pune, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Ticker */}
      <section className="py-8 border-y border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden relative my-16">
        <div className="flex whitespace-nowrap animate-marquee w-fit">
          {[...coreSkills, ...coreSkills, ...coreSkills].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl sm:text-4xl font-serif font-medium text-gray-400 hover:text-amber-400 uppercase tracking-wider opacity-60 hover:opacity-100 transition-all duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Works */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Portfolio Highlights</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight mt-1">
              Featured Projects.
            </h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-amber-400 transition-colors pb-2">
            View All Projects <FaArrowRight />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Professional Commitment Section */}
      <section className="mb-24 py-14 px-8 sm:px-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl text-center shadow-2xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white tracking-tight">
            Engineering scalable products with clean, maintainable code.
          </h2>
          <p className="text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Focused on building dependable, performant web applications using React, Next.js, Node.js, and modern cloud technologies.
          </p>
          <div className="pt-2">
            <Link href="/about" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-white transition-colors">
              <span>Read Full Background</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

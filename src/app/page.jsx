"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import rahulHero3D from "../assets/rahul_hero_3d.png";
import ProjectCard from "../components/ProjectCard";
import InteractivePhotoCard from "../components/InteractivePhotoCard";
import projectsData from "../data/projects.json";

// Clean technology tags
const coreSkills = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "Express", "Android (Kotlin)", "Jetpack Compose", "React Native", "Firebase", "PostgreSQL"
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "MERN + Android", label: "Core Stack" },
  { value: "100%", label: "Code Integrity" },
];

const engineeringDomains = [
  {
    title: "Full Stack & MERN Architecture",
    tag: "Web Platforms",
    badge: "MongoDB • Express • React • Node",
    description: "Designing end-to-end web platforms with SSR Next.js, resilient Express RESTful APIs, real-time Socket.IO synchronization, and secure JWT / OAuth authentication.",
    highlights: ["Scalable REST & GraphQL APIs", "Real-time Event Systems", "MongoDB Aggregations & PostgreSQL"]
  },
  {
    title: "Native Android & Mobile Systems",
    tag: "Mobile Apps",
    badge: "Kotlin • Jetpack Compose • ExoPlayer",
    description: "Building responsive, hardware-accelerated Android applications utilizing Kotlin, Jetpack Compose, libmpv / ExoPlayer media engines, and Hilt dependency injection.",
    highlights: ["Modern Material 3 Design", "Hardware Acceleration & C++ Interop", "Clean MVVM Architecture"]
  },
  {
    title: "Performance, Cloud & DevOps",
    tag: "Infrastructure",
    badge: "Next.js 15 • Firebase • Docker • Vercel",
    description: "Optimizing Web Vitals (LCP, INP), configuring automated deployment pipelines, implementing client caching strategies, and managing cloud services.",
    highlights: ["Sub-second Page Loads", "Zero-downtime CI/CD", "Secure Firebase & Cloud Functions"]
  }
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 4);

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
              <span>Available for Full-time Roles & Contracts • Pune / Remote</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.05]">
              Full Stack & Android <br className="hidden sm:inline" />
              <span className="text-amber-400 italic font-normal">Software Engineer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
              Hi, I&apos;m <span className="text-white font-medium">Rahul Misal</span>. I engineer high-performance web systems using the <span className="text-amber-400 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js), <span className="text-white font-medium">Next.js</span>, and native <span className="text-cyan-400 font-medium">Android applications</span> with Kotlin.
            </p>
            
            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-amber-500 text-black text-xs font-mono font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-200 hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
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

          {/* Right Column: 3D Interactive Portrait */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <InteractivePhotoCard
              imageSrc={rahulHero3D}
              alt="Rahul Misal — Full Stack & Android Developer"
              badgeText="Rahul Misal — Pune, India"
              gradientBorder="from-white/15 via-amber-500/20 to-transparent"
              glowColor="rgba(245, 158, 11, 0.25)"
              priority
            />
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

      {/* Core Engineering Domains (Executive Section) */}
      <section className="mb-24">
        <div className="mb-12 border-b border-white/10 pb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Engineering Competence</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight mt-1">
            Specialized Architectures.
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light mt-2 max-w-2xl">
            From resilient full-stack MERN backends to native Android mobile platforms and low-latency cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringDomains.map((domain, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                    {domain.tag}
                  </span>
                  <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-serif font-medium text-white group-hover:text-amber-400 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400 tracking-wide">
                  {domain.badge}
                </p>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                {domain.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="text-amber-400">✦</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
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
            View All 20 Projects <FaArrowRight />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Professional Commitment Section */}
      <section className="mb-24 py-14 px-8 sm:px-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-cyan-500/5 to-purple-500/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block">
            Engineering Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white tracking-tight">
            Engineering scalable systems with maintainable, dependable code.
          </h2>
          <p className="text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Committed to building production software with responsive user interfaces, robust data security, optimal Lighthouse performance, and clean API boundaries.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-amber-500/40 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-white rounded-full transition-all">
              <span>Read Full Background</span>
              <FaArrowRight />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black text-xs font-mono uppercase font-bold tracking-widest rounded-full hover:bg-amber-400 transition-all">
              <span>Initiate Project</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

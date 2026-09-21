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
    <div className="relative w-full text-slate-900 dark:text-white animate-fadeIn transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12">
          
          {/* Left Column: Authentic Executive Bio */}
          <div className="w-full lg:w-7/12 space-y-8">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono tracking-wider backdrop-blur-md font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>Available for Freelance & Full-time Roles • Pune, Maharashtra & Remote</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Full Stack, Freelance & <br className="hidden sm:inline" />
              <span className="text-amber-500 dark:text-amber-400 italic font-normal">Android Developer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed font-light">
              Hi, I&apos;m <span className="text-slate-900 dark:text-white font-medium">Rahul Misal</span> — a professional <span className="text-amber-600 dark:text-amber-400 font-medium">Full Stack & Freelance Web Developer</span> and <span className="text-cyan-600 dark:text-cyan-400 font-medium">Native Android Engineer</span> based in Pune, Maharashtra, India. I engineer high-performance MERN stack web applications, Next.js platforms, and Kotlin mobile apps.
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
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 text-slate-800 dark:text-white text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-200 shadow-sm"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-600 dark:text-amber-400">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400 mt-1">{stat.label}</div>
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
              gradientBorder="from-slate-300/40 via-amber-500/20 to-transparent dark:from-white/15 dark:via-amber-500/20 dark:to-transparent"
              glowColor="rgba(245, 158, 11, 0.25)"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tech Ticker */}
      <section className="py-8 border-y border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.02] backdrop-blur-md overflow-hidden relative my-16 transition-colors duration-300">
        <div className="flex whitespace-nowrap animate-marquee w-fit">
          {[...coreSkills, ...coreSkills, ...coreSkills].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl sm:text-4xl font-serif font-medium text-slate-400 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400 uppercase tracking-wider opacity-70 hover:opacity-100 transition-all duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Core Engineering Domains (Executive Section) */}
      <section className="mb-24">
        <div className="mb-12 border-b border-slate-200 dark:border-white/10 pb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">Engineering Competence</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-slate-900 dark:text-white tracking-tight mt-1">
            Specialized Architectures.
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base font-light mt-2 max-w-2xl">
            From resilient full-stack MERN backends to native Android mobile platforms and low-latency cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringDomains.map((domain, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-amber-500/40 hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300 shadow-md dark:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 font-medium">
                    {domain.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-gray-500">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-serif font-medium text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wide font-medium">
                  {domain.badge}
                </p>

                <p className="text-slate-600 dark:text-gray-300 text-sm font-light leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/5 space-y-2">
                {domain.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-gray-400">
                    <span className="text-amber-500 dark:text-amber-400">✦</span>
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
        <div className="flex justify-between items-end mb-12 border-b border-slate-200 dark:border-white/10 pb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">Portfolio Highlights</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-slate-900 dark:text-white tracking-tight mt-1">
              Featured Projects.
            </h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors pb-2">
            View All 20 Projects <FaArrowRight />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* See More Projects CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/[0.03] hover:bg-amber-500 hover:border-amber-500 dark:hover:bg-amber-500 dark:hover:border-amber-500 text-slate-700 dark:text-gray-200 hover:text-black dark:hover:text-black text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] backdrop-blur-md"
          >
            <span>See All Projects</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Professional Commitment Section */}
      <section className="mb-24 py-14 px-8 sm:px-12 bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl text-center shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-cyan-500/5 to-purple-500/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block font-medium">
            Engineering Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 dark:text-white tracking-tight">
            Engineering scalable systems with maintainable, dependable code.
          </h2>
          <p className="text-base text-slate-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Committed to building production software with responsive user interfaces, robust data security, optimal Lighthouse performance, and clean API boundaries. Based in Pune, Maharashtra and delivering worldwide.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-amber-500/40 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-all shadow-sm">
              <span>Read Full Background</span>
              <FaArrowRight />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black text-xs font-mono uppercase font-bold tracking-widest rounded-full hover:bg-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <span>Initiate Project</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* High-Intent SEO FAQ Section (Google Rich Snippets & SGE Target) */}
      <section className="mb-24">
        <div className="mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">Frequently Asked Questions</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-slate-900 dark:text-white tracking-tight mt-1">
            Frequently Asked Queries.
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base font-light mt-2 max-w-2xl">
            Everything you need to know about working with Rahul Misal on Full Stack web, Android app development, and freelance contracts in Pune, Maharashtra, and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Looking for a freelance Full Stack or Android developer in Pune?",
              a: "Rahul Misal (CodesRahul) is a Pune-based Full Stack and Android Software Engineer with 3+ years of experience delivering MERN stack web applications, Next.js portals, and native Kotlin mobile apps. Available for on-site meetings in Pune and remote engagements across Maharashtra, India, and worldwide."
            },
            {
              q: "What technologies and stacks do you specialize in?",
              a: "My core stack includes MongoDB, Express.js, React.js, Node.js (MERN), Next.js 15, TypeScript, Tailwind CSS, and native Android (Kotlin, Jetpack Compose, ExoPlayer/libmpv), backed by enterprise HTTP security (HSTS, CSP) and Technical SEO."
            },
            {
              q: "How does the freelance project workflow and timeline work?",
              a: "Projects begin with architectural scoping, wireframing, and milestone planning, followed by rapid sprint development with staging previews. Code is delivered with 100% tests, comprehensive documentation, and zero-downtime deployment pipelines."
            },
            {
              q: "How can I hire Rahul Misal for my project or company?",
              a: "Reach out directly via the Contact page, email codesrahul96@gmail.com, or message on WhatsApp at +91 88051 59425. I am open to full-time positions, freelance contracts, and technical consulting."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-md dark:shadow-xl space-y-3"
            >
              <h3 className="text-lg font-serif font-medium text-slate-900 dark:text-white flex items-start gap-3">
                <span className="text-amber-500 text-sm font-mono mt-0.5">0{idx + 1}.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 font-light leading-relaxed pl-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

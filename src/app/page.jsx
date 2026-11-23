"use client";

import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiKotlin, SiTypescript, SiMongodb, SiNodedotjs, SiTailwindcss, SiSupabase, SiDocker, SiSocketdotio } from "react-icons/si";
import rahulHero3D from "../assets/rahul_hero_3d.png";
import ProjectCard from "../components/ProjectCard";
import InteractivePhotoCard from "../components/InteractivePhotoCard";
import projectsData from "../data/projects.json";

// Clean technology tags for the marquee
const coreSkills = [
  "React", "Next.js 15", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "Express", "Android (Kotlin)", "Compose Multiplatform", "Supabase", "Docker", "REST & WebSockets"
];

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "20+", label: "Shipped Projects" },
  { value: "MERN + Kotlin", label: "Core Stack" },
  { value: "#1 Rank", label: "Google SEO Architecture" },
];

const flagshipProjects = [
  {
    id: 1,
    title: "UdemyWala",
    badge: "#1 Google Search Rank",
    category: "Full Stack & Technical SEO",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Schema.org", "SWR"],
    summary: "High-performance discovery engine engineered for search dominance. Ranked #1 globally on Google Search with citations in Google AI Overviews. Built with Next.js 15 App Router, automated microdata, and strict enterprise security headers (HSTS Preload, CSP).",
    demo: "https://udemywala.xyz/",
    github: "https://github.com/CodesRahul96/UdemyWala.git"
  },
  {
    id: 2,
    title: "TaskFlow",
    badge: "Real-Time WebSockets",
    category: "Full Stack Web Platform",
    stack: ["React (Vite)", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    summary: "Production Kanban productivity suite featuring instant multi-user synchronization through Socket.IO WebSockets, drag-and-drop workflow boards, Google OAuth authentication, and hardened role-based authorization.",
    demo: "https://taskflow.indevs.in/",
    github: "https://github.com/CodesRahul96/TaskFlow.git"
  },
  {
    id: 3,
    title: "Renewo",
    badge: "Kotlin Multiplatform (KMP)",
    category: "Native Android & Desktop",
    stack: ["Kotlin", "Compose Multiplatform", "Supabase", "Room DB", "Android"],
    summary: "Cross-platform subscription and personal budget manager built with Compose Multiplatform for Android and Desktop. Features instant recurring payment analytics, 1-tap presets (Netflix, Spotify, iCloud), and high-speed Supabase cloud synchronization.",
    demo: "https://github.com/CodesRahul96/Renewo_App/releases",
    github: "https://github.com/CodesRahul96/Renewo_App.git"
  },
  {
    id: 4,
    title: "OmenControl & Crunchyroll",
    badge: "Systems & Desktop Engineering",
    category: "Linux & Desktop Software",
    stack: ["Python", "GTK4", "Electron", "Linux WMI", "Node.js"],
    summary: "Hardware fan tuning and dynamic RGB management utility for HP Omen gaming laptops on Linux (ACPI WMI integration), alongside a dedicated hardware-accelerated Linux desktop streaming client.",
    demo: "https://github.com/CodesRahul96/OmenControl-Linux.git",
    github: "https://github.com/CodesRahul96/Crunchyroll-Linux-Desktop.git"
  }
];

const engineeringDomains = [
  {
    title: "Full Stack & MERN Architecture",
    tag: "Web Platforms",
    badge: "MongoDB • Express • React • Node.js",
    description: "Designing end-to-end web platforms with SSR Next.js 15, resilient Express RESTful APIs, real-time Socket.IO synchronization, and secure JWT / OAuth authentication.",
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
    badge: "Docker • Supabase • Linux • Vercel",
    description: "Containerizing services, deploying production databases with Row Level Security, enforcing strict HTTP security profiles (HSTS Preload, CSP), and optimizing Core Web Vitals.",
    highlights: ["HSTS Preload & Strict CSP Headers", "Docker Container Workflows", "95+ Lighthouse Performance Audits"]
  }
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="relative w-full text-slate-900 dark:text-white animate-fadeIn transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12">
          
          {/* Left Column: Authentic Executive Bio */}
          <div className="w-full lg:w-7/12 space-y-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono tracking-wide font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-time Roles & Freelance Contracts • Pune & Worldwide</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Full Stack, Freelance & <br className="hidden sm:inline" />
              <span className="text-amber-600 dark:text-amber-400">Android Developer.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Hi, I&apos;m <span className="text-slate-900 dark:text-white font-medium">Rahul Misal</span> — a professional <span className="text-slate-900 dark:text-white font-medium">Full Stack & Freelance Web Developer</span> and <span className="text-slate-900 dark:text-white font-medium">Native Android Engineer</span> based in Pune, Maharashtra, India. I engineer high-performance MERN stack web applications, Next.js platforms, and Kotlin mobile apps.
            </p>
            
            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-colors duration-150 shadow-sm"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="text-xs" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors duration-150"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-sans">{stat.value}</div>
                  <div className="text-[11px] font-mono uppercase tracking-wide text-slate-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Grounded Photo Frame */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <InteractivePhotoCard
              imageSrc={rahulHero3D}
              alt="Rahul Misal — Full Stack & Android Developer"
              badgeText="Rahul Misal — Pune, India"
              priority
            />
          </div>
        </div>
      </section>

      {/* Clean Grounded Horizontal Tech Marquee */}
      <section className="my-16 py-4 border-y border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee w-fit items-center">
          {[...coreSkills, ...coreSkills, ...coreSkills].map((tech, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-6 text-sm sm:text-base font-semibold tracking-wide text-slate-700 dark:text-gray-300 font-mono">
                {tech}
              </span>
              <span className="text-amber-500 text-xs font-bold select-none">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* Flagship Case Studies Section */}
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-slate-200 dark:border-white/10 pb-5">
          <div>
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
              Flagship Case Studies
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
              Production web platforms and client projects engineered with verifiable metrics.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium px-4 py-2 rounded-lg border border-slate-300 dark:border-white/15 hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors self-start sm:self-auto"
          >
            <span>Explore All Projects</span>
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {flagshipProjects.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-150 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-gray-500">{item.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.stack.map((t, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-[11px] font-mono text-slate-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100 dark:border-white/5">
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-600 dark:text-amber-400 hover:underline"
                >
                  <span>Launch Live</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Domains Grid */}
      <section className="mb-20">
        <div className="mb-8 border-b border-slate-200 dark:border-white/10 pb-5">
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering Domains
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
            Core specializations refined across production applications, clients, and open-source systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {engineeringDomains.map((domain, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-150 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{domain.tag}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white">
                  {domain.title}
                </h3>

                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                  {domain.badge}
                </p>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                {domain.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-gray-400">
                    <span className="text-amber-500">✦</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works Grid */}
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-slate-200 dark:border-white/10 pb-5">
          <div>
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
              Select showcase of web applications and mobile apps.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium px-4 py-2 rounded-lg border border-slate-300 dark:border-white/15 hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.06] text-slate-700 dark:text-gray-200 text-xs font-mono uppercase tracking-wider transition-colors duration-150 shadow-sm"
          >
            <span>See All Projects</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>

      {/* Professional Commitment Section */}
      <section className="mb-20 py-10 px-6 sm:px-10 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl text-center shadow-sm relative overflow-hidden transition-colors duration-200">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
            Ready to Build Something Solid?
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
            I am currently available for full-time engineering roles, freelance contracts, and startup technical consulting in Pune, Maharashtra, and remote worldwide.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition-colors duration-150 shadow-sm"
            >
              <span>Schedule a Discussion</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* High-Intent SEO FAQ Section */}
      <section className="mb-20">
        <div className="mb-8 border-b border-slate-200 dark:border-white/10 pb-5">
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
            Common queries regarding full stack web, Android app development, and technical SEO engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              q: "Looking for a Full Stack Developer or Technical SEO Specialist in Pune?",
              a: "Rahul Misal (CodesRahul) is a Pune-based Full Stack and Android Software Engineer with 2.5+ years of experience delivering MERN stack web applications, Next.js portals, and native Kotlin mobile apps. Available for on-site meetings in Pune (Deccan, Baner, Hinjewadi) and remote contracts across Maharashtra, India, and worldwide."
            },
            {
              q: "What technologies and engineering domains do you specialize in?",
              a: "My core engineering stack includes Next.js 15, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, and native Android (Kotlin, Jetpack Compose), backed by enterprise HTTP security (HSTS, CSP) and Technical SEO audits."
            },
            {
              q: "Do you provide Technical SEO and Core Web Vitals optimization?",
              a: "Yes. I execute deep technical SEO audits, structured Schema.org microdata (JSON-LD), crawl budget optimization, and Core Web Vitals speed tuning (LCP < 1.5s, CLS < 0.05, INP < 50ms) to secure #1 organic Google rankings, proven by platforms like UdemyWala and TaskFlow."
            },
            {
              q: "Can you handle Shopify and E-Commerce storefront engineering?",
              a: "Absolutely. I provide custom Shopify theme modifications, Liquid bug fixes, headless Next.js e-commerce storefronts, and Google Merchant product structured data integration to maximize checkout conversion and mobile performance."
            },
            {
              q: "How does the freelance project workflow and delivery timeline work?",
              a: "Projects begin with clear scoping and milestone planning, followed by rapid sprint development with staging previews. Code is delivered with clean git commits, comprehensive documentation, zero-downtime deployments, and GST-ready invoices."
            },
            {
              q: "How can I hire Rahul Misal for my project or company?",
              a: "Reach out directly via the Contact page, email codesrahul96@gmail.com, or message on WhatsApp at +91 88051 59425. I am an immediate joiner available for full-time positions, freelance contracts, and technical consulting."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-150 shadow-sm space-y-2"
            >
              <h3 className="text-base font-sans font-bold text-slate-900 dark:text-white flex items-start gap-2.5">
                <span className="text-amber-500 font-mono text-xs mt-0.5">0{idx + 1}.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

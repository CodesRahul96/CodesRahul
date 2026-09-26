"use client";

import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard";
import projectsData from "../../data/projects.json";

export const dynamic = 'force-dynamic'; // keep client interactivity

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = useMemo(() => (Array.isArray(projectsData) ? projectsData : []), []);

  const categories = useMemo(() => ["All", "Web Development", "Frontend", "Android App", "Desktop App"], []);
  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (filter !== "All") {
      filtered = filtered.filter((p) => p.category.trim().toLowerCase() === filter.trim().toLowerCase());
    }
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.technologies.some((tech) => tech.toLowerCase().includes(term))
      );
    }
    return filtered;
  }, [projects, filter, searchTerm]);

  return (
    <section className="py-12 min-h-screen relative text-slate-900 dark:text-white animate-fadeIn transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-4 tracking-tight">
              Selected Works.
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-cyan-500/50 to-transparent mb-6" />
            <p className="text-slate-600 dark:text-gray-400 text-lg font-light max-w-xl">
              A curated collection of web applications, mobile platforms, and architectural systems.
            </p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mb-14 flex flex-col md:flex-row justify-between items-start gap-6 p-6 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl transition-colors duration-300">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`text-xs font-mono tracking-wider uppercase px-4 py-2.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "bg-slate-100 hover:bg-slate-200/80 border border-slate-300/80 text-slate-700 hover:text-slate-900 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-white/30"
                  }`}
                >
                  {category} <span className="opacity-60 ml-1">({categoryCounts[category] || 0})</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100/90 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 focus:border-amber-500/60 dark:focus:border-amber-500/50 py-2.5 pl-10 pr-4 text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all rounded-full backdrop-blur-md"
            />
          </div>
        </div>

        {/* Clean Project Cards Grid without layout pop glitching */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-slate-500 dark:text-gray-400 font-mono text-sm col-span-2 py-8 text-center bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm">
              No projects matching your search criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const module = await import("../../data/projects.json");
        const data = module?.default ?? module;
        if (mounted && Array.isArray(data)) {
          setProjects(data);
        } else if (mounted) {
          setProjects([]);
        }
      } catch (error) {
        if (mounted) setProjects([]);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const categories = useMemo(() => ["All", "Web Development", "Frontend", "Android App"], []);
  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
      let filtered = projects;
      if (filter !== "All") {
        filtered = filtered.filter((p) => p.category.trim().toLowerCase() === filter.trim().toLowerCase());
      }
      if (searchTerm.trim() !== "") {
        const term = searchTerm.toLowerCase().trim();
        filtered = filtered.filter((p) => 
          p.title.toLowerCase().includes(term) || 
          p.category.toLowerCase().includes(term) ||
          p.technologies.some(tech => tech.toLowerCase().includes(term))
        );
      }
      return filtered;
    }, [projects, filter, searchTerm]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-10 min-h-screen relative"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-tight">
              Selected Works.
            </h2>
            <div className="w-full h-[1px] bg-white/20 mb-8"></div>
            <p className="text-gray-400 text-lg font-light">
              A collection of projects exploring web and mobile architecture.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                    filter === category ? "text-white border-b border-white" : "text-gray-600 hover:text-gray-300"
                  } pb-1`}
                >
                  {category} ({categoryCounts[category] || 0})
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <FaSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-gray-800 focus:border-white py-2 pl-8 pr-4 text-sm text-gray-200 focus:outline-none transition-colors rounded-none"
              />
            </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <AnimatePresence mode="popLayout">
              {projects.length === 0 ? (
                 <motion.p key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 font-light">
                  Fetching portfolio projects...
                </motion.p>
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <motion.p key="empty" className="text-gray-500 font-light">
                  No projects matching your criteria.
                </motion.p>
              )}
            </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}

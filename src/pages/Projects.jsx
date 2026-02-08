import React, { useState, useEffect, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiAxios,
  SiWordpress ,
  SiKotlin,
  SiAndroidstudio,
  SiFirebase,
} from "react-icons/si";
import { FaAndroid, FaSearch } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import * as projectImages from "../assets/projects";

const techIcons = {
  React: <SiReact className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  Express: <SiExpress className="text-gray-300" />,
  "Socket.io": <SiSocketdotio className="text-gray-400" />,
  "API Integration": <FaExternalLinkAlt className="text-gray-300" />,
  Axios: <SiAxios className="text-violet-400" />,
  Wordpress: <SiWordpress className="text-white-400" />,
  JWT: <VscJson className="text-orange-400" />,
  Kotlin: <SiKotlin className="text-purple-500" />,
  "Android Studio": <SiAndroidstudio className="text-blue-600" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Android: <FaAndroid className="text-green-500" />,
};

// Progressive Image Component
const ProgressiveImage = React.memo(({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
        {/* Placeholder / Skeleton */}
        {!isLoaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}
        
        {/* Actual Image */}
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-110"
            }`}
            onError={(e) => {
                e.target.src = projectImages.comingsoon;
                setIsLoaded(true); 
            }}
        />
    </div>
  );
});

const ProjectCard = React.memo(function ProjectCard({ project }) {
  const imageSrc = projectImages[project.image] || projectImages.comingsoon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-[#111827]/40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500"
    >
      <div className="relative overflow-hidden h-52">
        <ProgressiveImage 
            src={imageSrc}
            alt={project.title}
            className="w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6 backdrop-blur-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3.5 rounded-full text-white hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:scale-110 border border-white/10"
            title="View Code"
          >
             <FaGithub size={22} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3.5 rounded-full text-white hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:scale-110 border border-white/10"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
        
        {/* Platform Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl border ${
            project.category === "Android App" 
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
              : "bg-blue-500/10 text-blue-400 border-blue-500/20"
          }`}>
            {project.category === "Android App" ? "Android" : "Web"}
          </span>
        </div>
      </div>
      
      <div className="p-7 space-y-4">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2.5 pt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="group/tag flex items-center px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[11px] font-semibold text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
            >
              {techIcons[tech] && <span className="mr-2 group-hover/tag:scale-110 transition-transform">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Decorative accent boarder on hover */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
});

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "CodesRahul | Projects";
    try {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
          desc = document.createElement('meta');
          desc.name = 'description';
          document.head.appendChild(desc);
      }
      desc.content = 'Projects by Rahul — selected web projects built with React, Node.js and modern web stacks.';
    } catch {}

    let mounted = true;
    (async () => {
      try {
        const module = await import("../data/projects.json");
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

    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const cats = ["All", "Web Development", "Frontend", "Android App"];
    return cats;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(
    () => {
      let filtered = projects;
      if (filter !== "All") {
        filtered = filtered.filter((project) => 
          project.category.trim().toLowerCase() === filter.trim().toLowerCase()
        );
      }
      if (searchTerm.trim() !== "") {
        const term = searchTerm.toLowerCase().trim();
        filtered = filtered.filter((project) => 
          project.title.toLowerCase().includes(term) || 
          project.category.toLowerCase().includes(term) ||
          project.technologies.some(tech => tech.toLowerCase().includes(term))
        );
      }
      return filtered;
    },
    [projects, filter, searchTerm]
  );

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 bg-gray-950 min-h-screen relative"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 ripple-grid" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
             <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter"
             >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Projects</span>
            </motion.h2>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
                A showcase of my recent work, side projects, and open source contributions.
            </motion.p>
          </div>

          {/* Search and Filter Section */}
          <div className="space-y-8 mb-12">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-md mx-auto"
            >
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 focus:border-amber-500/50 focus:bg-[#1e293b]/60 rounded-2xl py-4 pl-14 pr-6 text-gray-200 placeholder-gray-500 focus:outline-none transition-all duration-500"
              />
            </motion.div>

            {/* Filter Options */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative group flex items-center gap-2 ${
                    filter === category
                      ? "text-gray-900"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {filter === category && (
                      <motion.div
                          layoutId="activeFilter"
                          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 shadow-[0_4px_15px_rgba(245,158,11,0.3)] rounded-xl"
                          style={{ zIndex: -1 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                  )}
                  <span className="font-bold tracking-wide">{category}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-lg border flex items-center justify-center min-w-[24px] ${
                    filter === category ? "bg-black/20 text-black border-black/10" : "bg-white/5 text-gray-400 border-white/5 group-hover:bg-white/10"
                  }`}>
                    {categoryCounts[category] || 0}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Project Cards Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <AnimatePresence mode="popLayout">
              {projects.length === 0 ? (
                 <motion.p
                    key="loading"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-400 col-span-full py-20 font-medium"
                 >
                  Fetching portfolio projects...
                </motion.p>
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <motion.p 
                    key="empty"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center text-gray-500 col-span-full py-20 border-2 border-dashed border-white/5 rounded-3xl"
                >
                  We couldn't find any projects matching your criteria.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">
              Want to See More?
            </h3>
            <a
              href="https://github.com/codesrahul96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold py-3 px-8 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition duration-300 transform hover:scale-105"
            >
              Visit My GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;

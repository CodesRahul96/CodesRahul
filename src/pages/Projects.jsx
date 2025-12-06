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
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

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
};

const ProjectCard = React.memo(function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-2xl hover:border-yellow-500/50 group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://raw.githubusercontent.com/CodesRahul96/CodesRahul/refs/heads/main/src/assets/projects/comingsoon.png";
          }}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-3 rounded-full text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            title="View Code"
          >
             <FaGithub size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-3 rounded-full text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center px-2.5 py-1 bg-gray-700/50 border border-gray-600 rounded-md text-xs text-gray-300"
            >
              {techIcons[tech] && <span className="mr-1.5">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const categories = useMemo(() => ["All", "Web Development", "Frontend"], []);

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [projects, filter]
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
                className="text-4xl md:text-5xl font-extrabold text-gray-100"
             >
              My <span className="text-yellow-400">Projects</span>
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

          {/* Filter Options */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${
                  filter === category
                    ? "text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {filter === category && (
                    <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-yellow-500 rounded-full"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                {category}
              </button>
            ))}
          </motion.div>

          {/* Project Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {projects.length === 0 ? (
                 <motion.p
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-400 col-span-full py-20"
                 >
                  Loading projects...
                </motion.p>
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-gray-400 col-span-full py-20"
                >
                  No projects found in this category.
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Want to See More?
            </h3>
            <a
              href="https://github.com/codesrahul96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 font-bold py-3 px-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition duration-300 transform hover:scale-105"
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

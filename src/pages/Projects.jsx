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

// Keep the tech -> icon map at module scope so it's not recreated on every render
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

// Memoized project card to avoid re-rendering when unrelated state changes
const ProjectCard = React.memo(function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src =
            "https://raw.githubusercontent.com/CodesRahul96/CodesRahul/refs/heads/main/src/assets/projects/comingsoon.png";
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-200"
            >
              {techIcons[tech] && <span className="mr-1">{techIcons[tech]}</span>}
              <span>{tech}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
});

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load projects JSON dynamically to keep initial bundle smaller
  useEffect(() => {
    document.title = "Projects";
    let mounted = true;
    (async () => {
      try {
        const module = await import("../data/projects.json");
        const data = module?.default ?? module;
        if (mounted && Array.isArray(data)) {
          setProjects(data);
        } else if (mounted) {
          console.error("Projects data is not an array or is undefined:", data);
          setProjects([]);
        }
      } catch (error) {
        console.error("Error loading projects data:", error);
        if (mounted) setProjects([]);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Define categories for filtering (memoized)
  const categories = useMemo(() => ["All", "Web Development", "Frontend"], []);

  // Filter projects based on selected category (memoized)
  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [projects, filter]
  );

  

  return (
    <section
      id="projects"
      className="py-20 bg-gray-950 min-h-screen relative"
    >
      {/* Subtle ripple grid background behind project cards */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 ripple-grid" />

  <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 animate-fadeIn">
              My Projects
            </h2>

            {/* Filter Options */}
            <div className="flex justify-center space-x-4 mb-8 animate-fadeIn delay-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                    filter === category
                      ? "bg-yellow-500 text-gray-900"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {projects.length === 0 ? (
                <p className="text-center text-gray-400 col-span-full">
                  No projects available. Please check the data source.
                </p>
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p className="text-center text-gray-400 col-span-full">
                  No projects found in this category.
                </p>
              )}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 animate-fadeIn delay-600">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                Want to See More?
              </h3>
              <p className="text-gray-300 mb-6">
                Check out my GitHub for more projects and contributions!
              </p>
              <a
                href="https://github.com/codesrahul96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

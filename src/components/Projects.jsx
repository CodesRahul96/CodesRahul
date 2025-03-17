import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json"; // Import JSON file directly
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load projects from imported JSON data
  useEffect(() => {
    try {
      console.log("Imported Projects Data:", projectsData); // Debugging log
      if (projectsData && Array.isArray(projectsData)) {
        setProjects(projectsData);
      } else {
        console.error(
          "Projects data is not an array or is undefined:",
          projectsData
        );
        setProjects([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error loading projects data:", error);
      setProjects([]); // Fallback to empty array
    }
  }, []);

  // Define categories for filtering
  const categories = ["All", "Web Development", "Frontend"];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Map tech stack to icons
  const techIcons = {
    React: <SiReact className="text-blue-500" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-700" />,
    TailwindCSS: <SiTailwindcss className="text-teal-400" />,
    Express: <SiExpress className="text-gray-300" />,
    "Socket.io": <SiSocketdotio className="text-gray-400" />,
    "API Integration": <FaExternalLinkAlt className="text-gray-300" />,
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-gray-950 via-blue-950 to-violet-950 min-h-screen "
    >
      <div className="container mx-auto px-4">
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
                  <div
                    key={project.id}
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400"
                  >
                    {/* Project Image */}
                    <img
                      src={`/assets/${project.image}`} // Ensure images are in src/assets
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200"; // Fallback image
                      }}
                    />
                    <div className="p-6">
                      {/* Project Title */}
                      <h3 className="text-xl font-semibold text-gray-100 mb-2">
                        {project.title}
                      </h3>
                      {/* Project Description */}
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-200"
                          >
                            {techIcons[tech] && (
                              <span className="mr-1">{techIcons[tech]}</span>
                            )}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                      {/* Links */}
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
                href="https://github.com/yourusername"
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

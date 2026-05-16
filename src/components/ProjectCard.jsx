import React from "react";
import Image from "next/image";
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
  SiWordpress,
  SiKotlin,
  SiAndroidstudio,
  SiFirebase,
} from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { motion } from "framer-motion";
import * as projectImages from "../assets/projects";

const techIcons = {
  React: <SiReact />,
  JavaScript: <SiJavascript />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  TailwindCSS: <SiTailwindcss />,
  Express: <SiExpress />,
  "Socket.io": <SiSocketdotio />,
  "API Integration": <FaExternalLinkAlt />,
  Axios: <SiAxios />,
  Wordpress: <SiWordpress />,
  JWT: <VscJson />,
  Kotlin: <SiKotlin />,
  "Android Studio": <SiAndroidstudio />,
  Firebase: <SiFirebase />,
  Android: <FaAndroid />,
};

const ProjectCard = React.memo(function ProjectCard({ project }) {
  const imageSrc = projectImages[project.image] || projectImages.comingsoon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative border border-white/10 bg-[#050505] overflow-hidden transition-colors hover:border-white/30"
    >
      <div className="relative overflow-hidden h-64 md:h-80 border-b border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
         {imageSrc?.src ? (
           <Image src={imageSrc} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
         ) : (
           <img src={imageSrc} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
         )}
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6 backdrop-blur-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full text-white bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
              title="View Code"
            >
               <FaGithub size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full text-white bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-amber-500 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase border border-gray-800 px-2 py-1">
                {project.category === "Android App" ? "App" : "Web"}
            </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center px-2 py-1 text-[10px] uppercase tracking-wider text-gray-500"
            >
              {techIcons[tech] && <span className="mr-2 opacity-50">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectCard;

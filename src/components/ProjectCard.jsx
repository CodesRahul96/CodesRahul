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
    <div className="group relative rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-300 ease-out hover:border-amber-500/40 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between h-full">
      {/* Top subtle glow accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="relative overflow-hidden h-64 md:h-72 border-b border-white/10">
          {imageSrc?.src ? (
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <img
              src={imageSrc}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          )}

          {/* Translucent Action Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4 backdrop-blur-md">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full text-white bg-white/10 hover:bg-amber-500 hover:text-black hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg border border-white/10"
                title="View Code"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full text-white bg-white/10 hover:bg-amber-500 hover:text-black hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg border border-white/10"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="p-7 space-y-4">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-amber-400 transition-colors duration-200">
              {project.title}
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 rounded-full backdrop-blur-md">
              {project.category === "Android App" ? "App" : "Web"}
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-7 pt-0 border-t border-white/5 mt-4">
        <div className="flex flex-wrap gap-2 pt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-md group-hover:border-amber-500/30 group-hover:text-white transition-all duration-200 backdrop-blur-md"
            >
              {techIcons[tech] && (
                <span className="mr-1.5 opacity-80 text-amber-400">
                  {techIcons[tech]}
                </span>
              )}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
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
  SiNextdotjs,
  SiTypescript,
  SiPwa,
} from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import * as projectImages from "../assets/projects";

const techIcons = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
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
  PWA: <SiPwa />,
};

const ProjectCard = React.memo(function ProjectCard({ project }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Resolve multiple images from project.images array OR project.image key
  const imageList = React.useMemo(() => {
    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images
        .map((key) => (typeof key === "string" ? projectImages[key] || key : key))
        .flat()
        .filter(Boolean);
    }
    if (project.image) {
      const resolved = projectImages[project.image] || project.image;
      return Array.isArray(resolved) ? resolved : [resolved];
    }
    return [projectImages.comingsoon];
  }, [project.image, project.images]);

  const hasMultipleImages = imageList.length > 1;
  const currentImage = imageList[currentIdx] || projectImages.comingsoon;

  const handlePrev = useCallback(
    (e) => {
      e?.preventDefault?.();
      e?.stopPropagation?.();
      setCurrentIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
    },
    [imageList.length]
  );

  const handleNext = useCallback(
    (e) => {
      e?.preventDefault?.();
      e?.stopPropagation?.();
      setCurrentIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
    },
    [imageList.length]
  );

  // Keyboard navigation when Lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handlePrev, handleNext]);

  return (
    <>
      <div className="group relative rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-300 ease-out hover:border-amber-500/40 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between h-full">
        {/* Top subtle glow accent bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        <div>
          {/* Image / Gallery Showcase Area */}
          <div className="relative overflow-hidden h-64 md:h-72 border-b border-white/10 bg-black/40">
            {currentImage?.src ? (
              <Image
                src={currentImage}
                alt={`${project.title} - screenshot ${currentIdx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain bg-black/40 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            ) : (
              <img
                src={currentImage}
                alt={`${project.title} - screenshot ${currentIdx + 1}`}
                className="w-full h-full object-contain bg-black/40 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            )}

            {/* Multiple Images Counter Badge */}
            {hasMultipleImages && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {currentIdx + 1} / {imageList.length}
                </span>
              </div>
            )}

            {/* Expand / Lightbox Button */}
            {hasMultipleImages && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/80 hover:text-amber-400 hover:scale-110 active:scale-95 transition-all"
                title="View All Screenshots Fullscreen"
              >
                <FaExpand size={11} />
              </button>
            )}

            {/* Carousel Navigation Arrows (visible on hover) */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white hover:text-black hover:bg-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center shadow-lg"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={11} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white hover:text-black hover:bg-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center shadow-lg"
                  aria-label="Next image"
                >
                  <FaChevronRight size={11} />
                </button>

                {/* Dot Pagination indicators */}
                <div className="absolute bottom-2.5 left-0 right-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
                  {imageList.slice(0, 8).map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIdx
                          ? "w-4 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                          : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                  {imageList.length > 8 && (
                    <span className="text-[9px] font-mono text-gray-300 ml-1">
                      +{imageList.length - 8}
                    </span>
                  )}
                </div>
              </>
            )}

            {/* Translucent Action Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4 backdrop-blur-md pointer-events-none group-hover:pointer-events-auto z-10">
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
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="p-3.5 rounded-full text-white bg-white/10 hover:bg-cyan-500 hover:text-black hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg border border-white/10"
                  title="Open Gallery Lightbox"
                >
                  <FaExpand size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-7 space-y-4">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-amber-400 transition-colors duration-200">
                {project.title}
              </h3>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                  {project.category === "Android App"
                    ? "App"
                    : project.category === "Open Source"
                    ? "OS"
                    : "Web"}
                </span>
                {project.contributed && (
                  <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                    ✦ Contributed
                  </span>
                )}
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies Badges */}
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

      {/* Fullscreen Lightbox Modal for Multi-Screenshot Inspection */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Header Bar */}
          <div
            className="flex items-center justify-between w-full max-w-6xl mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-lg md:text-xl font-medium text-white">
                {project.title}
              </h4>
              <span className="text-xs font-mono text-amber-400">
                Screenshot {currentIdx + 1} of {imageList.length}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-all duration-200"
              title="Close (Esc)"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Centered Main Image Display */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] max-h-[85vh] flex items-center justify-center">
              {currentImage?.src ? (
                <Image
                  src={currentImage}
                  alt={`${project.title} - fullscreen screenshot ${currentIdx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <img
                  src={currentImage}
                  alt={`${project.title} - fullscreen screenshot ${currentIdx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>

            {/* Left / Right Nav Chevrons */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-200 shadow-2xl"
              title="Previous Screenshot"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-200 shadow-2xl"
              title="Next Screenshot"
            >
              <FaChevronRight size={18} />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div
            className="w-full max-w-4xl mx-auto overflow-x-auto flex items-center justify-center gap-2.5 py-2 px-4 z-10 scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            {imageList.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  idx === currentIdx
                    ? "border-amber-400 scale-105 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                    : "border-white/20 opacity-50 hover:opacity-90"
                }`}
              >
                {img?.src ? (
                  <Image
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                ) : (
                  <img
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export default ProjectCard;

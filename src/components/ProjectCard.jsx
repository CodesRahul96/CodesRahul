import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
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

  // Touch swipe tracking refs
  const cardTouchStartX = useRef(null);
  const cardTouchStartY = useRef(null);
  const modalTouchStartX = useRef(null);
  const modalTouchStartY = useRef(null);

  // Safely resolve multiple images from project.images array OR project.image key
  const imageList = useMemo(() => {
    let raw = [];
    if (Array.isArray(project.images) && project.images.length > 0) {
      raw = project.images;
    } else if (project.image) {
      const resolved = projectImages[project.image] || project.image;
      raw = Array.isArray(resolved) ? resolved : [resolved];
    } else {
      raw = [projectImages.comingsoon];
    }

    const flattened = raw
      .flat(Infinity)
      .map((item) => (typeof item === "string" ? projectImages[item] || item : item))
      .filter(Boolean);

    return flattened.length > 0 ? flattened : [projectImages.comingsoon];
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

  // Touch Swipe for Card Carousel (Mobile friendly)
  const onCardTouchStart = (e) => {
    if (!hasMultipleImages) return;
    cardTouchStartX.current = e.touches[0].clientX;
    cardTouchStartY.current = e.touches[0].clientY;
  };

  const onCardTouchEnd = (e) => {
    if (!hasMultipleImages || cardTouchStartX.current === null || cardTouchStartY.current === null) return;
    const diffX = cardTouchStartX.current - e.changedTouches[0].clientX;
    const diffY = cardTouchStartY.current - e.changedTouches[0].clientY;

    // Must be predominantly horizontal and over 35px threshold
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext(e);
      } else {
        handlePrev(e);
      }
    }
    cardTouchStartX.current = null;
    cardTouchStartY.current = null;
  };

  // Touch Swipe for Fullscreen Lightbox Modal
  const onModalTouchStart = (e) => {
    modalTouchStartX.current = e.touches[0].clientX;
    modalTouchStartY.current = e.touches[0].clientY;
  };

  const onModalTouchEnd = (e) => {
    if (modalTouchStartX.current === null || modalTouchStartY.current === null) return;
    const diffX = modalTouchStartX.current - e.changedTouches[0].clientX;
    const diffY = modalTouchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext(e);
      } else {
        handlePrev(e);
      }
    }
    modalTouchStartX.current = null;
    modalTouchStartY.current = null;
  };

  // Lock body scroll and handle keyboard navigation when Lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    // Prevent background scrolling on mobile & desktop
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handlePrev, handleNext]);

  return (
    <>
      <div className="group relative rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-300 ease-out hover:border-amber-500/40 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between h-full">
        {/* Top subtle glow accent bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        <div>
          {/* Image / Gallery Showcase Area with Dynamic Ambient Backdrop */}
          <div
            className="relative overflow-hidden h-64 sm:h-72 border-b border-white/10 bg-gradient-to-b from-[#0e1424] via-[#090d19] to-[#04060d] select-none touch-pan-y"
            onTouchStart={onCardTouchStart}
            onTouchEnd={onCardTouchEnd}
          >
            {/* Dynamic Ambient Colored Glow matching active screenshot */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-45">
              {currentImage?.src ? (
                <Image
                  src={currentImage}
                  alt=""
                  fill
                  sizes="100px"
                  className="object-cover scale-150 blur-3xl"
                  aria-hidden="true"
                />
              ) : (
                <img
                  src={typeof currentImage === "string" ? currentImage : currentImage?.src || ""}
                  alt=""
                  className="w-full h-full object-cover scale-150 blur-3xl"
                  aria-hidden="true"
                />
              )}
              {/* Radial gradient vignette overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.75)_100%)]" />
            </div>

            {/* Main Foreground Screenshot */}
            <div className={`relative w-full h-full flex items-center justify-center z-10 ${hasMultipleImages ? "p-3 sm:p-4" : "p-0"}`}>
              {currentImage?.src ? (
                <Image
                  src={currentImage}
                  alt={`${project.title} - screenshot ${currentIdx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-contain transition-transform duration-500 ease-out pointer-events-none ${
                    hasMultipleImages
                      ? "p-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] group-hover:scale-[1.03]"
                      : "bg-black/30 group-hover:scale-105"
                  }`}
                />
              ) : (
                <img
                  src={typeof currentImage === "string" ? currentImage : currentImage?.src || ""}
                  alt={`${project.title} - screenshot ${currentIdx + 1}`}
                  className={`w-full h-full object-contain transition-transform duration-500 ease-out pointer-events-none ${
                    hasMultipleImages
                      ? "p-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] group-hover:scale-[1.03]"
                      : "bg-black/30 group-hover:scale-105"
                  }`}
                />
              )}
            </div>

            {/* Multiple Images Counter Badge */}
            {hasMultipleImages && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono text-amber-400 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {currentIdx + 1} / {imageList.length}
                </span>
              </div>
            )}

            {/* Expand / Lightbox Button with Generous Mobile Touch Hitbox */}
            {hasMultipleImages && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="absolute top-2.5 right-2.5 z-20 p-2.5 sm:p-2 min-w-[40px] min-h-[40px] rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white/90 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-lg"
                title="View All Screenshots Fullscreen"
                aria-label="View all screenshots fullscreen"
              >
                <FaExpand size={12} />
              </button>
            )}

            {/* Carousel Navigation Arrows: Always accessible on mobile touch & on desktop hover */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white hover:text-black hover:bg-amber-400 active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
                  aria-label="Previous image"
                  title="Previous screenshot"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white hover:text-black hover:bg-amber-400 active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
                  aria-label="Next image"
                  title="Next screenshot"
                >
                  <FaChevronRight size={12} />
                </button>

                {/* Dot Pagination indicators */}
                <div className="absolute bottom-2.5 left-0 right-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none px-2">
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

            {/* Desktop Quick-Action Overlay (visible on hover) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:flex items-center justify-center space-x-4 backdrop-blur-md pointer-events-none group-hover:pointer-events-auto z-10">
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
          <div className="p-6 sm:p-7 space-y-4">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-white group-hover:text-amber-400 transition-colors duration-200">
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

            {/* Mobile Action Buttons Bar (Always accessible on mobile) */}
            <div className="flex items-center gap-3 pt-2 md:hidden">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 active:bg-amber-500 active:text-black transition-colors"
                >
                  <FaGithub size={13} />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400 active:bg-amber-500 active:text-black transition-colors"
                >
                  <FaExternalLinkAlt size={11} />
                  <span>Demo</span>
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 active:bg-cyan-400 active:text-black transition-colors ml-auto"
                >
                  <FaExpand size={10} />
                  <span>Gallery</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="p-6 sm:p-7 pt-0 border-t border-white/5 mt-4">
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

      {/* Fullscreen Lightbox Modal Optimized for Mobile & Desktop */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[#060911]/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 md:p-8 animate-fadeIn select-none overflow-hidden"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Ambient Glow Backdrop for Lightbox */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-35 z-0">
            {currentImage?.src ? (
              <Image
                src={currentImage}
                alt=""
                fill
                sizes="100px"
                className="object-cover scale-150 blur-3xl"
                aria-hidden="true"
              />
            ) : (
              <img
                src={typeof currentImage === "string" ? currentImage : currentImage?.src || ""}
                alt=""
                className="w-full h-full object-cover scale-150 blur-3xl"
                aria-hidden="true"
              />
            )}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-xl" />
          </div>

          {/* Top Header Bar */}
          <div
            className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 px-1 py-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pr-4 min-w-0">
              <h4 className="text-base sm:text-xl font-medium text-white truncate">
                {project.title}
              </h4>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>
                  Screenshot {currentIdx + 1} of {imageList.length}
                </span>
                <span className="text-gray-500 hidden sm:inline">•</span>
                <span className="text-gray-400 hidden sm:inline text-[11px]">
                  Swipe or use arrows to navigate
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-3 sm:p-3.5 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-amber-500 hover:text-black active:scale-90 text-white transition-all duration-200 flex items-center justify-center shrink-0 shadow-lg"
              title="Close (Esc)"
              aria-label="Close lightbox"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Centered Main Image Display with Touch Swipe Support */}
          <div
            className="relative flex-1 flex items-center justify-center my-2 sm:my-4 max-w-6xl w-full mx-auto touch-pan-y z-10"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onModalTouchStart}
            onTouchEnd={onModalTouchEnd}
          >
            <div className="relative w-full h-[60vh] sm:h-[68vh] md:h-[72vh] flex items-center justify-center p-2">
              {currentImage?.src ? (
                <Image
                  src={currentImage}
                  alt={`${project.title} - fullscreen screenshot ${currentIdx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-xl"
                  priority
                />
              ) : (
                <img
                  src={typeof currentImage === "string" ? currentImage : currentImage?.src || ""}
                  alt={`${project.title} - fullscreen screenshot ${currentIdx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                />
              )}
            </div>

            {/* Left / Right Nav Chevrons (Optimized touch targets on mobile) */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-1 sm:left-2 md:-left-6 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 min-w-[44px] min-h-[44px] rounded-full bg-black/80 hover:bg-amber-500 hover:text-black active:scale-90 text-white border border-white/20 backdrop-blur-md transition-all duration-200 shadow-2xl flex items-center justify-center z-20"
              title="Previous Screenshot"
              aria-label="Previous screenshot"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-1 sm:right-2 md:-right-6 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 min-w-[44px] min-h-[44px] rounded-full bg-black/80 hover:bg-amber-500 hover:text-black active:scale-90 text-white border border-white/20 backdrop-blur-md transition-all duration-200 shadow-2xl flex items-center justify-center z-20"
              title="Next Screenshot"
              aria-label="Next screenshot"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          {/* Bottom Thumbnails Strip (Horizontally scrollable & touch scrollable on mobile) */}
          <div
            className="w-full max-w-4xl mx-auto overflow-x-auto flex items-center justify-start sm:justify-center gap-2.5 py-2 px-3 z-10 scrollbar-none snap-x snap-mandatory bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            {imageList.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 snap-center active:scale-95 ${
                  idx === currentIdx
                    ? "border-amber-400 scale-105 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                    : "border-white/20 opacity-50 hover:opacity-90"
                }`}
                aria-label={`Jump to screenshot ${idx + 1}`}
              >
                {img?.src ? (
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                ) : (
                  <img
                    src={typeof img === "string" ? img : img?.src || ""}
                    alt={`Thumbnail ${idx + 1}`}
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

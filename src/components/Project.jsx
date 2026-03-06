import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import RevealOnScroll from "../animations/RevealOnScroll";
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "../animations/animations";

import animeflixImg from "../assets/projects/animeflix.png";
import backendImg   from "../assets/projects/backend.png";
import lawchatImg   from "../assets/projects/lawchat.jpg";

// ── Modal "Đang phát triển" ───────────────────────────────────────────────────
function ComingSoonModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal box */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-4 max-w-sm w-full mx-4"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold transition-colors"
          >
            ✕
          </button>

          {/* Icon lắc */}
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl select-none"
          >
            🚧
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Updating...🚀
          </h2>
          <p className="text-gray-500 text-center text-sm leading-relaxed">
            Demo for this project is not available yet.<br />
            Please check back later or view the source code on GitHub!
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mt-2">
            <motion.div
              className="h-full bg-gradient-to-r from-gray-400 to-gray-800 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "70%" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs text-gray-400">~70% completed</span>

          <button
            onClick={onClose}
            className="mt-2 px-8 py-2.5 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
          >
            Got it
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
const MyProject = () => {
  const [showModal, setShowModal] = useState(false);

  const headerRef    = useRef(null);
  const projectsRef  = useRef(null);
  const headerControls   = useAnimation();
  const projectsControls = useAnimation();
  const headerInView   = useInView(headerRef,   { once: true, threshold: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (headerInView)   headerControls.start("visible");
    if (projectsInView) projectsControls.start("visible");
  }, [headerInView, projectsInView, headerControls, projectsControls]);

  const projects = [
    {
      id: 1,
      title: "Animeflix",
      description:
        "Full-stack anime streaming platform integrating AniList API and multiple streaming providers with fallback handling. Features HLS video streaming, persistent watch history, Redis caching, and scalable App Router architecture.",
      technologies: ["Next.js 15", "React 19", "TypeScript", "MongoDB", "Redis", "NextAuth", "Vercel"],
      demoLink: "https://animeflixnow.vercel.app/",  // ✅ có demo
      githubLink: "https://github.com/ChimUng/animeflix",
      featured: true,
      image: animeflixImg,
    },
    {
      id: 2,
      title: "Animeflix Third-Party System",
      description:
        "Scalable microservices backend as API gateway and third-party data aggregator. Core services: Auth (JWT + rate limiting), User, Catalog, Episode Orchestration. Includes Hybrid AI Search with RAG and vector embeddings.",
      technologies: ["Spring Boot", "Docker", "MongoDB", "Kafka", "Redis", "AWS", "RAG"],
      demoLink: null,  // ← null → hiện modal
      githubLink: "https://github.com/ChimUng/animeflixbackend",
      featured: true,
      image: backendImg,
    },
    {
      id: 3,
      title: "Law_Chat-2015",
      description:
        "AI chatbot for Vietnamese legal consultation based on the 2015 Civil Code. Built with RAG pipeline, Gemini LLM, and FastAPI backend. Supports semantic search over legal documents.",
      technologies: ["Python", "Docker", "FastAPI", "Supabase", "Gemini LLM", "RAG"],
      demoLink: null,  // ← null → hiện modal
      githubLink: "https://github.com/ChimUng/law_dansu2015_chatbox",
      featured: false,
      image: lawchatImg,
    }
  ];

  const handleDemoClick = (e, demoLink) => {
    if (!demoLink) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}

      <RevealOnScroll>
        <div
          id="Project"
          className="w-full mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50"
        >
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the innovative projects and technology solutions I have developed
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={projectsRef}
              initial="hidden"
              animate={projectsControls}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  custom={index}
                  whileHover={cardHover.hover}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border relative ${
                    project.featured
                      ? "border-yellow-400 ring-2 ring-yellow-200"
                      : "border-gray-200"
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Thumbnail */}
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-gray-200">
                      <a
                        href={project.demoLink || "#"}
                        target={project.demoLink ? "_blank" : undefined}
                        rel="noreferrer"
                        onClick={(e) => handleDemoClick(e, project.demoLink)}
                        className="flex-1 bg-black text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                      >
                        {project.demoLink ? "Live Demo" : "🚧 Demo"}
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </>
  );
};

export default MyProject;
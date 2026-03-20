import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../animations/RevealOnScroll";

const MySkill = () => {
  const skillSections = [
    {
      title: "Languages",
      badges: [
        { label: "Java",       color: "ED8B00", logo: "java",       logoColor: "white" },
        { label: "JavaScript", color: "F7DF1E", logo: "javascript", logoColor: "black" },
        { label: "TypeScript", color: "007ACC", logo: "typescript", logoColor: "white" },
      ]
    },
    {
      title: "Frameworks",
      badges: [
        { label: "Spring Boot", color: "6DB33F", logo: "springboot", logoColor: "white" },
        { label: "React",       color: "61DAFB", logo: "react",      logoColor: "black" },
        { label: "Node.js",     color: "339933", logo: "nodedotjs",  logoColor: "white" },
        { label: "Next.js",     color: "000000", logo: "nextdotjs",  logoColor: "white" },
      ]
    },
    {
      title: "Cloud & Databases",
      badges: [
        { label: "AWS",        color: "FF9900", logo: "amazonaws",  logoColor: "white" },
        { label: "MongoDB",    color: "47A248", logo: "mongodb",    logoColor: "white" },
        { label: "PostgreSQL", color: "4169E1", logo: "postgresql", logoColor: "white" },
        { label: "Redis",      color: "DC382D", logo: "redis",      logoColor: "white" },
        { label: "Supabase",   color: "3ECF8E", logo: "supabase",   logoColor: "white" },
        { label: "Cloudflare", color: "F38020", logo: "cloudflare", logoColor: "white" },
      ]
    },
    {
      title: "Tools & DevOps",
      badges: [
        { label: "Docker",         color: "2496ED", logo: "docker",        logoColor: "white" },
        { label: "Git",            color: "F05032", logo: "git",            logoColor: "white" },
        { label: "Postman",        color: "FF6C37", logo: "postman",        logoColor: "white" },
        { label: "GitHub Actions", color: "2088FF", logo: "githubactions",  logoColor: "white" },
        { label: "Apache Kafka",   color: "231F20", logo: "apachekafka",    logoColor: "white" },
      ]
    }
  ];

  return (
    <RevealOnScroll>
      <div id="skill" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 mb-4">
              My Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I work with
            </p>
          </div>

          <motion.div
            whileHover={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12 transition-colors duration-300"
          >
            <div className="space-y-10">
              {skillSections.map((section, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest whitespace-nowrap">
                      {section.title}
                    </h3>
                    <div className="flex-1 h-px bg-gray-100 dark:bg-gray-700" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {section.badges.map((b) => (
                      <img
                        key={b.label}
                        src={`https://img.shields.io/badge/${encodeURIComponent(b.label)}-${b.color}?style=for-the-badge&logo=${b.logo}&logoColor=${b.logoColor}`}
                        alt={b.label}
                        style={{ height: 30 }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default MySkill;
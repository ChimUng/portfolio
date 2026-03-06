import { useState } from "react";
import React from "react";
import RevealOnScroll from "../animations/RevealOnScroll";
import { FaGraduationCap } from "react-icons/fa";

const Experiment = () => {
  const [activeTab, setActiveTab] = useState("work");

  const experimentData = {
    work: [
      {
        id: 1,
        title: "Animeflix – Anime Streaming Platform",
        description: "Built a full-stack anime streaming platform integrating AniList API and multiple streaming providers with fallback handling. Designed scalable App Router architecture, implemented Redis caching, HLS video streaming, and deployed on Vercel.",
        technologies: ["Next.js 15", "React 19", "TypeScript", "MongoDB", "Redis", "Vidstack", "Vercel"]
      },
      {
        id: 2,
        title: "Animeflix Third-Party System",
        description: "Architected a scalable microservices backend serving as API gateway and third-party anime data aggregator. Implemented event-driven communication with Kafka, Redis caching, and a Hybrid AI Search module using RAG + vector embeddings. Deployed on AWS.",
        technologies: ["Spring Boot", "Docker", "MongoDB", "Kafka", "Redis (Upstash)", "RAG", "AWS"]
      }
    ],
    certificates: [
      {
        id: 1,
        name: "Updating...",
        issuer: "The certificate will be updated soon.",
        description: "Currently, there are no certifications available. They will be added in the near future.",
        period: "2024 – present",
        location: "Ho Chi Minh City, Vietnam"
      }
    ]
  };

  const currentData = experimentData[activeTab];

  return (
    <RevealOnScroll>
      <div id="Experience" className="w-full mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Experience</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Explore the practical experiences I have accumulated</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              {["work", "certificates"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-md"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                  }`}>
                  {tab === "work" ? "Work Experience" : "Certificates"}
                </button>
              ))}
            </div>

            <div className="min-h-96">
              {activeTab === "work" && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {currentData.map((item) => (
                    <div key={item.id}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="w-full flex flex-col gap-6">
                  {experimentData.certificates.map((item) => (
                    <div key={item.id}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                      <div className="relative flex items-start space-x-6 pl-10">
                        <div className="absolute left-0 top-1 flex flex-col items-center">
                          <div className="text-3xl text-black dark:text-white"><FaGraduationCap /></div>
                          <div className="mt-2 w-0.5 h-full bg-gray-300 dark:bg-gray-500"></div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-1">{item.issuer}</p>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 sm:text-right">
                              <p>{item.period}</p><p>{item.location}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Experiment;
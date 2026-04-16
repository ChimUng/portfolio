import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLocationDot, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa6";
import { FaUniversity, FaDownload, FaEye } from "react-icons/fa";
import RevealOnScroll from "../animations/RevealOnScroll";
import { imageAnim, itemSlide, buttonAnim, containerSlide } from "../animations/animations";
import img from "../assets/img/avata.jpg";

const About = () => {
  return (
    <RevealOnScroll>
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerSlide}
        className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto px-4 py-12 mt-30"
      >
        {/* Image */}
        <motion.div variants={imageAnim} className="w-full md:w-1/2 flex justify-center">
          <div id="about" className="relative group w-full max-w-md">
            <img
              src={img}
              alt="About me"
              className="rounded-xl shadow-2xl w-full h-[480px] object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-gray-200 dark:border-gray-600 -z-10 group-hover:-bottom-2 group-hover:-right-2 group-hover:border-black dark:group-hover:border-white transition-all duration-300" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={containerSlide} className="w-full md:w-1/2 space-y-6">
          <motion.h1
            variants={itemSlide}
            className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400"
          >
            About Me
          </motion.h1>

          <motion.p variants={itemSlide} className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            I'm a <strong className="text-gray-900 dark:text-white">four-year Software Engineering student</strong> at Sai Gon
            University, passionate about building scalable, high-performance distributed
            systems. With hands-on experience in full-stack development, microservices
            architecture, and cloud deployment, I'm steadily working toward becoming a
            skilled Full-Stack Engineer.
          </motion.p>

          {/* Info cards */}
          <motion.div variants={containerSlide} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <FaUser className="text-xl text-gray-700 dark:text-gray-300" />,        title: "Name",        content: "Nguyen Hong Duy" },
              { icon: <FaLocationDot className="text-xl text-gray-700 dark:text-gray-300" />, title: "Location",    content: "Ho Chi Minh City, Vietnam" },
              { icon: <FaEnvelope className="text-xl text-gray-700 dark:text-gray-300" />,    title: "Email",       content: "duynguyen19087@gmail.com" },
              { icon: <FaUniversity className="text-xl text-gray-700 dark:text-gray-300" />,  title: "Studying At", content: "Sai Gon University" },
              { icon: <FaPhone className="text-xl text-gray-700 dark:text-gray-300" />,       title: "Phone",       content: "0982 870 931" },
              { icon: <FaBriefcase className="text-xl text-gray-700 dark:text-gray-300" />,   title: "Profession",  content: "Student / Developer" },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemSlide}
                whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex items-center gap-3 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-transparent dark:border-gray-700"
              >
                {card.icon}
                <div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{card.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemSlide} className="flex gap-3 mt-8 flex-wrap">
            {/* Download CV */}
            <motion.a
              href="NguyenHongDuy.pdf"
              download="NguyenHongDuy_CV.pdf"
              variants={buttonAnim}
              whileHover="hover"
              whileTap="tap"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <FaDownload />
              Download My CV
            </motion.a>

            {/* See My CV — mở tab mới, chiếm toàn màn hình */}
            <motion.a
              href="NguyenHongDuy.pdf"
              target="_blank"
              rel="noreferrer"
              variants={buttonAnim}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              <FaEye />
              See My CV
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </RevealOnScroll>
  );
};

export default About;
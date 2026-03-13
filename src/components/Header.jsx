import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants, itemVariants, imageVariants } from "../animations/animations";
import img from "../assets/img/avata.jpg";

const Header = ({ dark, setDark }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = ["Full-Stack Engineer", "Backend Developer", "System Designer"];

  useEffect(() => {
    let ticker = setInterval(() => { tick(); }, typingSpeed);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) setTypingSpeed((prev) => prev / 2);
    if (!isDeleting && updatedText === fullText) { setIsDeleting(true); setTypingSpeed(150); }
    else if (isDeleting && updatedText === "") { setIsDeleting(false); setLoopNum(loopNum + 1); setTypingSpeed(150); }
  };

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  const tags = [
    { label: "Frontend",   className: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700" },
    { label: "Backend",    className: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-700" },
    { label: "Full-Stack", className: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600" },
  ];

  return (
    <div id="home" className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 mb-30 transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />

      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-20 md:pt-28 px-6 md:px-8 max-w-6xl mx-auto pb-16">

        <div className="md:w-1/2 p-4 md:p-8 space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
              Hi, I'm Nguyen Hong Duy
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-gray-700 dark:text-gray-300 font-medium">
              {text}<span className="border-r-2 border-gray-700 dark:border-gray-300 animate-pulse ml-1"></span>
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            Third-year Software Engineering student at Sai Gon University with a strong
            foundation in Java, JavaScript, and DevOps. Aiming to grow as a Full-Stack
            Engineer with a long-term goal of building scalable, high-performance distributed systems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-2 flex-wrap">
            {tags.map((t) => (
              <span key={t.label} className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${t.className}`}>{t.label}</span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <a href="https://github.com/ChimUng" target="_blank" rel="noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black shadow-lg font-medium text-sm rounded-full flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
              See My GitHub <FaArrowRight />
            </a>
            <a href="https://www.linkedin.com/in/hong-duy-8a2a6b368/" target="_blank" rel="noreferrer"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-600 shadow-lg font-medium text-sm rounded-full flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105 active:scale-95">
              Contact LinkedIn <FaArrowRight />
            </a>
          </motion.div>
        </div>

        <motion.div variants={imageVariants} className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <motion.div className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(#e5e7eb, #6b7280, #111827, #6b7280, #e5e7eb)" }}
              animate={{ rotate: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
            <div className="absolute inset-2 bg-gray-50 dark:bg-gray-800 rounded-full" />
            <motion.div className="relative p-2 w-full h-full" whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <img src={img} alt="Avatar" className="w-full h-full object-cover rounded-full shadow-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
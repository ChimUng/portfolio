import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import About from "./components/About";
import Experiment from "./components/Experiment";
import MyProject from "./components/Project";
import MySkill from "./components/Skill";
import MyContact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <AnimatePresence>
        {showIntro && <LoadingScreen onDone={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header dark={dark} setDark={setDark} />
          <About />
          <Experiment />
          <MyProject />
          <MySkill />
          <MyContact />
          <Footer dark={dark} setDark={setDark} />
          <GoToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;
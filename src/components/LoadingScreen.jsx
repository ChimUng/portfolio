import React, { useEffect } from "react";
import { motion } from "framer-motion";

function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "linear-gradient(135deg, #1a0000 0%, #000 50%, #3d0000 100%)"
      }}
    >
      {/* Grid bg — đỏ */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220,38,38,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,38,38,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Floating pixels — đỏ */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-sm"
            style={{
              background: "#dc2626",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 700,
            fontFamily: "'Courier New', monospace",
            letterSpacing: "2px",
            color: "#ef4444",
            textShadow:
              "0 0 5px #dc2626, 0 0 10px #dc2626, 0 0 15px #dc2626, 2px 2px 0 #7f1d1d"
          }}
        >
          Hi! 
        </motion.h1>

        <motion.div
          className="text-4xl md:text-6xl my-8"
          style={{ filter: "drop-shadow(0 0 10px #dc2626)" }}
          initial={{ rotate: -30, scale: 0, opacity: 0 }}
          animate={{ rotate: [0, -30, 0, -30, 0], scale: 1, opacity: 1 }}
          transition={{
            rotate: { duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 1 },
            scale: { duration: 0.8, delay: 1 },
            opacity: { duration: 0.5, delay: 1 }
          }}
        >
          👋
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative w-64 h-6 mx-auto mb-4 overflow-hidden"
          style={{
            background: "#1f0000",
            border: "2px solid #dc2626",
            boxShadow: "0 0 10px #dc2626"
          }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full"
            style={{ background: "linear-gradient(90deg, #dc2626, #ef4444)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5, ease: "linear" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{
            fontFamily: "'Courier New', monospace",
            color: "#fca5a5",
            textShadow: "0 0 5px #dc2626",
            letterSpacing: "1px",
            fontSize: "1rem",
            marginTop: "1rem"
          }}
        >
          &gt; INITIALIZING PORTFOLIO...
        </motion.p>
      </div>

      {/* Corner dots */}
      {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(
        (pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-3 h-3`}
            style={{ background: "#dc2626", boxShadow: "0 0 10px #dc2626" }}
          />
        )
      )}
    </motion.div>
  );
}

export default LoadingScreen;

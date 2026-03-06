import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      if (!isVisible) {
        setIsVisible(true);
        setAnimationClass("animate-slide-in-right");
      }
    } else {
      if (isVisible) {
        setAnimationClass("animate-slide-out-right");
        setTimeout(() => {
          setIsVisible(false);
          setAnimationClass("");
        }, 300);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible]);

  return (
    <section className="gototop">
      {isVisible && (
        <div
          className={`top-btn ${animationClass}`}
          onClick={goToBtn}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 999,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#111827",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            fontSize: "1.2rem",
            border: "none",
            transition: "all 0.2s"
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default GoToTop;

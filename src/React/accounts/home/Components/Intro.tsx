import React, { useEffect } from "react";

export const Intro: React.FC = () => {
  useEffect(() => {
    const background = document.querySelector(
      ".background-image"
    ) as HTMLDivElement;

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      background.style.transform = `translateY(${scrollValue * 0.5}px)`; // Adjust the speed of the parallax effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="intro-container">
      <div className="background-image"></div>
      <div className="intro-text">
        <h1>ALGOSTRUCTURESSSS</h1>
        <br />
        <h2>Algorithms & Data Structures</h2>
      </div>
    </div>
  );
};

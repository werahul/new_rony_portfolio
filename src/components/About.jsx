import React, { useEffect, useRef } from "react";
import { wink } from "../assets/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { opacity: 0, y: 10 }, // start with slight offset below
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03, // quicker stagger for smooth reveal
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // start earlier for smoother experience
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`char inline-block ${char === " " ? "whitespace" : ""}`}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="lg:py-10 px-5 max-container">
      <div className="text-white text-4xl"> </div>
      <div className="lg:flex items-start space-x-10 ">
        <div
          className="lg:w-[60%] text-left text-3xl font-ubuntu font-medium text-white leading-10 opacity-75"
          ref={textRef}
        >
          {splitText(
            "Namaste I'm Rahul Kumar a full-stack web developer specializing in ReactJS and NodeJs. With a Bachelor's degree in Computer Science, I bring a strong passion for crafting modern, responsive websites to every project. At a digital marketing agency, I thrive on delivering high-quality solutions with dedication and professionalism. Let's create something extraordinary together."
          )}
        </div>
        <div className="lg:w-[40%] lg:-mt-10">
          <img src={wink} alt="" className="opacity-60 max-w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default About;

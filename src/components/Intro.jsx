import React, { useEffect, useRef } from "react";
import { mycom, wave, downloadArrow } from "../assets/images";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const chars = gsap.utils.toArray(".reveal-char");

    gsap.fromTo(
      chars,
      { opacity: 0 }, // start with opacity 0
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="reveal-char">
        {char}
      </span>
    ));
  };

  return (
    <div className="mt-5 py-20 mb-20 max-container">
      <div
        ref={textRef}
        className="font-bold font-kanit text-white text-[10rem] leading-[.9]"
      >
        <div className="flex items-center">
          <p className="opacity-50">{splitText("I'm Rahul,")}</p>
          <img src={wave} alt="" className="w-[200px] opacity-40" />
        </div>
        <p className="opacity-50">{splitText("Web Developer")}</p>
      </div>
      <div className="mt-10 flex items-center space-x-4">
        <a href="mailto:rahuldev.kb@gmail.com">
          <button className="bg-opacity-90 hover:bg-opacity-100 border border-[#275EFE] bg-[#03a9f4] hover:border-[#fff] text-white text-[20px] px-7 py-2 rounded-[27px] font-kanit transition-all opacity-90">
            Hire Me
          </button>
        </a>
        <a href="https://drive.google.com/uc?export=download&id=1rKc4a2yd7W3vPwPWewLN1lHytu9lgk0S">
          <button className="bg-black bg-opacity-70 hover:bg-opacity-100 border flex items-center hover:border-[#275EFE] border-[#fff] text-white text-[20px] px-7 py-2 rounded-[27px] font-kanit transition-all opacity-90">
            Download CV <img src={downloadArrow} alt="" className="w-7 ml-3" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;

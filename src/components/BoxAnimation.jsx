import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { pro1, pro2, pro3 ,pro4, pro5, pro10, pro11 ,pro6, pro7, pro8, pro9 } from "../assets/images";

const BoxAnimation = () => {
  const imageRef = useRef([]);
  const imageContainerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1,
        end: "+=" + imageContainerRef.current.offsetWidth,
        pin: true,
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const images = [
    { src: pro1, color: "border-purple-500", link: "https://rony-cyber.netlify.app/" },
    { src: pro2, color: "border-red-500", link: "https://aartech-core.netlify.app/" },
    { src: pro3, color: "border-blue-500", link: "https://whatsapp-marketing.melangedigital.in/" },
    { src: pro4, color: "border-orange-500", link: "https://app.genvrresearch.com/" },
    { src: pro5, color: "border-purple-500", link: "https://melangedigital.in/" },
    { src: pro6, color: "border-red-500", link: "https://aartech-solar.netlify.app/" },
    { src: pro7, color: "border-blue-500", link: "https://ac-agarwal.netlify.app/" },
    { src: pro8, color: "border-orange-500", link: "https://video-production.melangedigital.in/" },
    { src: pro9, color: "border-purple-500", link: "https://www.devboost.co" },
    { src: pro10, color: "border-red-500", link: "https://event-ashutosh.netlify.app/" },
    { src: pro11, color: "border-blue-500", link: "https://neotrader.in/" },
  ];

  return (
    <div className="px-20 py-20 text-white min-w-screen overflow-hidden">
      <p className="text-5xl font-bold tracking-wider mb-6">Projects</p>
      <div ref={imageContainerRef}>
        <div className="flex flex-nowrap space-x-10">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRef.current[index] = el)}
              className={`proboxes min-w-[500px] h-[300px] flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold ${image.color} border-2 rounded-2xl p-0 relative`}
            >
              <img src={image.src} alt="" className="w-[500px] rounded-2xl h-full object-cover" />

              <div className="absolute bottom-3 left-3">
                    <a href={image.link} target="_blank" class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded-[15px] hover:bg-white group">
                        <span class="w-[150px] h-[100px] rounded-lg rotate-[-80deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-[16px] text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Preview</span>
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;

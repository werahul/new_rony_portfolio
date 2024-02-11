import React from "react";
import { pro1, pro2, pro3, pro4} from "../assets/images";
import { FaGithubAlt } from "react-icons/fa6";

const ProjectCard = () => (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5 mt-20">
        <div className=" card-body  flex justify-center items-center">
            <img src={pro1} alt="" className=" object-cover rounded-[30px]" />
            <div className="  card-box">
                <p className=" text-white text-2xl">
                    I've built my portfolio website using ReactJS with a clean design styled using Tailwind CSS. I've
                    integrated Nodemailer for form submissions,
                    It is responsive for mobile users also, and has a hamburger menu in mobile phones</p>

                <div className="mt-10 flex justify-between items-center">
                    <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-2xl hover:bg-white group">
                        <span class="w-48 h-48 rounded-lg rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Preview</span>
                    </a>

                    <button className="rounded-2xl border-2 border-white px-6 py-2 flex justify-center items-center text-white transition-all hover:bg-[#03a9f4] space-x-2">
                        <FaGithubAlt size={30} color="#fff" /> <span>source code</span>
                    </button>
                </div>


            </div>
        </div>
        <div className="  card-body  flex justify-center items-center">
            <img src={pro2} alt="" className=" object-cover rounded-[30px]" />
            <div className="  card-box">
                <p className=" text-black text-2xl">
                    Developed a client’s website consisting of 40+ pages having different complex functionalities including integration
                    of Indian Market Stock Exchange data using Google Sheets data APIs through Google Cloud Console</p>

                <div className="mt-10 flex justify-between items-center">
                    <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-2xl hover:bg-white group">
                        <span class="w-48 h-48 rounded-lg rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Preview</span>
                    </a>

                    <button className="rounded-2xl border-2 border-black px-6 py-2 flex justify-center items-center text-black transition-all hover:bg-[#03a9f4] space-x-2">
                        <FaGithubAlt size={30} color="#000000" /> <span>source code</span>
                    </button>
                </div>


            </div>
        </div>
        <div className="  card-body  flex justify-center items-center">
            <img src={pro3} alt="" className=" object-cover rounded-[30px]" />
            <div className="  card-box">
                <p className=" text-black text-2xl">
                Developed a WhatsApp landing page with React and Tailwind CSS, incorporating EmailJS for seamless email communication, complete with robust email validation.</p>

                <div className="mt-10 flex justify-between items-center">
                    <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-2xl hover:bg-white group">
                        <span class="w-48 h-48 rounded-lg rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Preview</span>
                    </a>

                    <button className="rounded-2xl border-2 border-black px-6 py-2 flex justify-center items-center text-black transition-all hover:bg-[#03a9f4] space-x-2">
                        <FaGithubAlt size={30} color="#000000" /> <span>source code</span>
                    </button>
                </div>


            </div>
        </div>
        <div className="  card-body  flex justify-center items-center">
            <img src={pro4} alt="" className=" object-cover rounded-[30px]" />
            <div className="  card-box">
                <p className=" text-black text-2xl">
                Developed a WhatsApp landing page with React and Tailwind CSS, incorporating EmailJS for seamless email communication, complete with robust email validation.</p>

                <div className="mt-10 flex justify-between items-center">
                    <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-2xl hover:bg-white group">
                        <span class="w-48 h-48 rounded-lg rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Preview</span>
                    </a>

                    <button className="rounded-2xl border-2 border-black px-6 py-2 flex justify-center items-center text-black transition-all hover:bg-[#03a9f4] space-x-2">
                        <FaGithubAlt size={30} color="#000000" /> <span>source code</span>
                    </button>
                </div>


            </div>
        </div>
    </div>
);

export default ProjectCard;

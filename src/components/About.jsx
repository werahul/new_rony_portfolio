import React, { useEffect, useRef } from 'react';
import { gifAbout } from '../assets/images';

const About = () => {
    

    return (
        <div className='lg:flex items-start space-x-10 lg:px-20 px-5'>
            <div className='lg:w-[50%] text-justify text-3xl font-kanit font-medium text-white leading-10 opacity-1'>
            Welcome to my portfolio! I'm <span className='underline'>Rahul Singh</span>  also known as Rony, a full-stack web developer specializing in ReactJS. With a Bachelor's degree in Computer Science, I bring a strong passion for crafting modern, responsive websites to every project. At a digital marketing agency, I thrive on delivering high-quality solutions with dedication and professionalism. Let's create something extraordinary together
            </div>
            <div className="lg:w-[50%]">
                <img src={gifAbout} alt="" />
            </div>
        </div>
    );
}

export default About;

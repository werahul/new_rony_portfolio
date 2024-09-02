import React, { useState, useEffect } from 'react';
import { avtar1, avtar2, avtar3 } from '../assets/images';


const Testimonial = () => {
    const [currentDiv, setCurrentDiv] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDiv(prevDiv => (prevDiv + 1) % 4); // Cycle through 0, 1, 2
        }, 5000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []); // Run once on component mount

    const testimonialData = [
        {
            avatar: avtar1,
            text: "Working with Rahul Singh has been a game-changer. His mastery of ReactJS and responsive design elevates every project we tackle. Rahul's attention to detail and problem-solving skills ensure top-notch results. He's not just a web developer; he's a visionary. It's a privilege to collaborate with him.",
            name: 'Ayush Chauhan',
            role: 'Full Stack Developer'
        },
        {
            avatar: avtar2,
            text: "Rahul Singh's dedication to crafting exceptional digital experiences is remarkable. His expertise in web development consistently delivers outstanding results. Collaborating with him has been an honor",
            name: 'Tushar Verma',
            role: 'Motion Graphic Designer'
        },
        {
            avatar: avtar3,
            text: "Collaborating with Rahul Singh has been a pleasure. His passion for web development and attention to detail shine through in every project. Rahul's ability to understand client needs and bring creative solutions makes him a valuable asset. He's more than a web developer",
            name: 'Twinkle Khandelwal',
            role: 'UI/UX Designer'
        },
        {
            avatar: avtar3,
            text: "Working closely with Rahul Singh has been a rewarding experience. His dedication to web development and meticulous attention to detail consistently impress. He's knack for understanding project requirements and offering innovative solutions.",
            name: 'Aditi Rathi',
            role: 'Product Manager'
        }
    ];

    const TestimonialItem = ({ avatar, text, name, role }) => {
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className="w-32 h-32 rounded-[50%] border border-white">
                    <img src={avatar} alt="" className='w-40' />
                </div>

                <p className='mt-4 w-[700px] text-center text-xl font-medium font-ubuntu'>{text}</p>

                <p className='font-bold text-xl font-ubuntu mt-5 tracking-wider'>{name}</p>
                <p className='font-bold text-base font-ubuntu mt-1'>{role}</p>
            </div>
        );
    };

    return (
        <div className='flex items-center justify-center mt-20'>
            {testimonialData.map((testimonial, index) => (
                <div key={index} className={`testimonial-item ${index === currentDiv ? 'active' : ''}`}>
                    <div className="min-w-[1200px] h-[400px] bg-[#3f93f3] rounded-[30px] py-10 ">
                        <TestimonialItem {...testimonial} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;

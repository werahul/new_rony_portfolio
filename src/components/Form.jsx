import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactGif, thankyou } from '../assets/images'
import { FaWindowClose } from "react-icons/fa";

const Form = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Fetch values from the form
        const formData = {
            name: event.target.name.value,
            mobile: event.target.mobile.value,
            email: event.target.email.value,
            message: event.target.textarea.value
        };

        // Your EmailJS service ID, template ID, and user ID
        const serviceID = 'service_48mpzv6';
        const templateID = 'template_6grlwjy';
        const userID = 'i-bq1jWp2Cvy28Lgs';

        // Send email using EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                setShowPopup(true);;
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });

        // Clear the form after submission
        event.target.reset();
    };
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className=" pb-20  relative flex lg:flex-row-reverse flex-col-reverse lg:items-start mt-20 max-container">
            <div className="form-container z-40">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input required name="name" id="name" type="text" />
                        <label htmlFor="mobile">Contact No.</label>
                        <input required name="mobile" id="mobile" type="tel" />
                        <label htmlFor="email">Email Id</label>
                        <input required name="email" id="email" type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Connect with Ideas...</label>
                        <textarea
                            required
                            id="textarea"
                            name="textarea"
                            defaultValue={""}
                        />
                    </div>
                    <button type="submit" className="form-submit-btn">
                        Let Goooo!
                    </button>
                </form>
            </div>
            {showPopup && (
                <div className="popup absolute top-1 lg:left-[0%] z-50 bg-[#641f6d] rounded-[50px]">
                    <div className=" relative popup-content flex flex-col text-center items-center justify-center px-10 lg:w-[600px] h-[500px] border rounded-[50px] text-white font-ubuntu text-xl">

                        <img src={thankyou} alt="Thank You" className="thank-you-image lg:w-[400px]" />
                        <p >Thank you for submitting! <br /> I will connect with you shortly.</p>
                        <div className="absolute right-5 top-5">
                            <FaWindowClose size={40} color='f32013' onClick={handleClosePopup} />
                        </div>
                    </div>
                </div>
            )}
            <div className="z-40">
                <div class="card-contact">

                    <div class="title">Contact Me :)</div>
                    <div class="icons-container">
                        <a href="https://www.instagram.com/wehaverony" target='_blank'>
                            <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="svg">
                                <rect ry="5" rx="5" y="2" x="2" height="20" width="20"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line y2="6.5" y1="6.5" x2="17.51" x1="17.5"></line>
                            </svg>
                        </a>
                        <a href="https://x.com/kb_rahuldev" target='_blank'>
                            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="svg twitter">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/werahul" target='_blank'>
                            <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="svg">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="box box3">
                        <div class="content">
                            <span class="box-title">Web Developer</span>
                        </div>
                    </div>
                    <div class="box box2">
                        <div class="content">
                            <span class="box-title">Problem Solver</span>

                        </div>
                    </div>
                    <div class="box box1">
                        <div class="content">
                            <span class="box-title">Cyber Security</span>
                        </div>
                    </div>
                </div>
            </div>

            <p className='lg:block hidden zoomTextOnScroll text-[15rem] z-10 text-zinc-500 font-ubuntu font-bold absolute top-0 left-[10%] opacity-5'>CONTACT</p>


        </div>
    );
};

export default Form;

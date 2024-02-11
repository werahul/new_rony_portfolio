import React, { useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { GrInstagram } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { IoMdMailUnread } from 'react-icons/io';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="">
            <div className="relative">

                <div className="flex items-center justify-between  lg:px-20 px-5 z-50">
                    <div className="loader">
                        <span></span>
                    </div>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={80} />
                </div>
                <div
                    className={`w-full h-[100vh] bg-[#03a9f4] absolute top-0 z-10 mainNav ${isOpen ? 'navOpen' : 'navClosed'
                        }`}
                >
                    <div className="flex items-end justify-end lg:px-20 px-5 pt-16 ">
                        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={80} />
                    </div>
                    <div className="lg:px-40 px-5 mt-0 lg:flex justify-between items-end">
                        <div className="text-5xl text-white font-extrabold transition-all space-y-8 flex flex-col items-start uppercase font-pt textshadow tracking-widest">
                            <div className="hover:text-zinc-400 cursor-pointer hover:line-through ease-in-out duration-500">
                                About
                            </div>
                            <div className="hover:text-zinc-400 cursor-pointer hover:line-through ease-in-out duration-500">
                                Project
                            </div>

                            <div className="hover:text-zinc-400 cursor-pointer hover:line-through ease-in-out duration-500">
                                Service
                            </div>
                            <div className="hover:text-zinc-400 cursor-pointer hover:line-through ease-in-out duration-500">
                                Blog
                            </div>
                            <div className="hover:text-zinc-400 cursor-pointer hover:line-through ease-in-out duration-500">
                                Contact
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <GrInstagram size={30} color="#fff" className="cursor-pointer hover:opacity-40" />
                            <BsFacebook size={30} color="#fff" className="cursor-pointer hover:opacity-40" />
                            <SiGithub size={30} color="#fff" className="cursor-pointer hover:opacity-40" />
                            <IoMdMailUnread size={30} color="#fff" className="cursor-pointer hover:opacity-40" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;

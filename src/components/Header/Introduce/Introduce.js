import React from 'react';
import Typewriter from './Typewriter';
import nxn from '~/assets/image/nxn.jpg';
import mycv from '~/assets/file/MyCV_NgoXuanNam_FrontEnd.pdf';
export default function Introduce() {
    return (
        <div className="introduce flex justify-center items-center text-[var(--text-white)] p-16">
            <div className="introduce__wrapper flex items-center w-[80%] ">
                <div className="introduce__infor w-[80%] text-center mr-[10rem]">
                    <h3 className="text-[5rem] leading-[8rem]">
                        Hi! My name's <span className="text-[var(--text-blue)]">Xuan Nam</span>
                    </h3>
                    <div className="typewriter text-[2.5rem] flex items-center h-[3rem]">
                        <Typewriter />
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <h4 className="typingAnimate text-[2.5rem] leading-[4rem]">
                            I'm a fresher front-end Developer
                        </h4>
                    </div> */}
                    <p className="text-[3rem] leading-[6rem]">I love learning about front-end technology</p>
                    <a href={mycv} download className="download-btn block mt-6 p-8">
                        <button className="pt-3 pb-3 pl-10 pr-10 bg-slate-600 text-[2rem] rounded-[15px] hover:tracking-widest font-medium transition-all ease-linear duration-300">
                            Download CV
                        </button>
                    </a>
                </div>
                <div className="introduce__img w-[40%]">
                    <div className="w-full p-6 border border-[var(--boder-color)] rounded-full border-r-0 border-l-0 border-t-0">
                        <img
                            src={nxn}
                            alt="avatar"
                            className="w-[100%] h-auto rounded-full hover:scale-110 transition ease-linear duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

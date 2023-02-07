import React from 'react';
import portfolio from '~/assets/image/portfolio.png';

export default function Portfolio() {
    return (
        <div className="portfolio__content reveal flex justify-center items-center w-[80%] min-h-[120px] bg-[#777373] ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[15px] mb-12">
            <div className="portfolio__content-box flex gap-[1.5rem] justify-center items-center">
                <div className="portfolio__content-img w-[50%]">
                    <img src={portfolio} alt="img demo" className="w-[100%]" />
                </div>
                <div className="portfolio__content-desc w-[50%]">
                    <h2 className="text-[4.5rem] text-[#601d1d] font-medium">My Portfolio</h2>
                    <h4 className="text-[2.5rem] font-medium">
                        Some information about me and projects was built by me
                    </h4>
                    <p>- ReactJS/ TailwindCSS</p>
                    <p>- Style Responsive</p>
                    <a href="https://my-infor.vercel.app/" className="p-4 text-center float-right " target={'_blank'}>
                        <button className="pl-3 pr-3 bg-slate-200 rounded-2xl transition-all ease-linear duration-300">
                            Live Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

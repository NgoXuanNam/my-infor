import React from 'react';
import musicplayer from '~/assets/image/music.png';
export default function MusicPlayer() {
    return (
        <div className="musicplayer__content reveal flex justify-center items-center w-[80%]  bg-[#777373] ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[15px] mb-12">
            <div className="musicplayer__content-box flex gap-[1.5rem] justify-center items-center">
                <div className="musicplayer__content-desc w-[50%]">
                    <h2 className="text-[4.5rem] text-[#601d1d] font-medium">Music player</h2>
                    <h4 className="text-[3rem] font-medium">Music player</h4>
                    <p>- ReactJS</p>
                    <p>- Style Responsive, Tailwindcss, SCSS</p>
                    <a
                        href="https://music-player-nine-ochre.vercel.app/"
                        className="p-4 text-center float-left"
                        target={'_blank'}
                    >
                        <button className="pl-3 pr-3 bg-slate-200 rounded-2xl transition-all ease-linear duration-300">
                            Live Demo
                        </button>
                    </a>
                </div>
                <div className="musicplayer__content-img w-[50%]">
                    <img src={musicplayer} alt="img demo" className="w-[100%]" />
                </div>
            </div>
        </div>
    );
}

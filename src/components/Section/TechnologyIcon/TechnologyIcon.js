import React from 'react';
import html from '~/assets/image/html.png';
import css from '~/assets/image/css.png';
import js from '~/assets/image/js.jpg';
import reactjs from '~/assets/image/reactjs.jpg';
import tailwindcss from '~/assets/image/tailwindcss.png';
import bootstrap from '~/assets/image/bootstrap.png';
import github from '~/assets/image/github.png';
import vercel from '~/assets/image/vercel.png';

export default function TechnologyIcon() {
    return (
        <div className="technologyicon reveal w-[80%] ml-auto mr-auto ">
            <div className="technologyicon__img-list w-full">
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">HTML</div>
                    <img src={html} alt="html" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">CSS</div>

                    <img src={css} alt="css" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">JavaScript</div>

                    <img src={js} alt="html" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">ReactJS</div>

                    <img src={reactjs} alt="reactjs" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">Tailwind</div>

                    <img src={tailwindcss} alt="tailwindcss" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">Bootstrap</div>

                    <img src={bootstrap} alt="bootstrap" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">Git</div>

                    <img src={github} alt="git" />
                </div>
                <div className="technologyicon__img-list-item">
                    <div className="technologyicon__img-note">Vercel</div>

                    <img src={vercel} alt="vercel" />
                </div>
            </div>
        </div>
    );
}

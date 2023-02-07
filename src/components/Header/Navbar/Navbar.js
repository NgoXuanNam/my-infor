import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Theme from './Theme';
export default function Navbar() {
    const onScroll = (id) => {
        document.getElementById(id).scrollIntoView();
    };

    return (
        <div className="navbar fixed w-full z-100 p-10  bg-[var(--background-navbar)] border-b border-white ">
            <div className="navbar-box flex justify-between items-center ml-[7rem] ">
                <a href="/" className="navbar-logo text-[4rem] font-medium uppercase text-[var(--text-white-local)]">
                    Xuannam
                </a>
                <input type="checkbox" id="active" className="navbar_menu-icon hidden " />

                <div className="navbar__menu-list flex justify-center items-center text-[3rem]">
                    <label
                        htmlFor="active"
                        className="navbar__menu-close cursor-pointer text-[var(--text-white-local)] text-[3rem]"
                    >
                        <FontAwesomeIcon icon={faPlus} className="  hidden show-on-mobile" />
                    </label>
                    <div className="navbar__menu-box flex items-center">
                        <div className="navbar__menu-item  uppercase text-[var(--text-white-local)] font-medium cursor-pointer">
                            <button onClick={() => onScroll('home')}>Home</button>
                            <div className="line"></div>
                        </div>
                        <div className="navbar__menu-item  uppercase text-[var(--text-white-local)] font-medium cursor-pointer">
                            <button onClick={() => onScroll('about')}>About me</button>
                            <div className="line"></div>
                        </div>

                        <div className="navbar__menu-item  uppercase text-[var(--text-white-local)] font-medium cursor-pointer">
                            <button onClick={() => onScroll('skills')}>Skills</button>
                            <div className="line"></div>
                        </div>
                        <div className="navbar__menu-item  uppercase text-[var(--text-white-local)] font-medium cursor-pointer">
                            <button onClick={() => onScroll('projects')}>Projects</button>
                            <div className="line"></div>
                        </div>
                    </div>
                    <Theme />
                </div>
                <label
                    htmlFor="active"
                    className="overlay absolute w-full h-[100vh] top-0 left-0 bottom-0 right-0 bg-[#00000072] hidden"
                ></label>

                <label htmlFor="active" className="navbar__menu-icon p-5 cursor-pointer hidden show-on-mobile">
                    <i className="fa fa-bars text-[var(--text-white-local)] text-[3rem]"></i>
                </label>
            </div>
        </div>
    );
}

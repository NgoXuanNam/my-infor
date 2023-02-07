import React from 'react';

export default function Theme() {
    const body = document.querySelector('body');
    function init() {
        let mode = localStorage.getItem('mode');
        body.setAttribute('class', mode);
    }
    init();

    function handleTheme() {
        body.classList.toggle('light');

        let mode = body.getAttribute('class');
        localStorage.setItem('mode', mode);
    }

    return (
        <div className="wrap-theme w-[40px] h-[20px] bg-[#fff] rounded-[999px] ml-[2rem] cursor-pointer">
            <input type={'checkbox'} id="switch" className="switch-theme" hidden />
            <label
                htmlFor="switch"
                onClick={handleTheme}
                className=" block w-[20px]  h-[20px] bg-[#bbb] rounded-2xl cursor-pointer"
            ></label>
        </div>
    );
}

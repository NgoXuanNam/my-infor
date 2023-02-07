import React from 'react';
import envato from '~/assets/image/envatomarket.png';

export default function EnvatoMarket() {
    return (
        <div className="EnvatoMarket__content reveal flex justify-center items-center w-[80%] min-h-[120px] bg-[#777373] ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[15px] mb-12">
            <div className="EnvatoMarket__content-box flex gap-[1.5rem] justify-center items-center">
                <div className="EnvatoMarket__content-img w-[50%]">
                    <img src={envato} alt="img demo" className="w-[100%]" />
                </div>
                <div className="EnvatoMarket__content-desc w-[50%]">
                    <h2 className="text-[4.5rem] text-[#601d1d] font-medium">Envato Market</h2>
                    <h4 className="text-[2.5rem] font-medium">Clone the website on the Envato market</h4>
                    <p>- HTML/CSS/Javascript</p>
                    <p>- Style Responsive</p>
                    <a
                        href="https://web-shopify.vercel.app/"
                        className="p-4 text-center float-right "
                        target={'_blank'}
                    >
                        <button className="pl-3 pr-3 bg-slate-200 rounded-2xl transition-all ease-linear duration-300">
                            Live Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import CoffeeShop from './CoffeeShop';
import Portfolio from './Portfolio';
import MusicPlayer from './MusicPlayer';
import EnvatoMarket from './EnvatoMarket';
export default function Projects() {
    return (
        <div id="projects" className="text-center mb-16 pt-[var(--height-header)]">
            <div className="projects__title mb-12">
                <h3 className="text-[4.5rem] font-semibold text-[var(--text-white-local)]">My Projects</h3>
                <div className="h-[4px] w-[200px] bg-[var(--text-white-local)] ml-auto mr-auto rounded-xl"></div>
            </div>

            <Portfolio />
            <CoffeeShop />
            <EnvatoMarket />
            <MusicPlayer />
        </div>
    );
}

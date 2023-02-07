import React from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import TechnologyIcon from './TechnologyIcon/TechnologyIcon';

export default function Section() {
    return (
        <div className="section pb-8">
            <div className="section__box w-[80%] min-h-[80px] ml-auto mr-auto">
                <About />
                <Skills />
                <TechnologyIcon />
                <Projects />
            </div>
        </div>
    );
}

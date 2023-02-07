import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
export default function Typewriter() {
    const [paragraph] = useTypewriter({
        words: [`I'm a fresher front-end Developer`],
        loop: Infinity,
    });

    return (
        <div className="typewriter-text">
            <span>{paragraph}</span>
        </div>
    );
}

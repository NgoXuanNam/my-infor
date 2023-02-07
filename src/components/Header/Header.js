import React from 'react';
import Introduce from './Introduce/Introduce';
import Navbar from './Navbar/Navbar';

export default function Header() {
    return (
        <div className="header" id="home">
            <Navbar />
            <hr />
            <Introduce />
        </div>
    );
}

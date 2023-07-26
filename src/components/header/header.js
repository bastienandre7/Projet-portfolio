import React from 'react';
import './header.css';

function Header() {
    return (
        <header id='header'>
            <div className='container-title-header'>
                <h1 className='header-title'>Bastien <br /> ANDRE</h1>
                <h2>Intégrateur Web.</h2>
            </div>
            <div className="parent">
                <div className="child1"></div>
                <div className="child1 child2"></div>
            </div>
        </header>
    )
}

export default Header
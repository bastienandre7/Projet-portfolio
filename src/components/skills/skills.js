import React from 'react';
import './skills.css';

function Skills() {
    return (
        <div id='skills' className='skills-container'>
            <h2 className='h2-title'>Mes Compétences</h2>
            <h3>Front-End</h3>
            <div className='skills'>
                <div>
                    <i className="fa-brands fa-html5 fa-5x logo-html"></i>
                    <h4 className='logo-title'>HTML5</h4>
                </div>
                <div>
                    <i className="fa-brands fa-css3-alt fa-5x logo-css"></i>
                    <h4 className='logo-title'>CSS3</h4>
                </div>
                <div>
                    <i className="fa-brands fa-js fa-5x logo-js"></i>
                    <h4 className='logo-title'>JavaScript</h4>
                </div>
                <div>
                    <i className="fa-brands fa-react fa-5x logo-react"></i>
                    <h4 className='logo-title'>React.js</h4>
                </div>
            </div>
            <h3>Et j'utilise aussi</h3>
            <div className='skills'>
                <div>
                    <i className="fa-brands fa-git-alt fa-5x logo-git"></i>
                    <h4 className='logo-title'>Git</h4>
                </div>
                <div>
                    <i className="fa-brands fa-github fa-5x logo-github"></i>
                    <h4 className='logo-title'>GitHub</h4>
                </div>
                <div>
                    <i className="fa-brands fa-node fa-5x logo-node"></i>
                    <h4 className='logo-title'>Node.js</h4>
                </div>
                <div>
                    <i className="fa-solid fa-font-awesome fa-5x logo-fa"></i>
                    <h4 className='logo-title'>Font Awesome</h4>
                </div>
            </div>
        </div>
    )
}

export default Skills
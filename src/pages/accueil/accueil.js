import React from 'react';
import './accueil.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import Navigation from '../../components/navigation/navigation';
import Skills from '../../components/skills/skills';
import Projects from '../../components/projects/projects';
import Formations from '../../components/formations/formations';


function Accueil() {
    return (
        <div id='home'>
            <Header />
            <main>
                <Navigation />
                <Skills />
                <Projects />
                <Formations />
            </main>
            <Footer />
        </div>
    )
}

export default Accueil
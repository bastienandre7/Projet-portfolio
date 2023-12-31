import React, { useEffect} from 'react';
import './navigation.css';

function Navigation() {

    useEffect(() => {
        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        function myFunction() {
            if (window.scrollY >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    })

    return (
        <div id="navbar">
            <a href="#home">Accueil</a>
            <a href="#skills" id='competences'>Compétences</a>
            <a href="#projets" id='projets'>Projets</a>
            <a href="#formations" id='formations'>Formations</a>
            <a href="#footer">Contact</a>
            <a href="https://github.com/bastienandre7">GitHub <i className="fa-brands fa-github"></i></a>
        </div>
    )
}

export default Navigation
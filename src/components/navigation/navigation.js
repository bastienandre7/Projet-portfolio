import React, { useEffect} from 'react';
import './navigation.css';

function Navigation() {
    // When the user scrolls the page, execute myFunction

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

    // Get the navbar

    // Get the offset position of the navbar
    // var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    
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
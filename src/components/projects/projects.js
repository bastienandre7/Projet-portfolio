import React from 'react';
import './projects.css';
import Projet from '../../components/projet/projet';

function Projects() {

    const dataProjet = [
        {
            "image" : require("../../assets/images/booki1.png"),
            "title" : "Booki",
            "description" : "Page d'accueil de l'agence de voyage Booki",
            "gitHub" : "https://github.com/bastienandre7/Projet-4-OC",
            "contexte" : "Créez la page d'accueil de l'agence de voyage Booki avec HTML & CSS",
            "descriptionLongue" : "Ce projet était l'un de mes premiers, il était assez simple mais j'ai pris beacoup de plaisir à le réaliser. Il fallait réaliser une navigation fonctionelle ainsi qu'une barre de recherche. Le site est aussi composé d'une section pour filtrer les recherches ainsi que de trois grandes sections, Hébergements, Les plus populaires et Activités. A l'intérieur de ces sections on retrouve différents type de carte d'affichage. Enfin en bas de page se trouve un footer basique avec toutes les informations consernant l'agence. Le site est aussi responsive.",
            "competences" : "HTML, CSS"
        },
        {
            "image" : require("../../assets/images/kasa1.png"),
            "title" : "Kasa",
            "description" : "Application web de location immobilière Kasa",
            "gitHub" : "https://github.com/bastienandre7/Projet-8-OC",
            "contexte" : "Créez l'application web de location immobilière Kasa avec React",
            "descriptionLongue" : "Ce projet était mon premier projet React.js, et son utilisation m'a directement plu. Le site est donc composé de quatre parties, une page d'accueil, une page A propos, une page par logement et une page d'erreur. Le plus compliqué a été de coder la page de logement car elle devait être entièrement dynamique pour gérer chaque logement. Cette partie contient aussi un carrousel avec toutes les images de chaque logement. Le site est aussi responsive.",
            "competences" : "HTML, CSS, JavaScript, React.js"
        }
    ];
    return (
        <div className='projet-container' id='projets'>
            <h2 className='h2-title'>Mes Projets</h2>
            <Projet imageOne={dataProjet[0].image} title={dataProjet[0].title}
            description={dataProjet[0].description} gitHub={dataProjet[0].gitHub}
            contexte={dataProjet[0].contexte} descriptionLongue={dataProjet[0].descriptionLongue} competences={dataProjet[0].competences} />
            <Projet imageOne={dataProjet[1].image} title={dataProjet[1].title} 
            description={dataProjet[1].description} gitHub={dataProjet[1].gitHub}
            contexte={dataProjet[1].contexte} descriptionLongue={dataProjet[1].descriptionLongue} competences={dataProjet[1].competences}    />
        </div>
    )
}

export default Projects
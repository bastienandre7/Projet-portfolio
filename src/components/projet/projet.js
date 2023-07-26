import React from 'react';
import './projet.css';
import { useState } from 'react';

const Projet = (props) => {
    
    const [display, setDisplay] = useState(false);


    return (
        <div className='projet'>
            <img src={props.imageOne} alt={props.title}  className={display === false  ? "image-projet" : 'image-projet'}/>
            <div className='info-projet'>
                <div className={display === false  ? "" : 'none'}>
                    <h3 className='title-info-projet'>{props.title}</h3>
                    <p className='description-info-projet'>{props.description}</p>
                    <div className='liens-projets'>
                        <a href={props.gitHub} className='lien-info-projet'>GitHub <i className="fa-brands fa-github"></i></a>
                        <button className='lien-info-projet' onClick={() => setDisplay(!display)}>Plus d'informations</button>
                    </div>
                </div>
                <div className={display === false  ? 'none' : 'info-click'}>
                    <button className='lien-info-projet' onClick={() => setDisplay(!display)}>Fermer</button>
                    <div>
                        <h4 className='title-info'>Contexte</h4>
                        <p className='txt-info'>{props.contexte}</p>
                    </div>
                    <div>
                        <h4 className='title-info'>Description</h4>
                        <p className='txt-info'>{props.descriptionLongue}</p>
                    </div>
                    <div>
                        <h4>Compétences</h4>
                        <p>{props.competences}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projet
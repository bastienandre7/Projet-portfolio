import React from 'react';
import './footer.css';

function Footer() {

    const copy = () => {
        const email = "bastienandre07@gmail.com";
        navigator.clipboard.writeText(email);
        alert('Copié !');
    }

    return (
        <footer id='footer'>
            <div className='footer-container'>
                <h2 className='title-contact'>Me contacter :</h2>
                <span className='email-contact'><span id="email">bastienandre07@gmail.com </span><a onClick={copy} className="fa-sharp fa-regular fa-copy copy"></a></span>
                <h3>Ou directement :</h3>
                <a className='mailto' href="mailto:bastienandre07@gmail.com">Envoyer un Email</a>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react';
import './formations.css'

function Formations() {
    return (
        <div id='formations' className='formations-container'>
            <h2 className='h2-title'>Mes Formations</h2>
            <div className='display-formation'>
                <div className='container-formation'>
                    <h3 className='title-f'>Baccalauréat Général</h3>
                    <p>Mention assez bien</p>
                    <h4>2019-2021</h4>
                </div>
                <div className='container-formation'>
                    <h3 className='title-f'>Formation Intégrateur Web Openclassrooms <br/> (en cours)</h3>
                    <h4>2022-2023</h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Formations
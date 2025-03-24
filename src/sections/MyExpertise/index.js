import React from 'react';
import './MyExpertise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function MyExpertise() {
    return (
        <section className="my-expertise-section">
            <div className="content">
                <h2 className="title">Minha Especialidade</h2>
                <div className="boxes">
                    <div className="box">
                        <div className="header">
                            <FontAwesomeIcon icon={faCode} className="icon" />
                            <h3>Desenvolvimento de <br /><span className="highlight">Software</span></h3>
                        </div>
                        <p>Experiente em programação funcional e orientada a objetos: Dart, Python, JavaScript, PHP.</p>
                    </div>
                    <div className="box">
                        <div className="header">
                            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                            <h3>Dev Frontend <br /><span className="highlight">React, Laravel</span></h3>
                        </div>
                        <p>Experiência em desenvolvimento web com HTML, CSS, JS, React, Laravel e Vue.js.</p>
                    </div>
                    <div className="box">
                        <div className="header">
                            <FontAwesomeIcon icon={faMobileAlt} className="icon" />
                            <h3>Dev Mobile <br /><span className="highlight">Android</span></h3>
                        </div>
                        <p>Habilidosa no desenvolvimento de aplicativos móveis híbridos e soluções multiplataforma com o framework Flutter e React Native.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyExpertise;
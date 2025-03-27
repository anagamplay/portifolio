import React from 'react';
import './MyExpertise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import LineWithText from './components/LineWithText';
import backGroundImage from '../../assets/my-expertise-bg.png';

function MyExpertise() {
    return (
        <section className="my-expertise-section">
            <div className="content">
                <h2 className="title">Minhas Especialidades</h2>
                <div className="boxes">
                    <div className="box">
                        <div className="header">
                            <FontAwesomeIcon icon={faCode} className="icon" />
                            <h3>Desenvolvimento <br />de <span className="highlight">Software</span></h3>
                        </div>
                        <div className="line-with-text">
                            <LineWithText />
                            <p>Experiente em programação funcional e orientada a objetos: Dart, Python, JavaScript, PHP.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="header">
                            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                            <h3>Dev Frontend <br /><span className="highlight">React, Laravel</span></h3>
                        </div>
                        <div className="line-with-text">
                            <LineWithText />
                            <p>Experiência em desenvolvimento web com HTML, CSS, JS, React, Laravel e Vue.js.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="header">
                            <FontAwesomeIcon icon={faMobileAlt} className="icon" />
                            <h3>Dev Mobile <br /><span className="highlight">Android</span></h3>
                        </div>
                        <div className="line-with-text">
                            <LineWithText />
                            <p>Habilidosa no desenvolvimento de aplicativos móveis híbridos e soluções multiplataforma com o framework Flutter e React Native.</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={backGroundImage} alt="Background" className="background-image" />
                </div>
            </div>
        </section>
    );
}

export default MyExpertise;

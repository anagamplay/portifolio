import React from 'react';
import './AboutMe.css';
import aboutMeImage from '../../assets/about-me.png';

function AboutMe() {
    return (
        <section className="about-me-section">
            <div className="content">
                <div className="text-column">
                    <h2 className="title">Sobre <span className="highlight">mim</span></h2>
                    <p>
                        Oii, eu me chamo Ana Clara! Sou desenvolvedora front-end e mobile, apaixonada por criar interfaces modernas, intuitivas e funcionais. O que mais me motiva na programação é a possibilidade de transformar ideias em experiências reais, criando soluções que facilitem a vida das pessoas.
                    </p>
                    <p>
                        Minha abordagem nos projetos é sempre centrada no usuário: busco unir design e performance para entregar aplicações eficientes e visualmente agradáveis. Acredito que cada detalhe importa, e por isso estou sempre explorando novas tecnologias e aprimorando minhas habilidades.
                    </p>
                </div>
                <div className="image-column">
                    <img src={aboutMeImage} alt="Backgound Image" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
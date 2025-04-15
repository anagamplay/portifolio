import React from 'react';
import { FaHome, FaUser, FaPhone, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <a href="#home">
                        <i><FaHome /></i> Home
                    </a>
                    <a href="#about">
                        <i><FaUser /></i> Sobre mim
                    </a>
                    <a href="#contact">
                        <i><FaPhone /></i> Contato
                    </a>
                </nav>
                <div className="social-icons">
                    <a href="https://github.com/anagamplay" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com/anagamplay" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className="footer-legal">
                    <p>Ana Clara Silvestre de Oliveira - Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

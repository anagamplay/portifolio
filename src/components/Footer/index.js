import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <a href="#home">
                        <i>
                            <FontAwesomeIcon icon={faHouse} />
                        </i> Home
                    </a>
                    <a href="#about">
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i> Sobre mim
                    </a>
                    <a href="#contact">
                        <i>
                            <FontAwesomeIcon icon={faPhone} />
                        </i> Contato
                    </a>
                </nav>
                <div className="social-icons">
                    <a href="https://github.com/anagamplay" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
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
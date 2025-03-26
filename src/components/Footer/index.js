import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <a href="#home">
                        <i className="fas fa-home"></i> Home
                    </a>
                    <a href="#about">
                        <i className="fas fa-user"></i> About me
                    </a>
                    <a href="#contact">
                        <i className="fas fa-phone"></i> Contact
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
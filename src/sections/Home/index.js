import React from 'react';
import profileImage from '../../assets/profile.png';
import './Home.css';

function Home() {
    return (
        <section className="home-section">
            <div className="content">
                <div className="text-column">
                    <h2 className="title">ANA CLARA SILVESTRE</h2>
                    <p className="subtitle">Desenvolvedora Front-end e Mobile</p>
                    <div className="buttons">
                        <button className="btn hire-me">Contato</button>
                        <button className="btn download-cv">Download CV</button>
                    </div>
                </div>
                <div className="image-column">
                    <img src={profileImage} alt="Profile" />
                </div>
            </div>
        </section>
    );
}

export default Home;
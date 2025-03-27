import React from 'react';
import profileImage from '../../assets/profile.png';
import './Home.css';
import Button from '../../components/Button';

function Home() {
    return (
        <section className="home-section" id='home'>
            <div className="content">
                <div className="text-column">
                    <h2 className="title">ANA CLARA SILVESTRE</h2>
                    <p className="subtitle">Desenvolvedora Front-end e Mobile</p>
                    <div className="buttons">
                        <Button className="primary">Contato</Button>
                        <Button className="secondary">Download CV</Button>
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
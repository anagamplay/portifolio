import React from 'react';
import './MyWork.css';
import Button from '../../components/Button';
import WorkCard from './components/Card';

function MyWork() {
    return (
        <section className="my-work-section">
            <div className="content">
                <h2 className="title">Meus <span className="highlight">trabalhos</span></h2>
                <Button className="btn primary">Todos</Button>
                <Button className="btn secondary">Web</Button>
                <Button className="btn secondary">Mobile</Button>
                <div className="work-list">
                    <WorkCard
                        imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        description="PaceApp - Aplicativo interativo de corrida"
                    />
                    <WorkCard
                        imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        description="PaceApp - Aplicativo interativo de corrida"
                    />
                    <WorkCard
                        imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        description="PaceApp - Aplicativo interativo de corrida"
                    />
                    <WorkCard
                        imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        description="PaceApp - Aplicativo interativo de corrida"
                    />
                </div>
            </div>
        </section>
    );
}

export default MyWork;
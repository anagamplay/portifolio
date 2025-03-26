import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './MyWork.css';
import Button from '../../components/Button';
import WorkCard from './components/Card';

const workItems = [
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PaceApp - Aplicativo interativo de corrida"
    }
];

function MyWork() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = workItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(workItems.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className="my-work-section">
            <div className="content">
                <h2 className="title">Meus <span className="highlight">trabalhos</span></h2>
                <Button className="btn primary">Todos</Button>
                <Button className="btn secondary">Web</Button>
                <Button className="btn secondary">Mobile</Button>
                <div className="work-list">
                    {currentItems.map((item, index) => (
                        <WorkCard
                            key={index}
                            imageSrc={item.imageSrc}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="pagination">
                    <div className="arrow" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <span>{currentPage} de {totalPages}</span>

                    <div className="arrow" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyWork;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './MyWork.css';
import Button from '../../components/Button';
import WorkCard from './components/Card';

import paceApp from '../../assets/paceapp-tumb.png';
import colaAqui from '../../assets/cola-aqui-tumb.png';
import ifms from '../../assets/ifms-tumb.png';
import paceapp from '../../assets/paceapp-tumb.png';
import portifolio from '../../assets/portifolio-tumb.png';

const workItems = [
    {
        imageSrc: paceApp,
        description: "PaceApp - Aplicativo interativo de corrida"
    },
    {
        imageSrc: colaAqui,
        description: "Cola Aqui - Seu app de role"
    },
    {
        imageSrc: ifms,
        description: "iFMS - Aplicativo de comunicações para o IFMS"
    },
    {
        imageSrc: portifolio,
        description: "Ana Clara Silvestre - Desenvolvedora Front-end e Mobile"
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
        <section className="my-work-section" id='work'>
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
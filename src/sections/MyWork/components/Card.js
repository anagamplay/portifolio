import React from 'react';
import PropTypes from 'prop-types';

const workCardStyles = `
.work-card {
    background-color: #393e46;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.work-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.work-card .description {
    width: 100%;
    background-color: #393e46;
    color: white;
    padding: 10px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
`;

function WorkCard({ imageSrc, description }) {
    return (
        <>
            <style>{workCardStyles}</style>
            <div className="work-card">
                <img src={imageSrc} alt={description} />
                <div className="description">{description}</div>
            </div>
        </>
    );
}

WorkCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default WorkCard;
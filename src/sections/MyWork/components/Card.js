import React from 'react';
import PropTypes from 'prop-types';

const workCardStyles = `
.work-card {
    position: relative;
    background-color: #393e46;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}

.work-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.work-card .description {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 10px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
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
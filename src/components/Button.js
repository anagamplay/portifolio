import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = `
.btn {
    padding: 9px 20px;
    margin-right: 20px;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
}

.primary {
    background-color: var(--primary-color);
    color: white;
}

.primary:hover {
    background-color: var(--primary-color);
}

.secondary {
    background-color: var(--button-background-color);
    color: white;
}

.secondary:hover {
    background-color: var(--button-hover-color);
}
`;

function Button({ className, children, onClick }) {
    return (
        <>
            <style>{buttonStyles}</style>
            <button className={`btn ${className}`} onClick={onClick}>
                {children}
            </button>
        </>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    onClick: () => { },
};

export default Button;
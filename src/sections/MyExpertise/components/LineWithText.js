import React from 'react';
const fragmentMonoFont = document.createElement('link');
fragmentMonoFont.href = 'https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap';
fragmentMonoFont.rel = 'stylesheet';
document.head.appendChild(fragmentMonoFont);

function LineWithText() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    };

    const lineStyle = {
        width: '2px',
        backgroundColor: '#737D8D',
        height: '100%',
        margin: '8px 0',
    };

    const textStyle = {
        color: '#737D8D',
        margin: '0',
        fontWeight: 'normal',
        fontSize: '1rem',
        fontFamily: 'Fragment Mono, monospace',
    };

    return (
        <div style={containerStyle}>
            <h3 style={textStyle}>&lt;h3&gt;</h3>
            <div style={lineStyle}></div>
            <h3 style={textStyle}>&lt;h3&gt;</h3>
        </div>
    );
}

export default LineWithText;
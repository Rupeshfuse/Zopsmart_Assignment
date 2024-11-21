import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState('green');
    const [prevColor, setPrevColor] = useState(null);

    useEffect(() => {
        const changeColor = (newColor, timeout) => {
            setTimeout(() => {
                setPrevColor(color);
                setColor(newColor);
            }, timeout);
        };

        if (color === 'green') {
            changeColor('yellow', 3000);
        } else if (color === 'yellow' && prevColor === 'green') {
            changeColor('red', 2000);
        } else if (color === 'red') {
            changeColor('yellow', 5000);
        } else if (color === 'yellow' && prevColor === 'red') {
            changeColor('green', 2000);
        }
    }, [color, prevColor]);

    const Style = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '10px auto',
        backgroundColor: color
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={Style}></div>
            <p>Current color: {color}</p>
        </div>
    );
};

export default TrafficLight;


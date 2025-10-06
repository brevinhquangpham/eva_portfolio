import React from 'react'

const Line = ({ orientation = 'horizontal', color = '#82A3FF', thickness = '1.5px', length = '100%' }) => {
    return (
        <div
            style={{
                width: orientation === 'horizontal' ? length : thickness,
                height: orientation === 'horizontal' ? thickness : length,
                backgroundColor: color,
            }}
        />
    );
};


export default Line;

import React from 'react';

const Controls = ({ fill, width, svgWidth, svgHeight, onFillChange, onWidthChange, onSvgWidthChange, onSvgHeightChange }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label>
                Fill Color:
                <input
                    type="color"
                    value={fill}
                    onChange={(e) => onFillChange(e.target.value)}
                />
            </label>
            <label style={{ marginLeft: '10px' }}>
                Stroke Width:
                <input
                    type="number"
                    value={width}
                    onChange={(e) => onWidthChange(parseInt(e.target.value, 10))}
                    min="1"
                />
            </label>
            <label style={{ marginLeft: '10px' }}>
                SVG Width:
                <input
                    type="number"
                    value={svgWidth}
                    onChange={(e) => onSvgWidthChange(parseInt(e.target.value, 10))}
                    min="1"
                />
            </label>
            <label style={{ marginLeft: '10px' }}>
                SVG Height:
                <input
                    type="number"
                    value={svgHeight}
                    onChange={(e) => onSvgHeightChange(parseInt(e.target.value, 10))}
                    min="1"
                />
            </label>
        </div>
    );
};

export default Controls;

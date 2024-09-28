// src/components/SvgEditor.js
import React, { useEffect, forwardRef } from 'react';

const SvgEditor = forwardRef(({ svgContent }, ref) => {
    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = svgContent;
        }
    }, [svgContent, ref]);

    return (
        <div ref={ref} />
    );
});

export default SvgEditor;

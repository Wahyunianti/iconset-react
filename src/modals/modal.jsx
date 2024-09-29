import '../index.css';
import React, { useEffect, useState, useRef } from 'react';
import SvgEditor from '../components/SvgEditor';
import html2canvas from 'html2canvas';

const Modal = ({ icon, closeModal }) => {
    const [fill, setFill] = useState(icon.fill);
    const [width, setWidth] = useState(parseInt(icon.width, 10));
    const [copyButtonText, setCopyButtonText] = useState("Copy SVG");
    const svgRef = useRef(null);

    useEffect(() => {
        const modal = document.getElementById('myModal');
        if (icon) {
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    }, [icon]);

    const getUpdatedSvgContent = () => {
        return icon.svgpath
            .replace(/width="\d+px"/, `width="${width}px"`)
            .replace(/height="\d+px"/, `height="${width}px"`)
            .replace(/fill="[^"]+"/, `fill="${fill}"`);
    };

    const handleDownloadPNG = async () => {
        const svgElement = svgRef.current;
        if (!svgElement) {
            console.error('SVG element not found');
            return;
        }

        const updatedSvgContent = getUpdatedSvgContent();

        svgElement.innerHTML = updatedSvgContent;

        try {
            const canvas = await html2canvas(svgElement, {
                backgroundColor: null,
                scale: 1,
            });

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'image.png';
            link.click();
        } catch (error) {
            console.error('Error capturing SVG:', error);
        }
    };

    const handleCopySVG = () => {
        const updatedSvgContent = getUpdatedSvgContent();
        navigator.clipboard.writeText(updatedSvgContent).then(() => {
            setCopyButtonText("Copied");
            setTimeout(() => setCopyButtonText("Copy SVG"), 2000);
        }).catch(error => {
            console.error('Error copying SVG:', error);
        });
    };

    return (
        <div id="myModal" className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={closeModal}>&times;</span>
                <h2>Edit SVG: {icon?.title}</h2>
                <div className="editable">
                    <div className='svgedit'>
                    <SvgEditor svgContent={getUpdatedSvgContent()} ref={svgRef} />
                    </div>
                    <div className="rowedit">
                        <div>
                            <label htmlFor="inputColor">Color</label>
                            <input
                                className="inputsearch svgwill colorr"
                                type="color"
                                id="inputColor"
                                value={fill}
                                onChange={(e) => setFill(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="inputField">Width</label>
                            <input
                                className="inputsearch svgwill"
                                type="number"
                                placeholder="width"
                                id="inputField"
                                value={width}
                                onChange={(e) => setWidth(parseInt(e.target.value, 10))}
                            />
                        </div>
                    </div>
                    <div className="rowedit">
                        <button className="dld" type="button" onClick={handleDownloadPNG}>Download PNG</button>
                        <button className="dld" type="button" onClick={handleCopySVG}>{copyButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

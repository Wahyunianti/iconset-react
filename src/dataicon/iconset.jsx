import '../index.css';

const IconSet = ({ iconName }) => {
    return (
        <div className="iconset">
            <div className="iconboxset"></div>
            <button className="copyy">Copy</button>
            <h2>{iconName}</h2>
        </div>
    );
};

export default IconSet;
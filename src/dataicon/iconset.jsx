import '../index.css';

const IconSet = ({ iconId, iconName, iconData, onEditClick }) => {
    return (
        <div className="iconset">
            <div className="iconboxset" >
                <div className='dataiconn' dangerouslySetInnerHTML={{ __html: iconData }}/>
            </div>
            <button className="copyy" onClick={() => onEditClick(iconId)}>Edit</button>
            <h2>{iconName}</h2>
        </div>
    );
};

export default IconSet;
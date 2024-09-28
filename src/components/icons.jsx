import '../index.css';
import IconSet from '../dataicon/iconset';

function icons() {

  const iconNames = Array(10).fill('facebook.svg');

  return (
    <div>
      <form action="">
        <div className="searchbar">
          <input className="inputsearch" type="text" placeholder="Search icon.." />
          <button type="button">Search</button>
        </div>
      </form>
      <div className="kotak">
        <div className="boxicon">
          <div className="blockkonten">
            <div className="boxcontainer">

              {iconNames.map((iconName, index) => (
                <IconSet key={index} iconName={iconName} />
              ))}

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default icons
import React, { useState } from 'react';
import '../index.css';
import IconSet from '../dataicon/iconset';
import Modal from '../modals/modal';
import { svgdata } from '../data/svgdata';

function Icons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(11); 
  
  const openModal = (iconId) => {
    const icon = svgdata.find(item => item.id === iconId);
    setSelectedIcon(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIcon(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const loadMoreIcons = () => {
    setVisibleCount(prevCount => prevCount + 11);
  };

  const filteredIcons = svgdata.filter(icon =>
    icon.title.toLowerCase().includes(searchTerm)
  );

  const iconsToDisplay = filteredIcons.slice(0, visibleCount);

  return (
    <div>
      <form action="">
        <div className="searchbar">
          <input
            className="inputsearch"
            type="text"
            placeholder="Search icon.."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button">Search</button>
        </div>
      </form>
      <div className="kotak">
        <div className="boxicon">
          <div className="blockkonten">
            <div className="boxcontainer">
              {iconsToDisplay.map(icon => (
                <IconSet
                  key={icon.id}
                  iconId={icon.id}
                  iconName={icon.title}
                  iconData={icon.svgpath}
                  onEditClick={openModal}
                />
              ))}
              {isModalOpen && <Modal icon={selectedIcon} closeModal={closeModal} />}
              {filteredIcons.length > visibleCount && (
                <div className="load-more">
                  <button className='terbaru' onClick={loadMoreIcons}>Load More</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Icons;

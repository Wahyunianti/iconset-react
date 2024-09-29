import React, { useState } from 'react';
import '../index.css';
import IconSet from '../dataicon/iconset';
import Modal from '../modals/modal';
import { svgdata } from '../data/svgdata';

function Icons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  
  const openModal = (iconId) => {
      const icon = svgdata.find(item => item.id === iconId);
      setSelectedIcon(icon);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedIcon(null);
  };

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
              {svgdata.map(icon => (
                <IconSet key={icon.id} iconId={icon.id} iconName={icon.title} iconData={icon.svgpath} onEditClick={openModal} />
              ))}
              {isModalOpen && <Modal icon={selectedIcon} closeModal={closeModal} />}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Icons
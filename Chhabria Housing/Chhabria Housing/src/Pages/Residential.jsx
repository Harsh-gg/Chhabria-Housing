import React from 'react'
import Hero from '../Hero'
import image from '../assets/Residential Projects.png';
import Foot from '../Footer';
import Allproj from '../Allproj';
import json from '../Data/Residential Projects';
import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Popup from '../Popup';

function Residential() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      openPopup();
    }, 0.3 * 60 * 1000); // 2 minutes in milliseconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <div>
      <Navbar openPopup={openPopup} />
      {isPopupOpen && <Popup closePopup={closePopup} />}
      <Hero img={image}/>
      <br/>
      <Allproj url={json}/>
      <br/>
      <Foot/>
    </div>
  )
}

export default Residential
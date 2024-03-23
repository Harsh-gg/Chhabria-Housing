import React from 'react'
import Privacy from '../Privacy'
import Foot from '../Footer'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react';
import Popup from '../Popup';


function Privacypolicy() {
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
      <Privacy />
      <Foot />
    </div>
  )
}

export default Privacypolicy

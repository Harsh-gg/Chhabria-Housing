import React from 'react'
import Foot from '../Footer'
import Hero from '../Hero'
import image from '../assets/About Us.png'
import Founders from '../Founders'
import Aboutsec from '../Aboutsec'
import Testimonial from '../Testimonial.jsx';
import Navbar from '../Navbar.jsx'
import { useState, useEffect } from 'react';
import Popup from '../Popup';


function About() {
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
    }, 1 * 60 * 1000); // 2 minutes in milliseconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once on component mount
  return (
    <div>
      <Navbar openPopup={openPopup} />
      {isPopupOpen && <Popup closePopup={closePopup} />}
      <Hero img={image}/>
      <Aboutsec />
      <Founders />
      <div id='testimonials'><Testimonial/></div>
      <br />
      <br />
      <Foot />
    </div>
  )
}

export default About

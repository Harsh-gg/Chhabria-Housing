import React from 'react'
import Hero from '../Hero'
import Aboutsec from '../Aboutsec'
import Foot from '../Footer'
import WhyCaro from '../WhyCaro'
import Jobform from '../jobform'
import Testimonial from '../Testimonial.jsx';
import '../App.css'
import image from '../assets/Join Our Team.png';
import Navbar from '../Navbar.jsx'
import { useState, useEffect } from 'react';
import Popup from '../Popup';

function Join() {
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
      <Hero  img={image}/>
      <WhyCaro/>
      <br/>
      <Jobform/>
      <div id='about' ><Aboutsec/></div>
      <div id='testimonials'><Testimonial/></div>
      <br/>
      <Foot/>
    </div>
  )
}

export default Join

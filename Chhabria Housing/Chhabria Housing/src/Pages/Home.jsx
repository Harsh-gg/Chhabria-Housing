import React, { useState } from 'react';
import AutoplayCarousel from '../AutoplayCarousel';
import Stats from '../Stats.jsx';
import Popup from '../Popup';
import Caro from '../Carousel.jsx';
import Testimonial from '../Testimonial.jsx';
import Contact from '../Contact.jsx';
import Projsection from '../Projsection.jsx';
import Aboutsec from '../Aboutsec.jsx';
import '../App.css';
import Foot from '../Footer.jsx';

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <>
      <div className='cont'>
      <Caro/>
      <AutoplayCarousel />
      <Projsection openPopup={openPopup}/>
      <div id='about'><Aboutsec/></div>
      <Stats />
      <div id='testimonials'><Testimonial/></div>
      {isPopupOpen && <Popup closePopup={closePopup} />}
      <Contact openPopup={openPopup}/>
      <Foot />
      </div>
    </>
  );
}

export default Home;

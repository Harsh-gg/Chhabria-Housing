import React, { useState } from 'react';
import AutoplayCarousel from './AutoplayCarousel';
import Stats from './Stats.jsx';
import Navbar from './Navbar';
import Popup from './Popup';
import Foot from './Footer.jsx';
import Caro from './Carousel.jsx';
import Testimonial from './Testimonial.jsx';
import Contact from './Contact.jsx';
import Projsection from './Projsection.jsx';
import './App.css';
import Aboutsec from './aboutsec.jsx';

function App() {
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
      <Navbar openPopup={openPopup}/>
      <Caro/>
      <AutoplayCarousel />
      <Projsection openPopup={openPopup}/>
      <Aboutsec/>
      <Stats />
      <Testimonial id='testimonialss'/>
      {isPopupOpen && <Popup closePopup={closePopup} />}
      <Contact openPopup={openPopup}/>
      <Foot/>
      </div>
    </>
  );
}

export default App;

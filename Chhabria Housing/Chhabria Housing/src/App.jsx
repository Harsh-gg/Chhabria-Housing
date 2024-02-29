import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home.jsx';
import './App.css';
import Navbar from './Navbar.jsx';
import Popup from './Popup';
import Join from './Pages/Join.jsx';
import Privacypolicy from './Pages/Privacypolicy.jsx';
import Commertial from './Pages/commertial.jsx';
import Residential from './Pages/residential.jsx';
import About from './Pages/About.jsx';


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
      <Navbar openPopup={openPopup}/>
      {isPopupOpen && <Popup closePopup={closePopup} />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/privacy-policy" element={<Privacypolicy/>} />
        <Route path='/commertial' element={<Commertial/>}/>
        <Route path='/residential' element={<Residential/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;

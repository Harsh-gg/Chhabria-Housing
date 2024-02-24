import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home.jsx';
import './App.css';
import Navbar from './Navbar.jsx';
import Popup from './Popup';
import Join from './Pages/Join.jsx';
import Privacypolicy from './Pages/Privacypolicy.jsx';


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
      </Routes>
    </>
  );
}

export default App;

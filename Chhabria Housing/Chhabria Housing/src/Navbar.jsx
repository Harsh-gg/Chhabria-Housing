import React, { useState } from "react";
import css from "./Navbar.module.css";
import logo from "./assets/logo trans.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Navbar({ openPopup }) {
  
  const [isResponsive, setIsResponsive] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive((prev) => !prev);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen((prev) => !prev);
  };
  
  return (
    <>
      <div className={`${css.topnav} ${isResponsive ? css.responsive : ""}`}>
        <Link to="/">
          <img id={css.logo} src={logo} alt="logo" />
        </Link>
        <div id={css.whole}>
          <div className={css.burgerIcon} onClick={toggleResponsive}>
            ☰
          </div>
          <div className={css.menuItems}>
            <div className={css.dropdown} onClick={toggleProjectsDropdown}>
              <button id={css.abhinav} className={css.dropbtn}>
                Projects▾
              </button>
              {/* Conditional rendering for the Projects dropdown */}
              {isProjectsDropdownOpen && (
                <div className={css.dropdowncontent}>
                  <div className={css.dropdownn}>
                    <button className={css.dropbtnn}>Residential</button>
                  </div>
                  <div className={css.dropdownn}>
                    <button className={css.dropbtnn}>Commercial</button>
                  </div>
                </div>
              )}
            </div>
            <Link to="#contact" onClick={openPopup}>
              Contact Us
            </Link>
            <HashLink to="#testimonials">Our Testimonials</HashLink>
            <HashLink to="#about">About Us</HashLink>
            <Link to="/join">Join Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import css from "./Navbar.module.css";
import logo from "./assets/logo trans.png";

export default function Navbar({openPopup}) {
    return(
        <>
            <div className={css.topnav} id={css.myTopnav}> 
    <img id={css.logo} src={logo} alt="logo" />
    <div id={css.whole}>
      <div className={css.dropdown}>
          <button id={css.abhinav} className={css.dropbtn}>
            Projects▾    
          </button>
          <div className={css.dropdowncontent}>
              <div className={css.dropdownn}>
                  <button className={css.dropbtnn}>Residential▾
                  </button>
                  <div className={css.dropdowncontentn}>
                      <a href="#">North</a>
                      <a href="#">South</a>
                  </div>
              </div> 
              <div className={css.dropdownn}>
                  <button className={css.dropbtnn}>Commercial▾
                  </button>
                    <div className={css.dropdowncontentn}>
                        <a href="#">North</a>
                        <a href="#">South</a>
                    </div>
              </div> 
          </div>
      </div> 
      <a href="#testimonialss">Our Testimonials</a>
      <a href="#news">About Us</a>
      <a href="#about">Join Us</a>
      <a href="#contact" onClick={openPopup}>Contact Us</a>
      
  </div>
</div>
        </>
    )
}
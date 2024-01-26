import React from "react";
import  css from"./Popup.module.css";
import email from "./assets/email.png";
import location from "./assets/location.png";
import phone from "./assets/phone.png";

export default function Popup({ closePopup }) {
  const handleClose = () => {
    closePopup();
    document.body.style.overflow = "auto";
  };  
  return(
        <>
        <div className={css.backdrop0}></div>
        <div className={css.container0}>
          <div className={css.form0}>
            <div className={css.contactinfo0}>
              <h3 className={css.title0}>Let's get in touch</h3>
              <p className={css.text0}>
              We're here to assist you every step of the way. Feel free to reach out with your inquiries or to schedule a consultation.
              </p>
              <div className={css.info0}>
                <div className={css.information0}>
                  <img src={location} className={css.icon0} alt="" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className={css.information0}>
                  <img src={email} className={css.icon0} alt="" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className={css.information0}>
                  <img src={phone} className={css.icon0} alt="" />
                  <p>123-456-789</p>
                </div>
              </div>
            </div>
            <div className={css.contactform0}>
              <form action="index.html" autocomplete="off">
                <h3 className={css.title0}>Contact us</h3>
                <div className={css.inputcontainer0}>
                  <input type="text" name="name" className={css.input0} placeholder="Name"/>
                  <span>Username</span>
                </div>
                <div className={css.inputcontainer0}>
                  <input type="email" name="email" placeholder="Email" className={css.input0} />
                  <span>Email</span>
                </div>
                <div className={css.inputcontainer0}>
                  <input type="tel" name="phone" className={css.input0} placeholder="Phone"/>
                  <span>Phone</span>
                </div>
                <div className={css.inputcontainertextarea0}>
                  <textarea name="message" className={css.input0} placeholder="Messasge"></textarea>
                </div>
                <div className={css.buttonss}>
                  <input type="submit" value="Send" className={css.btn0} />
                  <input type="button" value="Close" className={css.btn0} onClick={handleClose}/>
                </div>
              </form>
            </div>
        </div>
    </div>
        </>
    )
}
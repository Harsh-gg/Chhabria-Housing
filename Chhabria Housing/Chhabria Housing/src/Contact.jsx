import React from "react";
import Contactcss from './Contact.module.css';

export default function Contact({openPopup}) {
    return(
        <>
        <form className={Contactcss.formm}>
            <div className={Contactcss.rightsection}>
                <h1 className={Contactcss.title}>Contact Information & Inquiry Form</h1>
                <h3 className={Contactcss.subtitle}>Connect with us and Share your Inquiries for a Personalized Experience </h3>
                <button type="submit" className={Contactcss.submit}>Submit</button>
                <button type="reset" className={Contactcss.submit} onClick={openPopup}>Talk to Our Advisor</button>
            </div>
            <div className={Contactcss.leftsection}>
                    <label for="fullName" className={Contactcss.labell}>Full Name:*</label>
                    <input type="text" id="fullName" name="fullName" required />
                    <label for="email" className={Contactcss.labell}>Email:*</label>
                    <input type="email" id="email" name="email" required />
                    <label for="mobile"  className={Contactcss.labell}>Mobile:*</label>
                    <input type="tel" id="mobile" name="mobile" required />
            </div>
        </form>
        </>
    )
}
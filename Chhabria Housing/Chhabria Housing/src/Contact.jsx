import React,{useState} from "react";
import Contactcss from './Contact.module.css';

export default function Contact({openPopup}) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
      });
    
      let name,value;
      const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value });
      };
      
      const submitData = async (e) => {
        e.preventDefault();
        const { name, email, phone } = userData;
        if (name && email && phone) {
          const res = await fetch(
            "https://chhabria-housing-default-rtdb.firebaseio.com/Enquiries.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                phone,
              }),
            }
          );
    
          if (res) {
            setUserData({
              name: "",
              email: "",
              phone: "",
            });
            alert("Data Stored");
          }
        } else {
          alert("Please fill all the fields");
        }
      };
    return(
        <>
        <form className={Contactcss.formm} autoComplete="off" method="POST">
            <div className={Contactcss.rightsection}>
                <h1 className={Contactcss.title}>Contact Information & Inquiry Form</h1>
                <h3 className={Contactcss.subtitle}>Connect with us and Share your Inquiries for a Personalized Experience </h3>
                <div className={Contactcss.buttons}>
                <button type="submit" className={Contactcss.submit} onClick={submitData}>Submit</button>
                <button type="reset" className={Contactcss.submitt} onClick={openPopup}>Talk to Our Advisor</button>
                </div>
            </div>
            <div className={Contactcss.leftsection}>
                    <label for="fullName" className={Contactcss.labell}>Full Name:*</label>
                    <input type="text" id="fullName" name="name" value={userData.name} onChange={postUserData} required />
                    <label for="email" className={Contactcss.labell}>Email:*</label>
                    <input type="email" id="email" name="email"
                    value={userData.email}onChange={postUserData} required />
                    <label for="mobile"  className={Contactcss.labell}>Mobile:*</label>
                    <input type="tel" id="mobile" name="phone" value={userData.phone} onChange={postUserData} required />
            </div>
        </form>
        </>
    )
}
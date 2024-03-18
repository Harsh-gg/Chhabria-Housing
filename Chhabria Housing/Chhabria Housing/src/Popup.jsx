import React,{useState} from "react";
import css from"./Popup.module.css";
import email from "./assets/email.png";
import location from "./assets/location.png";
import phone from "./assets/phone.png";

export default function Popup({ closePopup }) {
  const handleClose = () => {
    closePopup();
    document.body.style.overflow = "auto";
  };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let name,value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    if (name && email && phone && message) {
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
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Data Stored");
      }
    } else {
      alert("Please fill all the fields");
    }
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
                  <p>Chembur Office : 403, 4th Floor, Vikas Centre, Nr. Cubic Mall, Dr. C.G Road, Chembur East, Mumbai - 400074</p>
                </div>
                <div className={css.information0}>
                  <img src={location} className={css.icon0} alt="" />
                  <p>
Worli Office : B-15, 3rd Floor, Madhu Estate, Opp. Birla Niyaara, Nr. Lodha Park, Next to IKEA Kamala Mills, Pandurang Budhkar Marg, Worli, Mumbai - 400013</p>
                </div>
                <div className={css.information0}>
                  <img src={email} className={css.icon0} alt="" />
                  <p>chhabriaarjun1@gmail.com</p>
                </div>
                <div className={css.information0}>
                  <img src={phone} className={css.icon0} alt="" />
                  <p>9821858892 / 9819134953</p>
                </div>
              </div>
            </div>
            <div className={css.contactform0}>
              <form action="index.html" autocomplete="off" method="POST">
                <h3 className={css.title0}>Contact us</h3>
                <div className={css.inputcontainer0}>
                  <input type="text" name="name" className={css.input0} placeholder="Name" value={userData.name} onChange={postUserData}/>
                </div>
                <div className={css.inputcontainer0}>
                  <input type="email" name="email" placeholder="Email" className={css.input0} value={userData.email} onChange={postUserData}/>
                </div>
                <div className={css.inputcontainer0}>
                  <input type="tel" name="phone" className={css.input0} placeholder="Phone" value={userData.phone} onChange={postUserData}/>
                </div>
                <div className={css.inputcontainertextarea0}>
                  <textarea name="message" className={css.input1} placeholder="Messasge" value={userData.message} onChange={postUserData}></textarea>
                </div>
                <div className={css.buttonss}>
                  <input type="submit" value="Send" className={css.btn0}  onClick={submitData}/>
                  <input type="button" value="Close" className={css.btn0} onClick={handleClose}/>
                </div>
              </form>
            </div>
        </div>
    </div>
        </>
    )
}
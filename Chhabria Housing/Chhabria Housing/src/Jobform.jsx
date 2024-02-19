import React,{useState} from 'react'
import css from './jobform.module.css'
// import {storage} from '../Config';
// import { ref, uploadBytes } from 'firebase/storage';

export default  function Jobform() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    position: '',
    // resume: null,
  });

  const postUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value.trim() }); // Ensure trimming for consistency
  };
  
  const submitData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message, position} = userData;

    if (name.trim() && email.trim() && phone.trim() && message.trim() && position) {
      try {
        // const resumeRef = ref(storage, `Resumes/${resume.name}`);
        // await uploadBytes(resumeRef, resume);

        // const resumeUrl = await resumeRef.getDownloadURL();

        // Submit form data with resume URL
        const res = await fetch(
          "https://chhabria-housing-default-rtdb.firebaseio.com/JobApplications.json",
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
              position,
              // resume: resumeUrl,
            }),
          }
        );

        if (res) {
          setUserData({
            name: '',
            email: '',
            phone: '',
            message: '',
            position: '',
            // resume: null,
          });
          alert('Data Stored');
        }
      } catch (error) {
        console.error('Error uploading resume or submitting data:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please fill all the fields');
    }
  };
    return (
        <>
        <div className={css.full}>
          <div className={css.cont}>
              <div className={css.heading}><h1>Dream Big</h1></div>
              <div className={css.para}><p>We are in the business of turning dreams into reality. If you think you share our commitment, we look forward to having you onboard.</p></div>
          </div>
          <form onSubmit={submitData} className={css.form2} method='POST'>
            <label for="fullName" className={css.label2}>Full Name*</label>
            <input type="text" id={css.fullName} name="name" value={userData.name} onChange={postUserData} required />

            <label for="phone" className={css.label2}>Phone*</label>
            <input type="tel" id={css.phone} name="phone" pattern="[0-9]{10}" value={userData.phone} onChange={postUserData} required />

            <label for="coverLetter" className={css.label2}>Why would you like to join us?*</label>
            <textarea id={css.coverLetter} name="message" value={userData.message} onChange={postUserData} required></textarea>

            <label for="email" className={css.label2}>Email Address*</label>
            <input type="email" id={css.email} name="email" value={userData.email} onChange={postUserData} required />

            <label for="position" className={css.label2}>Interested Position*</label>
            <select id={css.position} name="position" value={userData.position} onChange={postUserData} required>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="content">Content</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
            </select>

            {/* <label for="resume" className={css.label2}>Upload Resume</label>
            <input type="file" id={css.resume} name="resume" value={userData.resume} onChange={postUserData} accept=".pdf,.doc,.docx" /> */}

            <button className={css.submit2} type="submit" onClick={submitData}>Submit</button>
          </form>
        </div>
</>
  )
}
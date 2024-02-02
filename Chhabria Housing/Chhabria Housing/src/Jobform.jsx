import React,{useState} from 'react'
import css from './jobform.module.css'

function Jobform() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("sales");
    const [resume, setResume] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      };

    return (
        <>
        <div className={css.full}>
        <div className={css.cont}>
            <div className={css.heading}><h1>Dream Big</h1></div>
            <div className={css.para}><p>We are in the business of turning dreams into reality. If you think you share our commitment, we look forward to having you onboard.</p></div>
        </div>
        <form onSubmit={handleSubmit} className={css.form2}>
  <label for="fullName" className={css.label2}>Full Name*</label>
  <input type="text" id={css.fullName} name="fullName" required />

  <label for="phone" className={css.label2}>Phone*</label>
  <input type="tel" id={css.phone} name="phone" pattern="[0-9]{10}" required />

  <label for="coverLetter" className={css.label2}>Why would you like to join us?</label>
  <textarea id={css.coverLetter} name="coverLetter" required></textarea>

  <label for="email" className={css.label2}>Email Address*</label>
  <input type="email" id={css.email} name="email" required />

  <label for="position" className={css.label2}>Interested Position*</label>
  <select id={css.position} name="position" required>
    <option value="sales">Sales</option>
    <option value="marketing">Marketing</option>
    <option value="content">Content</option>
    <option value="design">Design</option>
    <option value="development">Development</option>
  </select>

  <label for="resume" className={css.label2}>Upload Resume</label>
  <input type="file" id={css.resume} name="resume" accept=".pdf,.doc,.docx" />

  <button className={css.submit2} type="submit">Submit</button>
    </form>
    </div>
</>
  )
}

export default Jobform
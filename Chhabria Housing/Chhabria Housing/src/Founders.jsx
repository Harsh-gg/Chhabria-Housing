import React from 'react'
import css from './Founders.module.css'
import image1 from './assets/founder1.jpg'
import image2 from './assets/founder2.jpg'
import image3 from './assets/founder3.jpg'

function Founders() {
  return (
    <>
    <div className={css.whole}>
    <h2 className={css.teammemberheader}>Meet Our Partners</h2>
    <p className={css.description}>In the heart of Mumbai's bustling streets, our real estate venture stands as a beacon of experience and integrity, tracing its roots back to the visionary Late Murlidhar Biharilal Chhabria in 1978. With over four decades of unwavering commitment, we offer bespoke solutions crafted to fit each client's distinct needs. From meticulous portfolio management to insightful financial analyses, our services reflect a dedication to transparency and excellence. Guided by a team of seasoned professionals, we navigate the urban landscape with grace and precision, seamlessly blending interior design consultancy with property management expertise. Our legacy spans 45 years, witnessing the sale of over 10,000 apartments and fostering relationships with over 15,000 developers. With a clientele that exceeds 50 satisfied patrons, we extend our personalized services across South Mumbai, Chembur, Ghatkopar, and beyond, ensuring 365-day support and unbiased guidance tailored to your location and aspirations.
</p>
    <div className={css.teammember}>
      <div className={css.founderbox}>
      <img className={css.teammemberimage} src={image1} />
      <div className={css.teammemberinfo}>
        <h3 className={css.teammembername}>Ashok M. Chhabria</h3>
        <h4 className={css.teammemberrole}>Partner</h4>
      </div>
      </div>
      <div className={css.founderbox}>
      <img className={css.teammemberimage} src={image2} />
      <div className={css.teammemberinfo}>
        <h3 className={css.teammembername}>Ashok Chhabria</h3>
        <h4 className={css.teammemberrole}>Partner</h4>
      </div>
      </div>
      <div className={css.founderbox}>
      <img className={css.teammemberimage} src={image3} />
      <div className={css.teammemberinfo}>
        <h3 className={css.teammembername}>Dharmesh Chhabria</h3>
        <h4 className={css.teammemberrole}>Partner</h4>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Founders

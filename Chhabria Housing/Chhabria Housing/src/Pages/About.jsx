import React from 'react'
import Foot from '../Footer'
import Hero from '../Hero'
import image from '../assets/About Us.png'
import Founders from '../Founders'
import Aboutsec from '../Aboutsec'
import Testimonial from '../Testimonial.jsx';
import Achievements from '../Achievements.jsx'

function About() {
  return (
    <div>
      <Hero img={image}/>
      <Aboutsec />
      <Founders />
      <div id='testimonials'><Testimonial/></div>
      <br />
      <br />
      <Foot />
    </div>
  )
}

export default About

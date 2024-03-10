import React from 'react'
import Hero from '../Hero'
import Aboutsec from '../Aboutsec'
import Foot from '../Footer'
import WhyCaro from '../WhyCaro'
import Jobform from '../jobform'
import Testimonial from '../Testimonial.jsx';
import '../App.css'
import image from '../assets/Join Our Team.png';

function Join() {
  return (
    <div>
      <Hero  img={image}/>
      <br/>
      <WhyCaro/>
      <br/>
      <Jobform/>
      <div id='about' ><Aboutsec/></div>
      <div id='testimonials'><Testimonial/></div>
      <br/>
      <Foot/>
    </div>
  )
}

export default Join

import React from 'react'
import Hero from '../Hero'
import Aboutsec from '../Aboutsec'
import Foot from '../Footer'
import Why from '../Why'
import Jobform from '../jobform'
import '../App.css'
import image from '../assets/Join Our Team.png';

function Join() {
  return (
    <div>
      <Hero  img={image}/>
      <Why/>
      <Jobform/>
      <Aboutsec/>
      <Foot/>
    </div>
  )
}

export default Join

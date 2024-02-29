import React from 'react'
import Foot from '../Footer'
import Hero from '../Hero'
import image from '../assets/Our Policy.png'

function About() {
  return (
    <div>
      <Hero img={image}/>
      <h1>About</h1>
      <Foot />
    </div>
  )
}

export default About

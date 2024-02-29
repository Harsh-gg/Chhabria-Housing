import React from 'react'
import Hero from '../Hero'
import image from '../assets/Join Our Team.png';
import Foot from '../Footer';
import Allproj from '../allproj';

function Residential() {
  return (
    <div>
      <Hero img={image}/>
      <Allproj/>
      <Foot/>
    </div>
  )
}

export default Residential

import React from 'react'
import Hero from '../Hero'
import image from '../assets/Residential Projects.png';
import Foot from '../Footer';
import Allproj from '../allproj';

function Residential() {
  return (
    <div>
      <Hero img={image}/>
      <br/>
      <Allproj url="Data/Residential Projects.json"/>
      <br/>
      <Foot/>
    </div>
  )
}

export default Residential

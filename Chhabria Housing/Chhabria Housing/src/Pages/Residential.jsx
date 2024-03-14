import React from 'react'
import Hero from '../Hero'
import image from '../assets/Residential Projects.png';
import Foot from '../Footer';
import Allproj from '../Allproj';
import json from '../Data/Residential Projects';
import Navbar from '../Navbar';

function Residential() {
  console.log(json);
  return (
    <div>
      <Navbar />
      <Hero img={image}/>
      <br/>
      <Allproj url={json}/>
      <br/>
      <Foot/>
    </div>
  )
}

export default Residential
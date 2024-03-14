import React from 'react'
import Hero from '../Hero'
import image from '../assets/Commertial Projects.png';
import Foot from '../Footer';
import Allproj from '../Allproj';
import json from '../Data/Commertialprojects';
import Navbar from '../Navbar';

function Commertial() {
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

export default Commertial

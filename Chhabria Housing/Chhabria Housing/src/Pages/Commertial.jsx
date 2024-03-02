import React from 'react'
import Hero from '../Hero'
import image from '../assets/Commertial Projects.png';
import Foot from '../Footer';
import Allproj from '../allproj';

function Commertial() {
  return (
    <div>
      <Hero img={image}/>
      <br/>
      <Allproj url="src\Data\Commertialprojects.json"/>
      <br/>
      <Foot/>
    </div>
  )
}

export default Commertial

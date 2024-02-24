import React from 'react'
import CSS from './privacy.module.css'
import Hero from './Hero'
import image from './assets/Our Policy.png';

function Privacy() {
  return (
    <>
    <Hero img={image}/>
    <div className={CSS.Maintitle}>
      <h1>Privacy Policy Page</h1>
    </div>
    </>
  )
}

export default Privacy

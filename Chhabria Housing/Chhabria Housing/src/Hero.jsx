import React from 'react';
import image from './assets/Untitled design.png';
import HeroCSS from './Hero.module.css';
import { Button } from 'flowbite-react';


export default function Hero({ openPopup }) {
  return (
    <>
      <div id={HeroCSS.Container}>
        <div id={HeroCSS.container}>
          <img src={image} alt="homepage" width="100%" height="100%" />
          <div id={HeroCSS.text}>
            <h1>The Bridge Between Builders & Buyers</h1>
            <h3>Discover Exceptional Properties, Streamlined Process.</h3>
            <div className="flex flex-wrap gap-2" style={{justifyContent:'center'}} onClick={openPopup}>
               <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

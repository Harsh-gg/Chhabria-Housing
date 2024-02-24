import React from 'react';
import image from './assets/Join Our Team.png';
import HeroCSS from './Hero.module.css';


export default function Hero(props) {
  return (
    <>
      <div id={HeroCSS.Container}>
        <div id={HeroCSS.container}>
          <img src={props.img} alt="Joinus"/>
        </div>
      </div>
    </>
  );
}

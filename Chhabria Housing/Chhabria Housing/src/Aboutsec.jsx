import React from 'react';
import CSS from './aboutsec.module.css';
import { Carousel } from 'flowbite-react';

export default function Aboutsec() {
  return (
    <div>
      <div className={CSS.whole2}>
        <div className={CSS.title2}><h1>About Chhabria Housing</h1></div>
    <div className="grid h-72	w-full auto-cols-fr gap-4 sm:h-72 sm:grid-cols-2 xl:h-80 2xl:h-96">
      <Carousel indicators={false} pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
      <Carousel indicators={false} pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
      </div>
    </div>
  );
}
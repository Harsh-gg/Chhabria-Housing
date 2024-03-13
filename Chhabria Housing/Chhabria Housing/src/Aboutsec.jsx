import React from 'react';
import CSS from './aboutsec.module.css';
import { Carousel } from 'flowbite-react';
import img1 from './assets/trust.png';
import img2 from './assets/Integrity.png';
import img3 from './assets/Transparency.png';
import img4 from './assets/propertyman.png';
import img5 from './assets/portfolio.png';
import img6 from './assets/design.png';


export default function Aboutsec() {
  return (
      <div className={CSS.whole2}>
        <div className={CSS.title2}>
          <h1>About Chhabria Housing</h1>
        </div>
        <div className="grid h-[82vh] sm:h-96 xl:h-[60vh] w-full auto-cols-fr gap-4 gap-y-2 sm:grid-cols-2 overflow-hidden">
          <div className={CSS.carocont1}>
            <h2 className={CSS.title3}>Why Choose Us</h2>
            <Carousel indicators={false} pauseOnHover className={CSS.carouselFix}>
              <img src={img1} alt="Trust" />
              <img src={img2} alt="Transparancy" />
              <img src={img3} alt="Integrity" />
            </Carousel>
          </div>
          <div className={CSS.carocont2}>
            <h2 className={CSS.title3}>Our Services</h2>
            <Carousel indicators={false} pauseOnHover className={CSS.carouselFix}>
              <img src={img4} alt="Property Mangement" />
              <img src={img5} alt="Portfolio Management" />
              <img src={img6} alt="Design Consultancy" />
            </Carousel>
          </div>
        </div>
      </div>
  );
}

import { Carousel } from 'flowbite-react';
import css from './Why.module.css';
import image1 from './assets/why1.png';
import image2 from './assets/why2.png';
import image3 from './assets/why3.png';
import image4 from './assets/why4.png';
 

export default function WhyCaro() {
  return (
    <>
      <h1 className={css.title}>Why Work At Chhabria Housing?</h1>
      <p className={css.desc}>At Chhabria Housing, we offer a unique approach to real estate work, backed by over 45 years of industry expertise. Our dedicated team provides personalized services, unbiased guidance, and unwavering support. Choose us for a workplace where excellence meets success, and together, we navigate the dynamic and rewarding path of the real estate market.</p>
      <br/>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className={css.carouselcontainer}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundColor: '#343A40'}}>
        <img src={image1} style={{maxHeight:'80%',minHeight:'40%'}}/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundColor: '#343A40'}}>
        <img src={image2} style={{maxHeight:'80%',minHeight:'40%'}}/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundColor: '#343A40'}}>
        <img src={image3} style={{maxHeight:'80%',minHeight:'40%'}}/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundColor: '#343A40'}}>
        <img src={image4} style={{maxHeight:'80%',minHeight:'40%'}}/>
        </div>
      </Carousel>
    </div>
    </>
  );
}

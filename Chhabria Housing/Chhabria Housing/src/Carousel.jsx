import { Carousel } from 'flowbite-react';
import img1 from './assets/home1.png';
import img2 from './assets/home2.png';
import img3 from './assets/home3.png';

export default function Caro() {
  return (
    <div className="w-full h-[55vh] sm:h-full md:h-full lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] overflow-x-hidden">
      <Carousel className="w-full h-full max-h-[80vh] min-h-[30vh]" indicators={false}>
        {/* Apply responsive sizing to images using inline styles and media queries */}
        <img
          src={img1}
          alt="Discover the allure of your dream home."
          className="w-full h-full object-cover max-w-[100%] max-h-[100%]"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <img
          src={img2}
          alt="Unveil the elegance that awaits you."
          className="w-full h-full object-cover max-w-[100%] max-h-[100%]"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <img
          src={img3}
          alt="Experience the epitome of luxurious living."
          className="w-full h-full object-cover max-w-[100%] max-h-[100%]"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </Carousel>
    </div>
  );
}

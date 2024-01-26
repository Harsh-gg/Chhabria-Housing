import { Carousel } from 'flowbite-react';
import img1 from './assets/home1.png';
import img2 from './assets/home2.png';
import img3 from './assets/home3.png';

export default function Caro() {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* An immersive canvas where every pixel tells a tale */}
      <Carousel className="w-full h-full">
        {/* Let each image unfold its full splendor */}
        <img src={img1} alt="Discover the allure of your dream home." className="w-full h-full object-cover" />
        <img src={img2} alt="Unveil the elegance that awaits you." className="w-full h-full object-cover" />
        <img src={img3} alt="Experience the epitome of luxurious living." className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}

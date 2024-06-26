import React from "react";
import "./autoplaycarousel.scss";
import CarouselItem from "./CarouselItem";
import image1 from './assets/1.png';
import image2 from './assets/21.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import image7 from './assets/7.png';
import image8 from './assets/2-1.png';
import image9 from './assets/22.png';
import image10 from './assets/20.png';
import image11 from './assets/8.png';
import image12 from './assets/226.png';
import image13 from './assets/9.png';
import image14 from './assets/10.png';
import image15 from './assets/11.png';
import image16 from './assets/12.png';
import image17 from './assets/13.png';
import image18 from './assets/14.png';
import image19 from './assets/15.png';

export default function AutoplayCarousel() {
  const images = [
    { id: 1, imgUrl: image1, imgTitle: "Image 1 Title" },
    { id: 2, imgUrl: image2, imgTitle: "Image 2 Title" },
    { id: 3, imgUrl: image3, imgTitle: "Image 3 Title" },
    { id: 4, imgUrl: image4, imgTitle: "Image 4 Title" },
    { id: 5, imgUrl: image5, imgTitle: "Image 5 Title" },
    { id: 6, imgUrl: image6, imgTitle: "Image 6 Title" },
    { id: 7, imgUrl: image7, imgTitle: "Image 7 Title" },
    { id: 8, imgUrl: image8, imgTitle: "Image 8 Title" },
    { id: 9, imgUrl: image9, imgTitle: "Image 9 Title" },
    { id: 10, imgUrl: image10, imgTitle: "Image 10 Title" },
    { id: 11, imgUrl: image11, imgTitle: "Image 11 Title" },
    { id: 12, imgUrl: image12, imgTitle: "Image 12 Title" },
    { id: 13, imgUrl: image13, imgTitle: "Image 13 Title" },
    { id: 14, imgUrl: image14, imgTitle: "Image 14 Title" },
    { id: 15, imgUrl: image15, imgTitle: "Image 15 Title" },
    { id: 16, imgUrl: image16, imgTitle: "Image 16 Title" },
    { id: 17, imgUrl: image17, imgTitle: "Image 17 Title" },
    { id: 18, imgUrl: image18, imgTitle: "Image 18 Title" },
    { id: 19, imgUrl: image19, imgTitle: "Image 19 Title" },
  ];

  return (
    <div className="Outer">
      <h1 className="head">Our Associated Developers</h1>
      <div className="carousel-container">
        <div className="carousel-track">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              imgUrl={image.imgUrl}
              imgTitle={image.imgTitle}
            />
          ))}
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              imgUrl={image.imgUrl}
              imgTitle={image.imgTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
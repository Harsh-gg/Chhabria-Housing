import React from "react";
import "./autoplaycarousel.scss";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="Outer">
    <h1 className="head">Our Associated Developers</h1>
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.values(cardDetails).map((card) => {
          return (
            <CarouselItem
              key={card.id}
              imgUrl={card.imgUrl}
              imgTitle={card.title}
            ></CarouselItem>
          );
        })}
        {Object.values(cardDetails).map((card) => {
          return (
            <CarouselItem
              key={card.id}
              imgUrl={card.imgUrl}
              imgTitle={card.title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
    </div>
  );
}

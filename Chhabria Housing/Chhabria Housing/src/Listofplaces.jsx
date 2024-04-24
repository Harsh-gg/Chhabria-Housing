import React from "react";
import CSS from "./Listofplaces.module.css";
import Marquee from "react-fast-marquee";

export default function AutoplayCarousel() {

  return (
    <>
    <h1 className={CSS.head}>Our Places of Operation</h1>
    <Marquee speed={110}>
            <h1 className={CSS.carouselitem}><span className={CSS.special}>Dubai ⠀⠀⠀</span></h1>
            <h1 className={CSS.carouselitem}><span className={CSS.special}>London ⠀⠀⠀</span></h1>
            <h1 className={CSS.carouselitem}>Nariman Point ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Marine Lines ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Santacruz ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Khar ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Ghatkoper ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Powai ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Chembur ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Walkeshwar ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Breach Candy ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Nepeansea Road ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Altamount Road ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Carmichael Road ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Worli ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Juhu ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Tardeo ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Mahalakshmi ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Lower Parel ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Prabhadevi ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Dadar ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>Parel ⠀⠀⠀</h1>
            <h1 className={CSS.carouselitem}>BKC ⠀⠀⠀</h1>
  </Marquee>
  <br></br>
  <br></br>
  <br></br>
  </>
  );
}
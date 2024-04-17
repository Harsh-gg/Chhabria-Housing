import React from "react";
import CSS from "./Listofplaces.module.css";

export default function AutoplayCarousel() {

  return (
    <div className={CSS.Outer}>
      <h1 className={CSS.head}>Places Of Operation</h1>
      <div className={CSS.carouselcontainer}>
        <div className={CSS.carouseltrack}>
          <h1 className={CSS.carouselitem}>Juhu</h1>
            <h1 className={CSS.carouselitem}>Church Gate</h1>
            <h1 className={CSS.carouselitem}>Dadar </h1>
            <h1 className={CSS.carouselitem}>Bandra </h1>
            <h1 className={CSS.carouselitem}>Andheri </h1>
            <h1 className={CSS.carouselitem}>Goregaon </h1>
            <h1 className={CSS.carouselitem}>Malad </h1>
            <h1 className={CSS.carouselitem}>Kandivali </h1>
            <h1 className={CSS.carouselitem}>Borivali </h1>
            <h1 className={CSS.carouselitem}>Dahisar </h1>
            <h1 className={CSS.carouselitem}>Mira Road </h1>
            <h1 className={CSS.carouselitem}>Bhayander </h1>
            <h1 className={CSS.carouselitem}>Chembur </h1>
            <h1 className={CSS.carouselitem}>Kanjurmarg </h1>
            <h1 className={CSS.carouselitem}>Mulund </h1>

        </div>
      </div>
    </div>
  );
}
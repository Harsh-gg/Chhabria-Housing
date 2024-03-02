import React, { useState, useEffect, useRef } from "react";
import StatsCSS from "./Stats.module.css";

function Stats() {
  const [mealsDelivered, setMealsDelivered] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [menuItems, setMenuItems] = useState(0);
  const [fiveStars, setFiveStars] = useState(0);

  const statsRef = useRef(null);

  const animateValue = (startValue, endValue, setValueFunction, duration) => {
    const startTime = Date.now();

    function update() {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(1, elapsedTime / duration);

      const current = startValue + progress * (endValue - startValue);

      // Update state only if necessary
      setValueFunction(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  };

  const startAnimations = () => {
    // Determine the maximum end value to adjust the duration
    const maxEndValue = Math.max(45, 10000, 15000, 50);
    const maxDuration = 4000; // Maximum duration for animation

    // Adjusted durations for each container
    const durationMealsDelivered = maxDuration * (45 / maxEndValue);
    const durationHappyCustomers = maxDuration * (10000 / maxEndValue);
    const durationMenuItems = maxDuration * (15000 / maxEndValue);
    const durationFiveStars = maxDuration * (50 / maxEndValue);

    // Start the initial animations with non-zero values
    animateValue(0, 45, setMealsDelivered, durationMealsDelivered);
    animateValue(0, 10000, setHappyCustomers, durationHappyCustomers);
    animateValue(0, 15000, setMenuItems, durationMenuItems);
    animateValue(0, 50, setFiveStars, durationFiveStars);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimations();
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup when the component unmounts
    };
  }, []);

  const formatNumberWithPlus = (number) => {
    return `${Math.round(number)}+`;
  };

  return (
    <>
    <div className={StatsCSS.OuterBox}>
      <h1 className={StatsCSS.title}>Success Stories</h1>
      <div ref={statsRef} className={StatsCSS.wrapper}>
        <div className={StatsCSS.containerr}>
        <div className={StatsCSS.container1}>
          <i></i>
          <span className={StatsCSS.num}>{formatNumberWithPlus(mealsDelivered)}</span>
          <span className={StatsCSS.text}>Years of Expertise</span>
        </div>
        <div className={StatsCSS.container1}>
          <i></i>
          <span className={StatsCSS.num}>{formatNumberWithPlus(happyCustomers)}</span>
          <span className={StatsCSS.text}>Satisfied Clients</span>
        </div>
        <div className={StatsCSS.container1}>
          <i></i>
          <span className={StatsCSS.num}>{formatNumberWithPlus(menuItems)}</span>
          <span className={StatsCSS.text}>Apartments Sold</span>
        </div>
        <div className={StatsCSS.container1}>
          <i></i>
          <span className={StatsCSS.num}>{formatNumberWithPlus(fiveStars)}</span>
          <span className={StatsCSS.text}>Developers</span>
        </div>
        </div>
    

        <div className={StatsCSS.containerr2}>
          <img src="src\assets\untitled design.png" alt="mumbai map"/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Stats;

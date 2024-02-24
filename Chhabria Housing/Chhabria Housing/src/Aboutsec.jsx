import React from 'react';
import CSS from './aboutsec.module.css';

export default function Aboutsec() {
  return (
    <div>
      <div className={CSS.whole2}>
        <div className={CSS.title2}><h1>About Chhabria Housing</h1></div>
        <div className={CSS.approachcontainer2}>
          <div className={CSS.one2}>
            <div className={CSS.subheader2}>Services we provide</div>
            <div className={CSS.txt2}>
              <ul>
                <li>Comprehensive real estate solutions tailored to meet unique client needs</li>
                <li>Real estate portfolio management</li>
                <li>In-depth financial analysis and investment viability assessments</li>
                <li>Property management services</li>
                <li>Interior and architectural design consultancy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={CSS.approachcontainer2}>
          <div className={CSS.two2}>
            <div className={CSS.sub22}>Why choose us</div>
            <div className={CSS.txt2}>
              <ul>
                <li>Backed by over 45 years of invaluable experience in the industry</li>
                <li>Providing unbiased opinions and guidance</li>
                <li>Personalized service with a dedicated executive based on location and requirements</li>
                <li>Unwavering 365-day support</li>
                <li>Team of professionals prioritizing transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
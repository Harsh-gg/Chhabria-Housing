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
                <li>Legal services and due diligence support for secure and transparent investment</li>
                <li>Real estate advisory, sales mandate execution, and integrated marketing solutions for developers</li>
                <li>Land acquisition strategies and agency services</li>
                <li>Efficient space planning</li>
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
                <li>Expertise and intelligence about Mumbai's dynamic real estate landscape</li>
                <li>Insights that go beyond the ordinary</li>
                <li>Expert and equipped sales and marketing team committed to delivering results</li>
                <li>Trusted choice for those seeking excellence and success in every real estate venture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
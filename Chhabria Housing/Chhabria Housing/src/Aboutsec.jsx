import React from 'react'
import CSS from './aboutsec.module.css'

export default function Aboutsec() {
  return (
    <div>
        <div className={CSS.whole2}>
                <div className={CSS.title2}><h1>About Chhabria Housing</h1></div>
                <div className={CSS.approachcontainer2}>
                    <div className={CSS.one2}>
                        <div className={CSS.subheader2}>Services we provide</div>
                        <div className={CSS.txt2}>
                            <p>At Chhabria Housing, we pride ourselves on offering comprehensive real estate solutions tailored to meet the unique needs of our valued clients. For investors seeking growth and stability, our services encompass real estate portfolio management, in-depth financial analysis, and investment viability assessments. We also provide expert property management services, as well as interior and architectural design consultancy. In addition, our legal services and due diligence support ensure a secure and transparent investment environment. For developers, we offer a suite of services including real estate advisory, sales mandate execution, integrated marketing solutions, land acquisition strategies, agency services, and efficient space planning. With a commitment to excellence, we stand as your trusted partner, dedicated to maximizing value and fostering success in every real estate endeavor</p>
                        </div>
                    </div>
                </div>
            <div className={CSS.approachcontainer2}>
                <div className={CSS.two2}>
                    <div className={CSS.sub22}>Why choose us</div>
                    <div className={CSS.txt2}>
                        <p>Choosing Chhabria Housing as your real estate partner is a decision backed by over 45 years of invaluable experience in the industry. We take pride in providing unbiased opinions and guidance, ensuring that your real estate journey is informed and tailored to your unique needs. With a commitment to personalized service, we assign a dedicated executive based on your location and requirements, ensuring seamless communication and understanding. Our unwavering 365-day support, coupled with a team of professionals who prioritize transparency, guarantees that your queries are addressed promptly and comprehensively. We stand out for our expertise and intelligence about Mumbai's dynamic real estate landscape, offering insights that go beyond the ordinary. Our expert and equipped sales and marketing team are committed to delivering results, making Chhabria Housing the trusted choice for those seeking excellence and success in every real estate venture</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

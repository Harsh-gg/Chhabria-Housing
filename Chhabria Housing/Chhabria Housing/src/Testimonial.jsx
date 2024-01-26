import React from "react";
import testicss from "./testimonial.module.css";

function Testimonial() {
    return (
        <>
        <div className={testicss.outer}>
        <div className={testicss.testi}>
            <h1 className={testicss.testimonial}>What Our Clients Say About Us</h1>
            <h2 className={testicss.head}>Read firsthand experiences and testimonials from our valued clients</h2>
            <div className={testicss.testimonialcontain}>
                <div className={testicss.testimonialbox}>
                    <h3 className={testicss.name}>Rohan Shah</h3>
                    <p className={testicss.mess}>
                        Living in Mumbai's fast-paced environment, I needed a service
                        provider that matches the city's energy. These guys surpassed my
                        expectations. Kudos
                    </p>
                    <p>
                        <strong>Mumbai Central</strong>
                    </p>
                </div>

                <div className={testicss.testimonialbox}>
                    <h3 className={testicss.name}>Akash Sharma</h3>
                    <p className={testicss.mess}>
                        Reliability is key in Mumbai, and this team embodies it. Their
                        attention to detail and customer-centric approach make them stand
                        out. Great job!
                    </p>
                    <p>
                        <strong>Kanjur Marg</strong>
                    </p>
                </div>

                <div className={testicss.testimonialbox}>
                    <h3 className={testicss.name}>Ayesha Khan</h3>
                    <p className={testicss.mess}>
                        Living in the bustling city of Mumbai, finding trustworthy services
                        can be challenging. This team not only meets expectations but
                        exceeds them. Truly satisfied!
                    </p>
                    <p>
                        <strong>Borivali</strong>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Testimonial;

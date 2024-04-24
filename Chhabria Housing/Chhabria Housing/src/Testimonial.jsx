import React, { useRef, useEffect, useState } from "react";
import testicss from "./testimonial.module.css";

function Testimonial() {
    const [isVisible, setIsVisible] = useState(false);
    const testimonialRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(testimonialRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={testimonialRef} className={`${testicss.outer} ${isVisible && testicss.visible}`}>
            <div className={testicss.testi}>
                <h1 className={testicss.testimonial}>What Our Clients Say About Us</h1>
                <div className={testicss.testimonialcontain}>
                    <div className={`${testicss.testimonialbox} ${isVisible && testicss.fadeIn}`}>
                        <h3 className={testicss.name}>Kumar Shah</h3>
                        <p className={testicss.mess}>
                            Living in Mumbai's fast-paced environment, I needed a service
                            provider that matches the city's energy. These guys surpassed my
                            expectations. Kudos
                        </p>
                        <p>
                            <strong>Juhu</strong>
                        </p>
                    </div>

                    <div className={`${testicss.testimonialbox} ${isVisible && testicss.fadeIn}`}>
                        <h3 className={testicss.name}>Dilip Verma</h3>
                        <p className={testicss.mess}>
                            Reliability is key in Mumbai, and this team embodies it. Their
                            attention to detail and customer-centric approach make them stand
                            out. Great job!
                        </p>
                        <p>
                            <strong>Lower Parel</strong>
                        </p>
                    </div>

                    <div className={`${testicss.testimonialbox} ${isVisible && testicss.fadeIn}`}>
                        <h3 className={testicss.name}>Tushar Gadge</h3>
                        <p className={testicss.mess}>
                            Living in the bustling city of Mumbai, finding trustworthy services
                            can be challenging. This team not only meets expectations but
                            exceeds them. Truly satisfied!
                        </p>
                        <p>
                            <strong>BKC</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

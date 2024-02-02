import React from 'react';
import css from './Why.module.css';

export default function Why(){
  return(
    <>
    <section className={css.whyworkatrioga}>
      <strong className={css.title}>Why work at Chhabria Housing?</strong>
      <p className={css.desc}>
      At Chhabria Housing, we offer a unique approach to real estate work, backed by over 45 years of industry expertise. Our dedicated team provides personalized services, unbiased guidance, and unwavering support. Choose us for a workplace where excellence meets success, and together, we navigate the dynamic and rewarding path of the real estate market.
      </p>
      <ul className={css.benefitslist}>
        <li className={css.benefititem}>
          <strong className={css.benefittitle}>Dynamic Learning Environment</strong>
          <p className={css.benefitdescription}>Join a team with 45+ years of expertise for unparalleled learning and growth in the ever-evolving real estate market.</p>
        </li>
        <li className={css.benefititem}>
          <strong className={css.benefittitle}>Personalized Career Development</strong>
          <p className={css.benefitdescription}>Experience tailored mentorship for your career goals. Our commitment to your growth is a 365-day journey.</p>
        </li>
        <li className={css.benefititem}>
          <strong className={css.benefittitle}>Transparent Work Culture</strong>
          <p className={css.benefitdescription}>Experience transparency in action. We value and recognize your contributions in an open and collaborative environment.</p>
        </li>
        <li className={css.benefititem}>
          <strong className={css.benefittitle}>Proven Career Advancement</strong>
          <p className={css.benefitdescription}>
          Choose a career with a trusted company. We nurture talent and deliver success in every aspect of the real estate industry, offering a career beyond the ordinary.
          </p>
        </li>
      </ul>
    </section>
    </>
  );
};

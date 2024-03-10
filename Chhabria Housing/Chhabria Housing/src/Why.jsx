import React from 'react';
import css from './Why.module.css';

export default function Why(props){
  return(
    <>
    <section className={css.whyworkatrioga}>
      <ul className={css.benefitslist}>
        <li className={css.benefititem}>
          <strong className={css.benefittitle}>{props.title1}</strong>
          <p className={css.benefitdescription}>{props.desc1}</p>
        </li>
      </ul>
    </section>
    </>
  );
};

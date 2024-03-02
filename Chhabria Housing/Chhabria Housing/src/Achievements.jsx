import React from 'react'
import css from './Achievements.module.css'

function Achievements() {
  return (
    <div>  
 <div className={css.wrapper}>
    <div className={css.centerline}>
      <a href="#" className={css.scrollicon}><i className={css.fasfacaretup}></i></a>
    </div>
    <div className={css.row1}>
      <section>
        <i className={css.iconfasfastar}></i>
        <div className={css.details}>
          <span className={css.title}>CERTIFICATE OF ACHIEEVEMENT</span>
          <span>Nov 2021</span>
        </div>
        <p>Signature Business Park, Chembur.</p>
        <div className={css.bottom}>
        </div>
      </section>
    </div>
    <div className={css.row2}>
      <section>
        <i className={css.iconfasfastar}></i>
        <div className={css.details}>
          <span className={css.title}>CERTIFICATE OF APPRECIATION</span>
          <span>Aug 2022</span>
        </div>
        <p>Godrej RKS Legwnds</p>
        <div className={css.bottom}>
        </div>
      </section>
    </div>
    <div className={css.row1}>
      <section>
        <i className={css.iconfasfastar}></i>
        <div className={css.details}>
          <span className={css.title}>CERTIFICATE OF APPRECIATION</span>
          <span>Nov 2022</span>
        </div>
        <p>The EpiCentre- THE ONE, Chembur.</p>
        <div className={css.bottom}>
        </div>
      </section>
    </div>
    <div className={css.row2}>
      <section>
        <i className={css.iconfasfastar}></i>
        <div className={css.details}>
          <span className={css.title}>CERTIFICATE OF APPRECIATION</span>
          <span></span>
        </div>
        <p>Here & Now, Chembur</p>
        <div className={css.bottom}>
        </div>
      </section>
    </div>
    <div className={css.row1}>
      <section>
        <i className={css.iconfasfastar}></i>
        <div className={css.details}>
          <span className={css.title}>CERTIFICATE OF APPRECIATION</span>
          <span>Jun 2022</span>
        </div>
        <p>Vardhan Heights, Chembur</p>
        <div className={css.bottom}>
        </div>
      </section>
    </div>
    <div className={css.row2}>
      <section>
        <i className={css.iconfasfastar}></i>
        <div className={css.details}>
          <span className={css.title}>CERTIFICATE OF APPRECIATION</span>
          <span>Dec 2021</span>
        </div>
        <p>Supreme Connect Club</p>
        <div className={css.bottom}>
        </div>
      </section>
    </div>
  </div>
    </div>
  )
}

export default Achievements

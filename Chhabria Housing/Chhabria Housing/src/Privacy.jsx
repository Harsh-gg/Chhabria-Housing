import React from 'react'
import CSS from './privacy.module.css'
import Hero from './Hero'
import image from './assets/Our Policy.png';

function Privacy() {
  return (
    <>
    <Hero img={image}/>
    <div className={CSS.privacybox}>
    <div className={CSS.Maintitle}>
      <h1>Privacy Policy of Chhabria Housing</h1>
    </div>
      <p>The Content is for information purpose only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability, images for representation purpose only. All rights are reserved with the respective Owners / Developers.The information provided herein has been collected from publicly available sources, yet it is to be verified from RERA rules. We provide this information to help our users find publicly available data in structured form. Chhabria Housing LLP shall neither be responsible nor reliable for any inaccuracy in the information provided here and therefore the customers are requested to independently validate the information from the respective developers / Owners before making their decision related to properties displayed here. Chhabria Housing LLP and other representatives shall not be liable for any action taken.</p>
    </div>
    </>
  )
}

export default Privacy

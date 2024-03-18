import React from "react";
import CSS from "./Projsection.module.css";
import img1 from "./assets/Birla.png";
import img2 from "./assets/minerva.png";
import img3 from "./assets/godrej avenue.png";

export default function Projsection({openPopup}) {
    return(
        <>
            <div className={CSS.outerm}>
                <h1>Featured Projects</h1>
                <div className={CSS.gridcontainer}>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img1} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>Birla Niyaara Worli</h2>
                            <p className={CSS.special}>Special Feature: Longe Bar terrace, Sea View Homes</p>
                            <p className={CSS.propertylocation}>📍 Worli</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>🏠 Upto 8 BHK</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>📞 Talk To Our Advisor</button>
                            <a href="https://birlaestateworli.in/"><button className={CSS.explorebutton}>🏢 Explore Property</button></a>
                        </div>
                    </div>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img2} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Minerva</h2>
                            <p className={CSS.special}>Special Feature: Screening Room, Multisport Court</p>
                            <p className={CSS.propertylocation}>📍 Mahalakshmi</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>🏠 3.5 & 4 BHK</p>
                            </div>
                          
                            <button className={CSS.contactbutton} onClick={openPopup}>📞 Talk To Our Advisor</button>
                            <a href="https://theshapoorjipallonjiminerva.co.in/"><button className={CSS.explorebutton}>🏢 Explore Property</button></a>
                        </div>
                    </div>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img3} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>Godrej Avenue Eleven</h2>
                            <p className={CSS.special}>Special Feature: Rooftop Infinity Pool, Olympic length pool</p>
                            <p className={CSS.propertylocation}>📍 Mahalaxmi.</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>🏠 4 BHK</p>
                            </div>
                        
                            <button className={CSS.contactbutton}onClick={openPopup}>📞 Talk To Our Advisor</button>
                            <a href="https://godrejpropertiesmahalaxmi.co.in/"><button className={CSS.explorebutton}>🏢 Explore Property</button></a>
                        </div>
                    </div>            
                </div>
        </div>
        </>
    )
}
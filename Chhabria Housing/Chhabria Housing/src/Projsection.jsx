import React from "react";
import CSS from "./Projsection.module.css";
import img1 from "./assets/Birla.png";
import img2 from "./assets/minerva.png";
import img3 from "./assets/godrej avenue.png";
import img4 from "./assets/tridhaatu.png";
import img5 from "./assets/hubtown.png";
import img6 from "./assets/godrej sky.png";

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
                            <h2 className={CSS.propertyname}>Birla Niyara Warli</h2>
                            <p className={CSS.special}>Special Feature: Longe Bar terrace</p>
                            <p className={CSS.propertylocation}>Worli</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>Upto 8 BHK</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="https://birlaestateworli.in/"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img2} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Minerva</h2>
                            <p className={CSS.special}>Special Feature: Screening Room</p>
                            <p className={CSS.propertylocation}>Mahalakshmi</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>3.5 & 4 BHK</p>
                            </div>
                          
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="https://theshapoorjipallonjiminerva.co.in/"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img3} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>Godrej Avenue Eleven</h2>
                            <p className={CSS.special}>Special Feature: Rooftop Infinity Pool</p>
                            <p className={CSS.propertylocation}>Mahalaxmi.</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>4 BHK</p>
                            </div>
                        
                            <button className={CSS.contactbutton}onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="https://godrejpropertiesmahalaxmi.co.in/"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>     
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img4} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>Tridhaatu Morya </h2>
                            <p className={CSS.special}>Special Feature: Swimming Pool</p>
                            <p className={CSS.propertylocation}>Chembur</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>1, 2 & 3 BHK</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="https://tridhaatumoryachembur.co.in/"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>     
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img5} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>Hubtown Seasons</h2>
                            <p className={CSS.special}>Special Feature: Open Air GYMNASIUM</p>
                            <p className={CSS.propertylocation}>Chembur East</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2, 3 & 4 BHK</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="https://hubtownseasons-chembur.in/"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>     
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img6} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>Godrej Sky Terraces</h2>
                            <p className={CSS.special}>Special Feature: Celestial Courtyard</p>
                            <p className={CSS.propertylocation}>Chembur</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>3 & 4 BHK</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="https://godrejskyterraces.com/"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
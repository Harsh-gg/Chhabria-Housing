import React from "react";
import CSS from "./Projsection.module.css";
import img from "./assets/test.jpg"

export default function Projsection({openPopup}) {
    return(
        <>
            <div className={CSS.outerm}>
                <h1>Featured Projects</h1>
                <div className={CSS.gridcontainer}>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Prestige City</h2>
                            <p className={CSS.special}>Special Feature :</p>
                            <p className={CSS.propertylocation}>Mulund</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2 & 3 BHK</p>
                                <p className={CSS.propertyprice}>1.90 Cr* Onwards</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="#"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Prestige City</h2>
                            <p className={CSS.special}>Special Feature :</p>
                            <p className={CSS.propertylocation}>Mulund</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2 & 3 BHK</p>
                                <p className={CSS.propertyprice}>1.90 Cr* Onwards</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="#"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Prestige City</h2>
                            <p className={CSS.special}>Special Feature :</p>
                            <p className={CSS.propertylocation}>Mulund</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2 & 3 BHK</p>
                                <p className={CSS.propertyprice}>1.90 Cr* Onwards</p>
                            </div>
                            <button className={CSS.contactbutton}onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="#"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>     
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Prestige City</h2>
                            <p className={CSS.special}>Special Feature :</p>
                            <p className={CSS.propertylocation}>Mulund</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2 & 3 BHK</p>
                                <p className={CSS.propertyprice}>1.90 Cr* Onwards</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="#"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>     
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Prestige City</h2>
                            <p className={CSS.special}>Special Feature :</p>
                            <p className={CSS.propertylocation}>Mulund</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2 & 3 BHK</p>
                                <p className={CSS.propertyprice}>1.90 Cr* Onwards</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="#"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>     
                    <div className={CSS.propertycard}>
                        <div className={CSS.propertyimage}>
                            <img src={img} alt="Property Image" />
                        </div>
                        <div className={CSS.propertydetails}>
                            <h2 className={CSS.propertyname}>The Prestige City</h2>
                            <p className={CSS.special}>Special Feature :</p>
                            <p className={CSS.propertylocation}>Mulund</p>
                            <div className={CSS.propertyfeatures}>
                                <p className={CSS.propertytype}>2 & 3 BHK</p>
                                <p className={CSS.propertyprice}>1.90 Cr* Onwards</p>
                            </div>
                            <button className={CSS.contactbutton} onClick={openPopup}>Talk To Our Advisor</button>
                            <a href="#"><button className={CSS.explorebutton}>Explore Property</button></a>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
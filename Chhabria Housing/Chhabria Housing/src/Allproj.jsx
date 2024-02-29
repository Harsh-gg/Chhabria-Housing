import React, { useState, useEffect } from 'react';
import CSS from './Projsection.module.css';

function Allproj() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Read data from local JSON file (replace with your file path)
    fetch('Data/tableConvert.com_mz0jj1.json') // Replace with your JSON file path
      .then(response => response.json())
      .then(data => {
        setProjects(data); // Set initial projects data
      })
      .catch(error => console.error(error)); // Handle potential errors
  }, []);

  return (
    <div>
      <div className={CSS.outerm}>
        <h1>Featured Projects</h1>
        <div className={CSS.gridcontainer}>
          {projects.map((project) => (
            <div key={project.id} className={CSS.propertycard}>
              <div className={CSS.propertyimage}>
                <img src={project.image} alt="Property Image" />
              </div>
              <div className={CSS.propertydetails}>
                <h2 className={CSS.propertyname}>{project.name}</h2>
                <p className={CSS.special}>Special Feature :</p>
                <p className={CSS.propertylocation}>{project.area}</p>
                <div className={CSS.propertyfeatures}>
                  <p className={CSS.propertytype}>{project.bhk} BHK</p>
                  <p className={CSS.propertyprice}>{project.price}</p>
                </div>
                <button className={CSS.contactbutton}>Talk To Our Advisor</button>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <button className={CSS.explorebutton}>Explore Property</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allproj;

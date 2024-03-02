import React, { useState, useEffect } from 'react';
import CSS from './Allproj.module.css';

function Allproj(props) {
  const [projects, setProjects] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const url=props.url;
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProjects(data); 
      })
      .catch(error => console.error(error)); 
  }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredProjects = projects.filter(project => {
    return !project.region || (selectedRegion && project.region === selectedRegion);
  });  

  return (
    <div>
      <div className={CSS.outerm}>
        <h1>All Projects</h1>
          <select value={selectedRegion} onChange={handleRegionChange} className={CSS.option}>
            <option value="">Select Region</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="central">Central</option>
          </select>
        <div className={CSS.gridcontainer}>

          {filteredProjects.length === 0 ? (
            <p>No projects found in this region.</p>
          ) : (
            filteredProjects.map((project) => (
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
                </div>
                <button className={CSS.contactbutton}>Talk To Our Advisor</button>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <button className={CSS.explorebutton}>Explore Property</button>
                </a>
              </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Allproj;

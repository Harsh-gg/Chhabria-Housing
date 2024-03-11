import React, { useState, useEffect } from 'react';
import CSS from './Allproj.module.css';


function Allproj(props) {
  const [projects, setProjects] = useState([]);
  const [selectedArea, setSelectedRegion] = useState('');
  const url=props.url;
  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setProjects(data); 
  //     })
  //     .catch(error => console.error(error)); 
  // }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredProjects = url.filter(project => {
    return !project.area || (selectedArea && project.area === selectedArea);
  });  

  return (
    <div>
      <div className={CSS.outerm}>
        <h1>All Projects</h1>
          <select value={selectedArea} onChange={handleRegionChange} className={CSS.option}>
            <option value="">Select Area</option>
            <option value="Worli">Worli</option>
            <option value="Chembur">Chembur</option>
            <option value="Wadala">Wadala</option>
            <option value="BKC">BKC</option>
            <option value="Lokhandwala">Lokhandwala</option>
            <option value="Parel">Parel</option>
            <option value="Lower Parel">Lower Parel</option>
            <option value="Mahalaxmi">Mahalaxmi</option>
          </select>

        <div className={CSS.gridcontainer}>

          {filteredProjects.length === 0 ? (
            <p className={CSS.def}>No projects found in this region.</p>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className={CSS.propertycard}>
                <div className={CSS.propertyimage}>
                <img src={project.image} alt="Property Image" />
              </div>
              <div className={CSS.propertydetails}>
                <h2 className={CSS.propertyname}>{project.name}</h2>
                <p className={CSS.propertylocation}>📍{project.area}</p>
                <div className={CSS.propertyfeatures}>
                  <p className={CSS.propertytype}>🏠 Upto {project.bhk} BHK</p>
                </div>
                <a href='https://wa.me/9821858892'><button className={CSS.contactbutton}>📞Talk To Our Advisor</button></a>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <button className={CSS.explorebutton}>🏢Explore Property</button>
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
import React from "react";
import faceappLogo from "../public/assets/projects/faceapp.png";
import crownLogo from "../public/assets/projects/crwnclothing.png";
import coffeeLogo from "../public/assets/projects/coffeeconnoisseur.png";
import airbnbLogo from "../public/assets/projects/airbnb.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="pt-[4rem]">
      <div className="w-full h-screen mb-[800px] sm:mb-[100px]">
        <div className="max-w-[1240px] mx-auto px-2 py-16 h-screen">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectItem
              title="Face Recognition App"
              backgroundImg={faceappLogo}
              projectUrl="/facerecognition"
              technology="React JS | Firebase"
            />
            <ProjectItem
              title="Crown Clothing"
              backgroundImg={crownLogo}
              projectUrl="/crownclothing"
              technology="React JS | Firebase"
            />
            <ProjectItem
              title="Coffee Connoisseur"
              backgroundImg={coffeeLogo}
              projectUrl="/coffeeconnoisseur"
              technology="Next JS | Airtable"
            />
            <ProjectItem
              title="AirBnb 2.0"
              backgroundImg={airbnbLogo}
              projectUrl="/airbnb"
              technology="Next JS | MapBox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import crownLogo from "../public/assets/projects/crwnclothing.png";
import coffeeLogo from "../public/assets/projects/coffeeconnoisseur.png";
import airbnbLogo from "../public/assets/projects/airbnb.png";
import metaLogo from "../public/assets/projects/metamessenger.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="py-[9rem]">
      <div className="max-w-[1240px] mx-auto">
        <div className="">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectItem
              title="Meta Messenger"
              backgroundImg={metaLogo}
              projectUrl="/metamessenger"
              technology="Next JS | Upstash"
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

import React from "react";
import faceappLogo from "../public/assets/projects/faceapp.png";
import crownLogo from "../public/assets/projects/crwnclothing.png";
import monstersLogo from "../public/assets/projects/monstersrolodex.png";
import particlesLogo from "../public/assets/projects/particles.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16 h-screen">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Face App"
            backgroundImg={faceappLogo}
            projectUrl="/facerecognition"
          />
          <ProjectItem
            title="Crown Clothing"
            backgroundImg={crownLogo}
            projectUrl="/crownclothing"
          />
          <ProjectItem
            title="Monsters Rolodex"
            backgroundImg={monstersLogo}
            projectUrl="/monstersrolodex"
          />
          <ProjectItem
            title="Particle Generator"
            backgroundImg={particlesLogo}
            projectUrl="/particlegenerator"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

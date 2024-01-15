import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Training Center Website",
    description: "",
    image: "/images/projects/TrainingCenter.png",

    gitUrl: "https://github.com/malekabd/Masaq.git",
    previewUrl: "https://trainingcenter.onrender.com/",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description: "",
    image: "/images/projects/MernEstate.png",
    gitUrl: "https://github.com/malekabd/MERN-FULL-STACK-PROJECT.git",
    previewUrl: "https://mern-estate-kfbm.onrender.com/",
  },
];
export default function projectsSection() {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
}

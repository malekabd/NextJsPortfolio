"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Training Center Website",
    description: "",
    image: "/images/projects/1.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description: "",
    image: "/images/projects/2.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];
export default function projectsSection() {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => {
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />;
        })}
      </div>
    </>
  );
}

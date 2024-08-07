"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "React portfolio website",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Backend`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React portfolio website",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Frontend`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React portfolio website",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Backend`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React portfolio website",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Frontend`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React portfolio website backend",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Backend`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React portfolio website backend",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Backend`],
    gitUrl: "/",
    previewUrl: "/",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const fileteredProjects = projectsData.filter((project) => 
    project.tags.includes(tag)
  );

  return (
    <>
      <h2 className="text-white text-center font-extrabold text-5xl">
        My Projects
      </h2>
      <div className="flex text-white flex-row justify-center items-center text-2xl gap-10 mt-10">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {fileteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsSection;

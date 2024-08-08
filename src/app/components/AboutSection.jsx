"use client";
import Image from "next/image";
import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.je</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>React.js</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span>12th</span> Shaiffali Public School, Gr.Noida
        </li>
        <li>Miet, Gr.Noida</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>3 months of Intership experience at IBM</li>
        <li>2 months of Internship experience at MongosOrange</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div>
          <Image
            src="/images/about-us.jpg"
            width={500}
            height={500}
            alt="about-image"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-base lg:text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            enim odio sed sunt, obcaecati ipsa culpa voluptate placeat dolore.
            In? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, alias?
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8 h-[250px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

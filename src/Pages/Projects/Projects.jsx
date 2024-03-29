import React, { useState } from 'react';
import Heading from '../../Components/Ui/Heading';
import Section from '../../Components/Layouts/Section/Section';
import ProjectItem from './components/ProjectItem';

const db = [
    {
        title: "Leksaksbilen",
        skills: ["webflow", "figma"],
        url: null,
        github: null,
        description: "Project for an organization where they wanted a donations site where people could donate toys or sign up for events to get a toy.",
        image: "/assets/projects/lek.png",
    },
    {
        title: "HIVE Malmö",
        skills: ["svelte", "firebase", "css", "figma"],
        url: "https://hivemalmo.se/",
        github: null,
        description: "Student-run organization bridging the gap between media students and industry in Malmö closer. Our aim is to connect students and businesses and to drive the industry forward.",
        image: "/assets/projects/hive.png",
    },
    {
        title: "Portfolio",
        skills: ["react", "tailwind"],
        url: "https://liamhjalmarsson.se/",
        github: "https://github.com/LiamHjalmarsson/portfolio",
        description: "My portfolio",
        image: "/assets/projects/portfolio.png",
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <div className="flex flex-col gap-8 justify-start items-start w-full min-h-[5/6]">
                <Heading heading="Projects" />

                <div className="flex justify-center flex-wrap w-full gap-12 lg:gap-8">
                    {
                        db.map((item, index) => (
                            <ProjectItem item={item} index={index} key={index} />
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Projects;

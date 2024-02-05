import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Section from '../../Components/Layouts/Section/Section';
import ProjectItem from './components/ProjectItem';


const db = [
    {
        title: "Leksaksbilen",
        skills: ["webflow", "figma"],
        url: "/",
        description:"leksaksbilen",
        image: "/assets/projects/lek.png",
    },
    {
        title: "HIVE",
        skills: ["svelte", "firebase", "css", "figma"],
        url: "/",
        description: "mochamovies",
        image: "/assets/projects/hive.png",
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <div className="flex flex-col gap-8 justify-start items-start w-full min-h-[5/6]">
                <Heading heading="Projects" />

                <div className="flex justify-center flex-wrap w-full gap-8">
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

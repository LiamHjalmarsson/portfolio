import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Section from '../../Components/Layouts/Section/Section';
import ProjectItem from './components/ProjectItem';


const db = [
    {
        title: "Leksaksbilen",
        skills: ["webflow", "figma"],
        url: false,
        description: "Project for an organisation where they wanted a donations page where people can donate toys that are not used and people can sign up for events where they can get toys",
        image: "/assets/projects/lek.png",
    },
    {
        title: "HIVE Malmö",
        skills: ["svelte", "firebase", "css", "figma"],
        url: "https://hivemalmo.se/",
        description: "Student-run organization bridging the gap between media students and industry in Malmö closer. Our aim: is to connect students and businesses and drive the industry forward.",
        image: "/assets/projects/hive.png",
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

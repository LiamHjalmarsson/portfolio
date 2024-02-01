import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Section from '../../Components/Layouts/Section/Section';


const db = [
    {
        title: "leksaksbilen",
        used: "webflow, figma",
        url: "/",
        description: "leksaksbilen",
        image: "/placeholder.png",
    },
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
        image: "/public/placeholder.png",
    },
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
        image: "/public/placeholder.png",
    },
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
        image: "/public/placeholder.png",
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <div className="flex flex-col gap-8 justify-start items-start w-full min-h-[5/6]">
                <Heading heading="Projects" />

                <div className="flex justify-center flex-wrap w-full gap-8 md:gap-6 lg:gap-8">
                    {
                        db.map((item, index) => (
                            <div key={index} className='min-w-56 md:min-w-72 lg:min-w-80 flex-1 h-60 lg:h-72 relative rounded-md'>
                                <div className={`w-full h-full border border-nobel_400 p-8 bg-cover bg-center absolute rounded-md`} style={{ backgroundImage: `url(${item.image})`} }></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Projects;

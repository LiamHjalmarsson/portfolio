import React from 'react';
import Heading from '../../Components/Heading/Heading';


const db = [
    {
        title: "leksaksbilen",
        used: "webflow, figma",
        url: "/",
        description: "leksaksbilen",
        image: "",
    },
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
        image: "",
    },
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
        image: "",
    },
]

const Projects = () => {
    return (
        <div className="m-32 w-full h-screen flex justify-start items-start flex-col">
            <Heading heading="Projects" />


            <div className="grid grid-cols-3     w-full gap-8">
                {
                    db.map((item) => (
                        <div className='w-full border border-nobel_400 p-8'>
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;

import React from 'react';
import Heading from '../../Components/Heading/Heading';


const db = [
    {
        title: "leksaksbilen",
        used: "webflow, figma",
        url: "/",
        description: "leksaksbilen",
        image: "../../../public/placeholder.png",
    },
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
        image: "../../../public/placeholder.png",
    },

]

const Projects = () => {
    return (
        <div className="m-32 w-full h-screen flex justify-start items-start flex-col">
            <Heading heading="Projects" />


            <div className="flex justify-center flex-wrap w-full gap-8">
                {
                    db.map((item, index) => (
                        <div key={item.title} className={`w-[350px] flex-1  min-w-80 border border-nobel_400 p-8 bg-cover bg-center h-96`} style={{ backgroundImage: `url(${item.image})`}}>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;

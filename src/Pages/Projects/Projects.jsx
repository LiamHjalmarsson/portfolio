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
    {
        title: "mochamovies",
        used: "js, php, css, figma",
        url: "/",
        description: "mochamovies",
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
        <div className="m-32 w-full h-screen flex justify-start items-start flex-col p-4">
            <Heading heading="Projects" />


            <div className="flex justify-center flex-wrap w-full gap-4 padd:gap-6 laptop:gap-8">
                {
                    db.map((item, index) => (
                        <div key={index} className='min-w-56 padd:min-w-72 laptop:min-w-80 flex-1  h-72 padd:h-80 laptop:h-96 relative'>
                            <div className={`w-full h-full border border-nobel_400 p-8 bg-cover bg-center absolute`} style={{ backgroundImage: `url(${item.image})`} }>
                            </div>
                            <div className='bg-nobel_900 opacity-10 w-full h-full'>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;

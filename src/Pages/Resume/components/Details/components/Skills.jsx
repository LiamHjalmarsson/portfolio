import React from 'react';
import Detail from './components/Container';

const Skills = () => {
    let skillDetails = [
        {
            skill: "html",
            icon: "bg-html"
        },
        {
            skill: "css",
            icon: "bg-css"
        },
        {
            skill: "js",
            icon: "bg-js"
        },
        {
            skill: "react",
            icon: "bg-react"
        },
        {
            skill: "tailwind",
            icon: "bg-tailwind"
        },
        {
            skill: "php",
            icon: "bg-php"
        },
        {
            skill: "laravel",
            icon: "bg-laravel"
        },
        {
            skill: "figma",
            icon: "bg-figma"
        },
        {
            skill: "webflow",
            icon: "bg-webflow"
        },
        {
            skill: "svelte",
            icon: "bg-svelte"
        },
    ];


    return (
        <Detail id="skills">
            <div className='flex gap-8 flex-wrap'>
                {skillDetails.map((skill, index) => (
                    <div key={index} className='h-16 w-16 shadow-nobel_300 shadow-sm rounded-full'>
                        <div className={`h-full w-full ${skill.icon} rounded-full bg-contain bg-no-repeat bg-center`}></div>
                    </div>
                ))}
            </div>
        </Detail>
    );
}

export default Skills;

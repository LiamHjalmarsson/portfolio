import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';

const Details = ({show}) => {

    let skillDetails = [
        {
            skill: "Javascript",
            rating: 80
        },  
        {
            skill: "React Js",
            rating: 60
        },  
    ];

    let projectDetails = [
        {
            title: "Portfolio",
            used: ["React", "Node", "Tailwind"],
            url: "",
            github: "",
            image: "",
        },
        {
            title: "Leksaksbilen",
            used: ["Webflow", "Figma"],
            url: "",
            github: "",
            image: "",
        },
    ];
    
    return (
        <div className='flex relative h-[400px]'>
            <CSSTransition
                in={show === 'Education'}
                timeout={500}
                classNames="details"
                unmountOnExit
            >
                <Education />
            </CSSTransition>

            <CSSTransition
                in={show === 'Work'}
                timeout={500}
                classNames="details"
                unmountOnExit
            >
                <Work />
            </CSSTransition>

            <CSSTransition
                in={show === 'Skills'}
                timeout={500}
                classNames="details"
                unmountOnExit
            >
                <Skills skills={skillDetails} />
            </CSSTransition>

            <CSSTransition
                in={show === 'Projects'}
                timeout={500}
                classNames="details"
                unmountOnExit
            >
                <Projects projects={projectDetails} />
            </CSSTransition>
        </div>
    );
}

export default Details;

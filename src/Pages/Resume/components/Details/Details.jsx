import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';

const Details = ({show}) => {

    let skillDetails = [
        {
            skill: "Javascript",
        },  
        {
            skill: "React",
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

import React from 'react';
import Heading from '../Heading/Heading';

const Projects = ({projects}) => {

    return (
        <div className='resume-screen-container projects-container justify-center h-full w-full p-4 bg-indigo-600 text-slate-200 absolute' key="projects">
            {projects.map((project, index) => (
                <Heading 
                    key={index}
                    heading={project.title}
                />
            ))}
        </div>
    );
}

export default Projects;

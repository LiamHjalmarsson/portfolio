import React from 'react';
import Heading from '../Heading/Heading';

const Projects = ({projects}) => {

    return (
        <div className='absolute justify-center min-h-40 grid grid-cols-2 gap-8 w-full' key="projects">
            {projects.map((project, index) => (
                <div className="bg-green_400 flex flex-col justify-center h-full p-8">
                    <Heading 
                        key={index}
                        heading={project.title}
                    />
                </div>
            ))}
        </div>
    );
}

export default Projects;

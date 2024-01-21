import React from 'react';

const Skills = ({skills}) => {
    return (
        <div className='resume-screen-container programing-skills-container h-full w-full p-4 bg-indigo-600 text-slate-200 absolute' key="skills">
            {skills.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'>
                        <p>
                            {skill.skill}
                        </p>
                        <div className='skill-percentage'>
                            <div style={{ width: skill.rating + "%" }} className='active-percentage'>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;

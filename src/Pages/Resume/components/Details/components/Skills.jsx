import React from 'react';

const Skills = ({skills}) => {
    return (
        <div className='absolute justify-center min-h-40 grid grid-cols-3 gap-8 w-full' key="skills">
            {skills.map((skill, index) => (
                <div className="bg-green_400 flex flex-col justify-center h-full p-8" key={index}>
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

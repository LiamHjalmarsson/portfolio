import React from 'react';

const Skill = ({item}) => {
    return (
        <>
            <div className="h-16 w-16 p-2 shadow-nobel_300 shadow-sm rounded-full mb-2">
                <div className={`h-full w-full ${item.icon} rounded-full bg-contain bg-no-repeat bg-center`}></div>
            </div>
            <div>
                <h2 className='text-sm'>
                    {item.skill}
                </h2>
            </div>
        </>
    );
}

export default Skill;

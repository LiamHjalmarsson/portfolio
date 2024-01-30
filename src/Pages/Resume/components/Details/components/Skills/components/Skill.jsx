import React from 'react';

const Skill = ({item}) => {
    return (
        <>
            <div className="h-16 w-16 shadow-nobel_300 shadow-sm rounded-full mb-2 flex justify-center items-center">
                <div className={`h-14 w-14 ${item.icon} bg-contain bg-no-repeat bg-center rounded-full`}></div>
            </div>
            <div className=''>
                <h2 className='text-sm'>
                    {item.skill}
                </h2>
            </div>
        </>
    );
}

export default Skill;
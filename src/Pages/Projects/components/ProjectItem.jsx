import React from 'react';

const ProjectItem = ({index, item}) => {
    return (
        <div key={index} className='w-full h-fit rounded-md p-4 border border-nobel_300'>
            <div className={`w-full bg-cover bg-center rounded-md h-96`} style={{ backgroundImage: `url(${item.image})`} }></div>
            <div className='mt-4 flex items-center'>
                <h2 className='text-xl font-bold tracking-widest'>
                    {
                        item.title
                    }
                </h2>
                <div className='flex w-full justify-end gap-4'>
                    {
                        item.skills.map((skill, index) => (
                            <div className='p-2 border border-nobel_200 rounded-md' key={index}>
                                {skill}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;

import React from 'react';

const ProjectItem = ({index, item}) => {
    return (
        <div key={index} className='min-w-56 md:min-w-72 lg:min-w-80 flex-1 h-60 lg:h-72 relative rounded-md'>
            <div className={`w-full h-full border border-nobel_400 p-8 bg-cover bg-center absolute rounded-md`} style={{ backgroundImage: `url(${item.image})`} }></div>
        </div>
    );
}

export default ProjectItem;

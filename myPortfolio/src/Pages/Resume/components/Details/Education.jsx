import React from 'react';
import Heading from '../Heading/Heading';

const Education = () => {
    return (
        <div className='resume-screen-container absolute justify-center h-full flex flex-col w-full p-4 bg-indigo-600 text-slate-200' key="education">
            <Heading 
                heading="Malmö University, Sweden"
                subheading="Bachelor degree in Media production and processdesign"
                fromDate="2021"
                toDate="2024"
            />
        </div>
    );
}

export default Education;

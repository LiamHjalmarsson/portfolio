import React from 'react';
import Heading from '../Heading/Heading';

const Work = () => {
    return (
        <div className='resume-screen-container justify-center flex flex-col h-full w-full p-4 bg-indigo-600 text-slate-200 absolute' key="work">
            <Heading 
                heading="Sjöbergska huset AB"
                subheading="Intership"
                fromDate="2023"
                toDate="2023"
            />
            <div className='experience-description mt-2 text-center max-w-full'>
                <p className='resume-description-text'>

                </p>
            </div>
            <div className='experince-description'>
                <p className='resume-description-text'>

                </p>
            </div>
        </div>
    );
}

export default Work;

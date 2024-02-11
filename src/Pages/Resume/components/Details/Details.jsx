import React from 'react';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Interests from './components/Interests/Interests';
import Skills from './components/Skills/Skills';
import Heading from '../../../../Components/Ui/Heading';

const Details = ({ show }) => {
    return (
        <div className='w-full'>
            <div className='md:hidden inline-block w-full mb-8'>
                <Heading heading={show} custom={"text-3xl"}/>
            </div>
            {
                show === "Skills" && <Skills />
            }
            {
                show === "Education" && <Education />
            }
            {
                show === "Work" && <Work />
            }
            {
                show === "Interests" && <Interests />
            }
        </div>
    )
}

export default Details;

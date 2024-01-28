import React from 'react';
import Detail from './components/components/Container';
import Education from './components/Education';
import Work from './components/Work';
import Interests from './components/Interests';
import Skills from './components/Skills';

const Details = ({ show }) => {
    return (
        <div className={`flex relative min-h-80 w-full gap-8`}>

            {
                show === "Skills" && <Skills />
            }
            
            {
                show === "Education" && <Education/>
            }

            {
                show === "Work" && <Work />
            }


            {
                show === "Interests" && <Interests />
            }
        </div>
    );
}

export default Details;

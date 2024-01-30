import React from 'react';
import Detail from './components/components/Container';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Interests from './components/Interests/Interests';
import Skills from './components/Skills/Skills';

const Details = ({ show }) => {
    return (
        <div className={`flex relative my-8 min-h-80 w-full justify-center`}>

            { show === "Skills" && <Skills show={show} />}
            
            { show === "Education" && <Education show={show} />}
            
            { show === "Work" && <Work show={show} />}

            {show === "Interests" && <Interests show={show} />}

        </div>
    );
}

export default Details;

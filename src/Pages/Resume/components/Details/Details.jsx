import React from 'react';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Interests from './components/Interests/Interests';
import Skills from './components/Skills/Skills';
import Container from './components/components/Container';
import Heading from '../../../../Components/Heading/Heading';

const Details = ({ show }) => {
    return (
        <div className={`min-h-fit w-full`}>

            {show === "Skills" && <Skills show={show} />}

            {show === "Education" && <Education show={show} />}

            {show === "Work" && <Work show={show} />}

            {show === "Interests" && <Interests show={show} />}

        </div>
    );
}

export default Details;

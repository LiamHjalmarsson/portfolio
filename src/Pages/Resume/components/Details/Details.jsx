import React from 'react';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Interests from './components/Interests/Interests';
import Skills from './components/Skills/Skills';

const Details = ({ show }) => {
    switch (show) {
        case "Skills":
            return <Skills />;
        case "Education":
            return <Education />;
        case "Work":
            return <Work />;
        case "Interests":
            return <Interests />;
        default:
            return null;
    }
}

export default Details;

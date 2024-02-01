import React from 'react';
import Profile from "./Profile/Profile";
import About from "./Resume/About";
import RootSection from './components/RootSection';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Root = () => {
    return (
        <div className="flex flex-col w-full">
            <Profile />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Root;

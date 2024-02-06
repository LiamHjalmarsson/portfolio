import React from 'react';
import Profile from "./Profile/Profile";
import About from "./Resume/About";
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Root = () => {
    return (
        <div className="flex flex-col gap-40 lg:gap-20  w-full max-w-[1500px]">
            <Profile />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Root;

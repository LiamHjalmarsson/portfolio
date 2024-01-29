import React from 'react';
import Profile from "./Profile/Profile";
import About from "./Resume/About";
import RootSection from './components/RootSection';

const Root = () => {
    return (
        <div className="flex flex-col gap-10 w-full max-w-[1300px] px-2 padd:px-8">
            <RootSection id="home" to="about">
                <Profile />
            </RootSection>
            <RootSection id="about" to="projects">
                <About />
            </RootSection>
            <RootSection id="projects" to="home">
                <h1>
                    Projets 
                </h1>
            </RootSection>
        </div>
    );
}

export default Root;

import React from 'react';
import Profile from "./Profile/Profile";
import About from "./Resume/About";
import ScrollDown from '../Components/Scroll/ScrollDown';

const Root = () => {
    return (
        <div className="flex flex-col gap-10 w-full max-w-[1300px] px-2 padd:px-8">
            <div className="min-h-screen flex flex-col justify-center items-center relative" id="home">
                <Profile />
                <ScrollDown address="about" />
            </div>
            <div className="min-h-screen flex justify-center items-center relative" id="about"> 
                <About />
                {/* <ScrollDown address="projects" /> */}
            </div>
            <div className="min-h-screen flex justify-center items-center relative" id="projects"> 
                <h1>
                    Projets 
                </h1>
                <ScrollDown address="home" />
            </div>
        </div>
    );
}

export default Root;

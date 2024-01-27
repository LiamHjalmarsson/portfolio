import React from 'react';
import Profile from "./Profile/Profile";
import About from "./Resume/About";

const Root = () => {
    return (
        <div className="flex flex-col gap-10 w-full max-w-[1300px] px-2 padd:px-8">
            <div className="min-h-screen flex justify-center items-center" id="home">
                <Profile />
            </div>
            <div className="min-h-screen flex justify-center items-center" id="about"> 
                <About />
            </div>
            <div className="min-h-screen flex justify-center items-center" id="projects"> 
                <h1>
                    Projets 
                </h1>
            </div>
        </div>
    );
}

export default Root;

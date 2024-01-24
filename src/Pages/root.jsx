import React from 'react';
import Profile from "./Profile/Profile";
import Resume from "./Resume/Resume";

// With Css
import styles from './root.module.css';

const Root = () => {
    return (
        <div className="w-full max-w-[1300px] px-8">
            <div className="h-screen" id="home">
                <Profile />
            </div>
            <div className="h-screen" id="about"> 
                <Resume />
            </div>
            <div className="h-screen" id="projects"> 
                <h1>
                    Projets 
                </h1>
            </div>
        </div>
    );
}

export default Root;

import React from 'react';
import img from "../../../Assets/liam.png"

const ProfileImage = () => {
    return (
        <div className={`flex justify-center lg:justify-center items-center w-full`}>
            <img src={img} alt='profile picture' className="shadow-middle opacity-95 h-40 w-40 md:h-72 md:w-72 lg:h-96 lg:w-96 shadow-caribbean_300 rounded-full lg:rounded-full"></img>
        </div>
    );
}

export default ProfileImage;

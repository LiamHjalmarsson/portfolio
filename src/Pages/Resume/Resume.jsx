import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';

const Resume = () => {
    let [selectedBulletsIndex, setSelectedBulletsIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Education");

    let handelOption = (option, index) => {
        setSelectedBulletsIndex(index);
        setSelectedOption(option);
    };

    return (
        <div className='h-full w-full flex justify-center items-center p-8'>
            <div className='w-full'>
                <nav className='flex justify-between w-full gap-4'>
                    <GetOptionsBar selectedBulletsIndex={selectedBulletsIndex} handelOption={handelOption} />
                </nav>
                <div className={`w-full my-8 overflow-x-hidden`}>
                    <Details show={selectedOption} />
                </div>
            </div>
        </div>
    );
}

export default Resume;  
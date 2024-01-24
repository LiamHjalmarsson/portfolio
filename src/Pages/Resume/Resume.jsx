import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';

const Resume = () => {
    let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Education");

    let handelOption = (option, index) => {
        setSelectedOptionIndex(index);
        setSelectedOption(option);
    };

    return (
        <div className='h-full w-full flex flex-col justify-center items-center p-8'>
            <nav className='flex justify-between w-full gap-4'>
                <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
            </nav>
            <div className={`w-full my-8 overflow-x-hidden`}>
                <Details show={selectedOption} />
            </div>
        </div>
    );
}

export default Resume;  
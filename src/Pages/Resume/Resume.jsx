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
        <div className='mt-8 h-full w-full flex justify-center items-center'>
            <div className='w-full'>
                <nav className='flex justify-center h-full p-2 w-full relative'>
                    <div className='flex justify-between w-full gap-4 relative z-20'>
                        <GetOptionsBar selectedBulletsIndex={selectedBulletsIndex} handelOption={handelOption} />
                    </div>
                </nav>
                <div className={`w-full my-8 overflow-x-hidden h-40`}>
                    <Details show={selectedOption} />
                </div>
            </div>
        </div>
    );
}

export default Resume;  
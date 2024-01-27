import React from 'react';
import Detail from './components/Detail';

const Details = ({ show }) => {

    let skillDetails = ["js", "react", "tailwind", "css", "html", "php", "laravel", "webflow", "svelte", "figma"];

    return (
        <div className={`flex relative min-h-80 w-full gap-8`}>
            {
                show === "education" &&
                <Detail id="education">
                    <div>
                        <h2 className='text-2xl max-padd:text-center'>
                            Malmö University
                        </h2>
                        <div className='flex justify-between gap-4 flex-wrap mt-2'>
                            <div className='text-center max-padd:w-full'>
                                Bachelor degree in Media technology
                            </div>
                            <div className='max-mobil:mt-2 text-center max-padd:w-full'>
                                2021 - 2024
                            </div>
                        </div>
                    </div>
                </Detail>
            }

            {
                show === "work" &&
                <Detail id="work">
                    <div>
                        <h2 className='text-2xl max-padd:text-center'>
                            Sjöbergska Huset
                        </h2>
                        <div className='flex justify-between gap-4 flex-wrap mt-2'>
                            <div className='text-center max-padd:w-full'>
                                Internship 
                            </div>
                            <div className='max-mobil:mt-2 text-center max-padd:w-full'>
                                Sep 2023 - Dec 2023
                            </div>
                        </div>
                    </div>
                </Detail>
            }

            {show === "skills" &&
                <Detail id="skills">
                    <div className='flex gap-8 flex-wrap'>
                        {skillDetails.map((skill, index) => (
                        <div key={index} className='h-16 w-16 shadow-nobel_300 shadow-sm rounded-full'>
                            <div className={`h-full w-full rounded-full ${"bg-" + skill} bg-contain bg-no-repeat bg-center`}></div>
                        </div>
                        ))}
                    </div>
                </Detail>
            }

            {
                show === "interests" &&
                <Detail id="interests">
                    <div>
                        <h2 className='text-2xl max-padd:text-center'>
                            Traning
                        </h2>
                        <div className='flex justify-between gap-4 flex-wrap mt-2'>
                            <div className='text-center max-padd:w-full'>
                                I belive in an active life style where working out and activeating my body
                            </div>
                        </div>
                    </div>
                </Detail>
            }
        </div>
    );
}

export default Details;

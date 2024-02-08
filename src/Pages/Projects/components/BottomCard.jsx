import React from 'react';
import { FaGithub } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

const ButtomCard = ({item}) => {
    return (
        <div className='flex flex-col items-center p-4'>
            <div className="flex justify-between w-full mb-4 items-center py-2 px-4 lg:hidden">
                <div className="text-lg">
                    <FaGithub />
                </div>
                <h2 className='inline-block flex-grow font-bold text-2xl tracking-widest'>
                    {item.title}
                </h2>
                <div className="text-lg cursor-pointer lg:hidden flex">
                    <BiSolidShow />
                </div>
            </div>
            <div className='flex flex-wrap w-full justify-center gap-4'>
                {item.skills.map((skill, index) => (
                    <div className={`px-4 py-2 lg:py-4 border flex-grow border-nobel_400 rounded-md`} key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ButtomCard;

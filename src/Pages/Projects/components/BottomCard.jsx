import React from 'react';
import { FaGithub } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

const ButtomCard = ({item, showHandler, show}) => {
    return (
        <div className='flex flex-col items-center p-4'>
            <div className="flex justify-between w-full mb-4 items-center py-2 px-4 lg:hidden">
                {
                    item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className='flex justify-center p-1 items-center h-8 w-8 bg-caribbean_500 rounded-full'>
                            <FaGithub className='h-full w-full text-nobel_400' />
                        </a>
                    )
                }
                <h2 className='inline-block flex-grow font-bold text-2xl tracking-widest'>
                    {item.title}
                </h2>
                <div className={`lg:hidden flex justify-center p-1 items-center h-8 w-8 rounded-full cursor-pointer ${show ? "bg-caribbean_400 shadow-middle shadow-caribbean_500" : "bg-caribbean_500"}`} onClick={() => showHandler()}>
                    <BiSolidShow className='h-full w-full text-nobel_400' />
                </div>
            </div>
            <div className='flex flex-wrap w-full justify-center gap-4'>
                {item.skills.map((skill, index) => (
                    <div className={`px-4 py-2 lg:py-4 border flex-grow border-nobel_400 rounded-md`} key={index}>
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ButtomCard;

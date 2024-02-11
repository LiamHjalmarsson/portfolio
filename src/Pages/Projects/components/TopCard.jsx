import React from 'react';
import ButtonSecondary from '../../../Components/Ui/ButtonSecondary';
import { FaGithub } from "react-icons/fa6";

const TopCard = ({ item, show }) => {
    return (
        <div className="lg:h-96 w-full h-80 overflow-hidden lg:p-4 rounded-t-md transition-opacity duration-500 relative">
            <div className={`w-full bg-cover bg-center lg:rounded-md h-full ${show ? "opacity-30" : "opacity-100"} lg:group-hover:opacity-30 lg:group-hover:scale-[1.20] transition duration-500 `} style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className={`flex ${show ? "opacity-100" : "opacity-0"} absolute justify-center items-center h-full opacity-0 lg:group-hover:opacity-100 duration-500 z-10 top-0 left-0 text-caribbean_500 w-full`}>
                <div className="absolute flex flex-col gap-4 justify-center h-full w-full text-whiteish">
                    <a href={item.url ? item.url : null} target="_blank" rel="noopener noreferrer" className=' lg:block hidden text-5xl text-caribbean_500 transtion duration-500 font-bold tracking-widest'>
                        <div className="flex justify-center items-center">
                            {item.title}
                        </div>
                    </a>
                    {
                        <div className="px-4">
                            <p className="text-[16px]">
                                {
                                    item.description
                                }
                            </p>
                        </div>
                    }
                    {
                        item.url && item.title !== "Portfolio" && (
                            <div className="flex justify-center items-center w-full">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-1/3 flex items-center">
                                    <ButtonSecondary>
                                        Visit
                                    </ButtonSecondary>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className='absolute hidden lg:flex justify-center p-2 items-center right-2 bottom-0 h-10 w-10 bg-caribbean_500 rounded-full hover:h-12 hover:w-12 z-10 transtion duration-500 cursor-pointer'>
                        <FaGithub className='h-full w-full text-nobel_400' />
                    </a>
                )
            }
        </div>
    );
}

export default TopCard;

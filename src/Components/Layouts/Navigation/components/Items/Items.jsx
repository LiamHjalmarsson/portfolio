import React from 'react';
import Item from './Item';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Items = ({ open, openHandler}) => {

    let links =[
        { 
            title:"home",
        },
        {
            title:"about",
        },
        {
            title:"projects",
        },
        {
            title:"contact",
        },
    ];

    return (
        <>
            {/* Laptop */}
            <ul className={`padd:flex flex-row h-full items-center hidden flex-grow static z-30`}>
                <div className={`flex-1 flex-grow flex items-center justify-center flex-row}`}>
                    {
                        links.map((link) => (
                            <div key={link.title} className={`w-auto`}>
                                <Item address={link.title} title={link.title} />
                            </div>
                        ))
                    }
                </div>
                <div className={`w-24 flex justify-end items-center`}>
                    <div className={`flex justify-end gap-4`}>
                        <div>
                            <FaLinkedin className='w-6 h-6 cursor-pointer hover:text-caribbean_100' />
                        </div>
                        <div>
                            <FaGithubSquare className='w-6 h-6 cursor-pointer hover:text-caribbean_100' />
                        </div>
                    </div>
                </div>
            </ul>


            {/* Padd */}
            <ul className={`padd:hidden flex flex-col h-screen w-screen flex-1 -left-8 transition-all absolute flex-grow duration-0 ease-in  ${open ? '-top-[100%]' : 'top-[-100vh] delay-[1500ms]'}`}>
                <div className={`flex-1 flex-grow h-1/2 flex-col flex justify-end items-end bg-nobel_900 transtion ${open ? 'w-full duration-500' : 'w-0 delay-700 duration-500'}`}>
                    {
                        links.map((link) => (
                            <div key={link.title} className={`${open ? 'delay-700 opacity-100 duration-500' : ' opacity-0 padd:opacity-100 duration-500'} w-full`}>
                                <Item address={link.title} title={link.title} close={() => openHandler(!open)} />
                            </div>
                        ))
                    }
                </div>
                <div className={`bg-nobel_900 flex-1 flex-grow h-1/2 flex justify-center items-center transtion ${open ? 'w-full duration-500 delay-300' : 'w-0 delay-500 duration-500'}`}>
                    <div className={`flex justify-center gap-8 w-48 ${open ? 'delay-700 opacity-100 duration-500' : 'opacity-0 padd:opacity-100 duration-500'}`}>
                        <div>
                            <FaLinkedin className='w-8 h-8' />
                        </div>
                        <div>
                            <FaGithubSquare className='w-8 h-8' />
                        </div>
                    </div>
                </div>
            </ul>
        </>
    );
}

export default Items;

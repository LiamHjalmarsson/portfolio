import React from 'react';
import ItemLink from './ItemLink';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import ItemIcon from './ItemIcon';

const Items = ({ open, openHandler }) => {

    let links = [
        {
            title: "home",
        },
        {
            title: "about",
        },
        {
            title: "projects",
        },
        {
            title: "contact",
        },
    ];

    return (
        <>
            <ul className={`lg:flex flex-row h-full items-center hidden flex-grow static z-30`}>
                <div className={`flex-1 flex-grow flex items-center justify-center flex-row}`}>
                    {
                        links.map((link) => (
                            <div key={link.title} className={`w-auto`}>
                                <ItemLink address={link.title} title={link.title} />
                            </div>
                        ))
                    }
                </div>
                <div className={`w-24 flex justify-end items-center gap-4`}>
                        <ItemIcon url={"https://www.linkedin.com/in/liam-hjalmarsson-710505231/"} Icon={FaLinkedin}/>
                        <ItemIcon url={"https://github.com/LiamHjalmarsson"} Icon={FaGithubSquare}/>
                </div>
            </ul>


            <ul className={`lg:hidden flex flex-col h-screen w-screen flex-1 -left-0 transition-all absolute flex-grow duration-0 ease-in  ${open ? 'top-0' : 'top-[-100vh] delay-[1500ms]'}`}>
                <div className={`flex-1 flex-grow h-1/2 flex-col flex justify-end items-end bg-nobel_700 transtion ${open ? 'w-full duration-500' : 'w-0 delay-700 duration-500'}`}>
                    {
                        links.map((link) => (
                            <div key={link.title} className={`${open ? 'delay-700 opacity-100 duration-500' : ' opacity-0 lg:opacity-100 duration-500'} w-full`}>
                                <ItemLink address={link.title} title={link.title} close={() => openHandler(!open)} />
                            </div>
                        ))
                    }
                </div>
                <div className={`bg-nobel_700 flex-1 flex-grow h-1/2 flex justify-center items-center transtion ${open ? 'w-full duration-500 delay-300' : 'w-0 delay-500 duration-500'}`}>
                    <div className={`flex justify-center gap-8 w-48 ${open ? 'delay-700 opacity-100 duration-500' : 'opacity-0 lg:opacity-100 duration-500'}`}>
                        <ItemIcon url={"https://www.linkedin.com/in/liam-hjalmarsson-710505231/"} Icon={FaLinkedin}/>
                        <ItemIcon url={"https://github.com/LiamHjalmarsson"} Icon={FaGithubSquare}/>
                    </div>
                </div>
            </ul>
        </>
    );
}

export default Items;

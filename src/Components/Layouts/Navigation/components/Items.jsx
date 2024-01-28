import React from 'react';
import Item from './Item';
import LinkButton from '../../../Ui/Link_Button';

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
    ];

    return (
        <>
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
                <div className={`bg-dark_500 w-36 flex justify-center items-center`}>
                    <div className={`w-full`}>
                        <LinkButton />
                    </div>
                </div>
            </ul>

            <ul className={`padd:hidden flex flex-col h-screen w-screen flex-1 -left-2 transition-all absolute flex-grow duration-0 ease-in  ${open ? '-top-[200%]' : 'top-[-100vh] delay-[1500ms]'}`}>
                <div className={`flex-1 flex-grow h-1/2 flex-col flex justify-end items-end bg-nobel_900 transtion ${open ? 'w-full duration-500' : 'w-0 delay-1000 duration-500'}`}>
                    {
                        links.map((link) => (
                            <div key={link.title} className={`${open ? 'delay-1000 opacity-100 duration-500' : ' opacity-0 padd:opacity-100 duration-500'} w-full`}>
                                <Item address={link.title} title={link.title} close={() => openHandler(!open)} />
                            </div>
                        ))
                    }
                </div>
                <div className={`bg-nobel_900 h-1/2 flex justify-center items-center ${open ? 'delay-500 w-[100vw] duration-500' : 'w-0 duration-500 delay-500'}`}>
                    <div className={`w-48 ${open ? 'delay-1000 opacity-100 duration-500' : 'opacity-0 padd:opacity-100 duration-500'}`}>
                        <LinkButton />
                    </div>
                </div>
            </ul>
        </>
    );
}

export default Items;

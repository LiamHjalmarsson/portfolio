import { useState } from "react";
import Corner from "./components/Corner";
import Logo from "../../Components/Ui/Logo";
import Burger from "./components/Burger";
import Item from "./components/Item";
import LinkButton from "../../Components/Ui/Link_Button";

const Navigation = () => {
    let [open,setOpen]=useState(false);

    let Links =[
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
        <nav className="items-center flex justify-center fixed w-full h-40 z-20 bg-dark_600 top-0 left-0 px-8">
            <div className='flex items-center w-full group relative padd:m-8 m-0'>
                <Corner custom="border-t-8 border-l-8 z-10 left-0"/>
                <div className="w-full justify-between items-center px-8 flex">
                    <div className="w-36">
                        <Logo />
                    </div>

                    <Burger menuHandler={() => setOpen(!open)} open={open}/>
                
                    <ul className={`padd:flex flex-row h-full items-center hidden flex-grow static z-30`}> 
                        <div className={`flex-1 flex-grow flex items-center justify-center flex-row}`}>
                            {
                                Links.map((link)=>(
                                    <div className={`w-auto`}>
                                        <Item address={link.title} title={link.title} close={() => setOpen(!open)} />
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
                    

                    <ul className={`padd:hidden flex flex-col h-screen w-screen flex-1 -left-8 transition-all absolute flex-grow duration-0 ease-in  ${open ? '-top-[200%]':'top-[-100vh] delay-[1500ms]'}`}>
                        <div className={`flex-1 flex-grow h-1/2 flex-col flex justify-end items-end padd:items-center padd:justify-center padd:flex-row bg-dark_500 transtion ${open ? 'w-full duration-500' : 'w-0 delay-1000 duration-500'}`}>
                            {
                                Links.map((link)=>(
                                    <div className={`${open ? 'delay-1000 opacity-100 duration-500' : ' opacity-0 padd:opacity-100 duration-500'} w-full padd:w-auto`}>
                                        <Item address={link.title} title={link.title} close={() => setOpen(!open)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`bg-dark_500 h-1/2 padd:h-0 flex justify-center items-center ${open ? 'delay-500 w-[100vw] duration-500' : 'w-0 duration-500 delay-500'}`}>
                            <div className={`w-48 ${open ? 'delay-1000 opacity-100 duration-500' : 'opacity-0 padd:opacity-100 duration-250'}`}>
                                <LinkButton />
                            </div>
                        </div>
                    </ul>
                </div>
                <Corner custom="border-b-8 border-r-8 right-0" />
            </div>
        </nav>
    )
};

export default Navigation;

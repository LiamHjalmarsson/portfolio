import { useState } from "react";
import Corner from "./components/Corner";
import Logo from "../../Ui/Logo";
import Burger from "./components/Burger";
import Items from "./components/Items";

const Navigation = () => {
    let [open,setOpen]=useState(false);

    return (
        <nav className="items-center flex justify-center fixed top-0 w-full z-20 bg-nobel_600 pt-2 px-2 padd:px-8 h-[10vh]">
            <div className='flex items-center w-full group relative padd:m-8 m-0'>
                <Corner custom="border-t-8 border-l-8 z-10 left-0"/>
                <div className="w-full justify-between items-center px-8 flex">
                    <div className=" w-24">
                        <Logo />
                    </div>

                    <Burger menuHandler={() => setOpen(!open)} open={open}/>
                
                    <Items open={open} openHandler={setOpen} />
                </div>
                <Corner custom="border-b-8 border-r-8 right-0" />
            </div>
        </nav>
    )
};

export default Navigation;

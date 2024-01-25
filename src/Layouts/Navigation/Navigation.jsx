import { useState } from "react";
import Corner from "./components/Corner";
import Logo from "../../Components/Ui/Logo";
import Burger from "./components/Burger";
import Item from "./components/Item";
import LinkButton from "../../Components/Ui/Link_Button";
import Items from "./components/Items";

const Navigation = () => {
    let [open,setOpen]=useState(false);

    return (
        <nav className="items-center flex justify-center fixed w-full h-40 z-20 bg-dark_600 top-0 left-0 px-8">
            <div className='flex items-center w-full group relative padd:m-8 m-0'>
                <Corner custom="border-t-8 border-l-8 z-10 left-0"/>
                <div className="w-full justify-between items-center px-8 flex">
                    <div className="w-36">
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

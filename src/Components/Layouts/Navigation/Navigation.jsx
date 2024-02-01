import { useState } from "react";
import Corner from "./components/Cornner/Corner";
import Logo from "../../Ui/Logo";
import Burger from "./components/Burger/Burger";
import Items from "./components/Items/Items";

const Navigation = () => {
    let [open,setOpen] = useState(false);

    return (
        <nav className="items-center flex justify-center fixed w-full z-20 bg-nobel_600">
            <div className='flex items-center w-full relative m-8'>
                <Corner custom="border-t-8 border-l-8 z-10 left-0"/>
                <div className="w-full items-center px-8 flex">
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

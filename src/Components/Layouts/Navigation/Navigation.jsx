import { useState } from "react";
import Logo from "../../Ui/Logo";
import Burger from "./components/Burger/Burger";
import Items from "./components/Items/Items";

const Navigation = () => {
    let [open,setOpen] = useState(false);

    return (
        <nav className="items-center flex justify-center fixed w-full z-20 bg-nobel_600 py-8 px-4">
            <div className='flex items-center max-w-[1300px] w-full h-10'>
                <div className="w-full items-center px-8 flex">
                    <div className="w-24">
                        <Logo />
                    </div>

                    <Burger menuHandler={() => setOpen(!open)} open={open}/>
                
                    <Items open={open} openHandler={setOpen} />
                </div>
            </div>
        </nav>
    )
};

export default Navigation;

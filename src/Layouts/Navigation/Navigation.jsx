import { useState } from "react";
import NavigationItem from "./NavigationItem";
import NavigationBurger from "./NavigationBurger";
import Logo from "../../Components/Ui/Logo";
import ButtonPrimary from "../../Components/Ui/ButtonPrimary";


const Navigation = () => {
    let [isOpen, setIsOpen] = useState(false);

    let toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let navigationItems = (
        <ul className="hidden padd:flex">
            <NavigationItem address="home" title="Home" />
            <NavigationItem address="about" title="Resume" />
            <NavigationItem address="projects" title="Projects" />
        </ul>
    );

    return (
        <nav className="items-center flex justify-center fixed w-full h-40 z-40 bg-dark_500 top-0">
            <div className="flex items-center w-full max-w-[1500px] group relative m-8">
                <div className="h-28 w-28 border-green_500 border-t-8 border-l-8 absolute left-0 group-hover:w-full group-hover:h-28 transition-all duration-1000 ease-in-out"></div>
                <div className="flex w-full justify-between items-center z-10 px-8">
                    <div>
                        <Logo />
                    </div>
                    <div className="text-lg">
                        {navigationItems}
                        <NavigationBurger toggleMenu={toggleMenu}/>
                    </div>
                    <div className="w-48 hidden padd:flex">
                        <a href="https://github.com/LiamHjalmarsson" className="w-full">
                            <ButtonPrimary width={true}>
                                GitHub
                            </ButtonPrimary>
                        </a>
                    </div>
                </div>
                <div className="absolute border-green_500 border-b-8 border-r-8 h-28 w-28 right-0 group-hover:w-full group-hover:h-28 transition-all duration-1000 ease-in-out"></div>
            </div>
            <div className={`w-full padd:hidden absolute top-40 z-10 bg-slate-800 py-8 ${isOpen ? "flex" : "hidden"}`}>
                <ul className="flex flex-col justify-between items-center w-full h-96 z-10">
                    {navigationItems.props.children}
                    <div className="w-full flex justify-center">
                        <div className="w-48">
                            <a href="https://github.com/LiamHjalmarsson" className="w-full">
                                <ButtonPrimary width={true}>
                                    GitHub
                                </ButtonPrimary>
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

import BurgerLine from "./BurgerLine";

const Burger = ({menuHandler, open}) => {
    return (
        <>        
            <div className="flex w-full lg:hidden items-end flex-col relative cursor-pointer">
                <div className={`${open ? "h-0" : "h-5"} text-2xl relative w-6 z-50 transition-all duration-200`} onClick={menuHandler}>
                    <BurgerLine custom={`top-0 ${open ? '-rotate-45' : ""}`} />
                    <BurgerLine custom={`top-1/2 ${open ? 'opacity-0 translate-x-4' : "opacity-100"}`} />
                    <BurgerLine custom={`top-full ${open ? 'rotate-45' : ""}`} />
                </div>
            </div>
        </>
    );
}

export default Burger;

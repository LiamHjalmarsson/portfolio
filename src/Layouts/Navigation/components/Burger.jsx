const Burger = ({menuHandler, open}) => {
    return (
        <>        
            <div className="flex w-full padd:hidden items-end flex-col relative cursor-pointer">
                <div className={`${open ? "h-0" : "h-5"} text-2xl relative w-6 z-50 transition-all duration-200`} onClick={menuHandler}>
                    <span className={`block bg-slate-200 h-1 top-0 w-8 mb-1 rounded-full transition-transform duration-300 absolute ${open ? "-rotate-45" : ""}`}></span>
                    <span className={`block bg-slate-200 h-1 top-1/2 w-8 mb-1 rounded-full transition duration-300 absolute ${open ? "opacity-0 translate-x-4" : " opacity-100"}`}></span>
                    <span className={`block bg-slate-200 top-full h-1 w-8 rounded-full transition-transform duration-300 absolute ${open ? "rotate-45" : ""}`}></span>
                </div>
            </div>
        </>
    );
}

export default Burger;

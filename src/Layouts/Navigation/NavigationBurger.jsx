const NavigationBurger = ({toggleMenu}) => {
    return (
        <div className="flex padd:hidden items-center flex-col px-8 relative cursor-pointer">
            <div className="text-2xl relative h-5 w-6" onClick={toggleMenu}>
                <span className={`block bg-slate-200 h-1 top-0 w-6 mb-1 rounded-full transition-transform duration-300 absolute`}></span>
                <span className={`block bg-slate-200 h-1 top-1/2 w-6 mb-1 rounded-full transition-opacity duration-300 absolute`}></span>
                <span className={`block bg-slate-200 top-full h-1 w-6 rounded-full transition-transform duration-300 absolute `}></span>
            </div>
        </div>
    );
}

export default NavigationBurger;

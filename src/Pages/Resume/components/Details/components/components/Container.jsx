import React from 'react';

const Container = ({id, children}) => {
    return (
        <div className={`w-full h-auto flex-col justify-center items-center`} key={id} >
            <div className={`${id === "Skills" ? "grid grid-cols-1 laptop:grid-cols-2" : "w-full lg:w-1/2 flex m-auto flex-col"} gap-8`}>
                {children}
            </div>
        </div>
    );
}

export default Container;

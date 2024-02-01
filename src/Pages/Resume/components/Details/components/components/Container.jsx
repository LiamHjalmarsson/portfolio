import React from 'react';

const Container = ({id, children}) => {
    return (
        <div className={`w-full h-auto flex-col justify-center items-center gap-6 lg:gap-8`} key={id} >
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 lg:gap-8">
                {children}
            </div>
        </div>
    );
}

export default Container;

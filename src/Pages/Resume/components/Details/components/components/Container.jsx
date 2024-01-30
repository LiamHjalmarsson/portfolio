import React from 'react';

const Container = ({id, children}) => {
    return (
        <div className={`w-1/2 h-auto flex-col justify-center items-center p-4 gap-8`} key={id} >
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </div>
    );
}

export default Container;

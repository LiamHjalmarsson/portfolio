import React from 'react';

const Container = ({id, children}) => {
    return (
        <div className={`w-full h-auto flex-col justify-center items-center p-4`} key={id} >
            <div className="grid grid-cols-2 gap-8 col-auto">
                {children}
            </div>
        </div>
    );
}

export default Container;

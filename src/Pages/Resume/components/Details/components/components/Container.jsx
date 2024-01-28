import React from 'react';

const Container = ({id, children}) => {
    return (
        <div className={`w-full h-auto flex flex-col justify-center items-center py-4 absolute gap-8 `} key={id} >
            {children}
        </div>
    );
}

export default Container;

import React from 'react';

const Container = ({id, children, show}) => {
    return (
        <div className={`flex w-full h-auto flex-col justify-center items-center py-4 absolute gap-8`} key={id} >
            {children}
        </div>
    );
}

export default Container;

import React from 'react';

const Container = ({id, children, show}) => {
    return (
        <div className={`w-2/3 h-auto flex-col justify-center items-center p-4 gap-8`} key={id} >
            {children}
        </div>
    );
}

export default Container;

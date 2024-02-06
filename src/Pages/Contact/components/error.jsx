import React from 'react';

const Error = ({ showError }) => {
    return (
        <div className={` border-red-500 border shadow-middle shadow-red-500 p-4 absolute top-[20%] right-0 text-red-500 transition-transform duration-500 delay-200`}>
            Please fill in all the fields.
        </div>
    );
}

export default Error;

import React from 'react';

const Detail = ({id, children, state}) => {
    return (
        <div className={`w-full h-auto flex flex-col justify-center items-center py-4 absolute `} key={id} >

            <h1 className='text-3xl mb-8 tracking-wider'>
                {id.charAt(0).toUpperCase() + id.slice(1)}
            </h1>

            <div className={`bg-nobel_500 w-full padd:w-3/4 flex flex-col text-whiteish justify-center h-full gap-8 p-4 padd:p-8 shadow-md shadow-caribbean_900`}>
                {children}
            </div>

        </div>
    );
}

export default Detail;

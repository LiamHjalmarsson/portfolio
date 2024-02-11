import React from 'react';

const Heading = ({heading, custom}) => {
    return (
        <h1 className={`text-2xl lg:text-3xl tracking-wider`}>
            {heading.charAt(0).toUpperCase() + heading.slice(1)}
        </h1>
    );
}

export default Heading;
import React from "react";

const Subheading = ({subHeading}) => {
    return (
        <>
        {
            (subHeading) ? (
            <div className="screen-sub-heading tracking-wide mx-3 text-lg text-white text-center">
                <p>{subHeading}</p>
            </div>
            ) : (<div></div>)
        }
        </>
    );
};

export default Subheading;

import React from 'react';

const Message = ({error}) => {
    return (
        <div className={` border shadow-middle rounded-md p-4 absolute top-[85%] lg:top-[20%] right-0 transition-transform duration-500 delay-200 ${error ? "border-red-400 text-red-400 shadow-red-400" : "border-caribbean_500 shadow-caribbean_500 text-caribbean_500"}`}>
            {
                error && (
                    <p>
                        Please fill in all the fields.
                    </p>
                ) || (
                    <p>
                        Thanks for the message
                    </p>
                )
            }
        </div>
    );
}

export default Message;

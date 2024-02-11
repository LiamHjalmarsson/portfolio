import React from 'react';
import ButtonPrimary from '../../../Components/Ui/ButtonPrimary';
import { LuSend } from "react-icons/lu";

const Button = ({loading}) => {
    return (
        <div className='w-full flex mt-4 justify-center items-center'>
            <ButtonPrimary button={{ type: 'submit' }}>
                <div className='flex items-center'>
                    {
                        !loading && (
                            <p className='flex-grow'>
                                Send
                            </p>
                        ) || (
                            <p className='flex-grow'>
                                Sending...
                            </p>
                        )
                    }
                    <LuSend />
                </div>
            </ButtonPrimary>
        </div>
    );
}

export default Button;

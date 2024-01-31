import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Heading from '../../Components/Heading/Heading';
import ButtonPrimary from '../../Components/Ui/ButtonPrimary';
import { LuSend } from "react-icons/lu";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bx2imh9', 'template_qtj543b', form.current, 'mcrKYJtLl9odWjGFq')

        e.target.reset();
    };

    return (
        <div className="m-32 w-full h-screen flex justify-center items-center p-4">
            <div className='w-1/2 justify-center flex items-center'>
                <Heading heading="Contact" />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <form className='flex flex-col gap-4 w-full' ref={form} onSubmit={sendEmail}>
                    <div className='flex gap-8'>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="name" className=''>Name</label>
                            <input type="text" name="name" className=' bg-transparent border-2 border-nobel_100 rounded-md p-2 outline-none'/>
                        </div>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="email" className=''>Email</label>
                            <input type="email" name="email" className='bg-transparent border-2 border-nobel_100 rounded-md p-2 outline-none'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" className='bg-transparent border-2 border-nobel_100 rounded-md p-2 outline-none'/>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <ButtonPrimary type='submit'>
                            <div className='flex justify-center items-center'>
                                <h2 className='flex-1'>
                                    Send
                                </h2>
                                <LuSend />
                            </div>
                        </ButtonPrimary>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Contact;

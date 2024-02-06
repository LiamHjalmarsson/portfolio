import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Heading from '../../Components/Heading/Heading';
import ButtonPrimary from '../../Components/Ui/ButtonPrimary';
import { LuSend } from "react-icons/lu";
import Section from '../../Components/Layouts/Section/Section';
import Error from './components/error';
import Sucess from './components/sucess';


const Contact = () => {
    let form = useRef();
    let [error, setError] = useState(false);
    let [success, setSuccess] = useState(false);
    let [loading, setLoading] = useState(false);

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");


    let formHandler = async (e) => {
        e.preventDefault();

        setError(false);
        setSuccess(false);

        if (name === "" || email === "" || message === "") {
            setError(true);
            return; 
        }

        setLoading(true);

        await emailjs.sendForm('service_bx2imh9', 'template_qtj543b', form.current, 'mcrKYJtLl9odWjGFq')

        setSuccess(true);
        
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        
        e.target.reset();
    }

    return (
        <Section id="contact">
        <div className="w-full h-screen flex justify-center flex-col items-center gap-8 relative">
            <Heading heading="Get in touch" />
            <div className='w-full md:min-w-[500px] md:max-w-[600px] flex justify-center items-center'>
                <form className='flex flex-col gap-8 w-full' onSubmit={formHandler} ref={form}>
                    <div className='flex gap-8 flex-col md:flex-row'>
                        <div className='flex flex-col flex-grow items-start'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={(e) => setName(e.target.value)} className={`w-full bg-transparent border-2 ${error && name === "" ? "border-red-500" : " border-caribbean_200"} rounded-md p-2 outline-none `} />
                        </div>
                        <div className='flex flex-col flex-grow items-start'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className={`w-full bg-transparent border-2 ${error && email === "" ? "border-red-500" : "border-caribbean_200"} rounded-md p-2 outline-none `} />
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" onChange={(e) => setMessage(e.target.value)} className={`w-full bg-transparent border-2 ${error && message === "" ? "border-red-500" : "border-caribbean_200"} rounded-md p-2 outline-none `} />
                    </div>
                    <div className='w-full flex mt-4 justify-center items-center'>
                        <ButtonPrimary button={{ type: 'submit' }}>
                            <div className='flex items-center'>
                                {
                                    !loading && (
                                        <p className='flex-grow'>
                                            Send
                                        </p>
                                    )
                                }
                                {
                                    loading && (
                                        <p className='flex-grow'>
                                            Sending...
                                        </p>
                                    )
                                }
                                <LuSend />
                            </div>
                        </ButtonPrimary>
                    </div>
                </form>
            </div>
            {error && <Error />}
            {success && <Sucess />}
        </div>
    </Section>
    );

}

export default Contact;

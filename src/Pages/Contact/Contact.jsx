import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Heading from '../../Components/Ui/Heading';
import Section from '../../Components/Layouts/Section/Section';
import Button from './components/Button';
import Message from './components/Message';


const Contact = () => {
    let form = useRef();
    let [error, setError] = useState(false);
    let [success, setSuccess] = useState(false);
    let [loading, setLoading] = useState(false);

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    let [emailValid, setEmailValid] = useState(true);

    let validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    let formHandler = async (e) => {
        e.preventDefault();

        setError(false);
        setSuccess(false);
        setLoading(true);

        if (name === "" || email === "" || message === "" || !emailValid) {
            setError(true);
            setLoading(false);
            return; 
        }

        await emailjs.sendForm('service_bx2imh9', 'template_qtj543b', form.current, 'mcrKYJtLl9odWjGFq')

        setSuccess(true);
        
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        
        e.target.reset();
    }

    let handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    };

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
                            <input  name="email" onChange={(e) => handleEmailChange(e)} className={`w-full bg-transparent border-2 ${error && (email === "" || !emailValid)? "border-red-500" : "border-caribbean_200"} rounded-md p-2 outline-none `} />
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" onChange={(e) => setMessage(e.target.value)} className={`w-full bg-transparent border-2 ${error && message === "" ? "border-red-500" : "border-caribbean_200"} rounded-md p-2 outline-none `} />
                    </div>

                    <Button loading={loading} />
                </form>
            </div>
            {error && <Message error={error} />}
            {success && <Message />}
        </div>
    </Section>
    );

}

export default Contact;

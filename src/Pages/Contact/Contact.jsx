import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Heading from '../../Components/Heading/Heading';
import ButtonPrimary from '../../Components/Ui/ButtonPrimary';
import { LuSend } from "react-icons/lu";


const Contact = () => {
    let form = useRef();
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [message, setMessage] = useState("")
    let [error, setError] = useState(false);
    let [succes, setSucces] = useState(false);

    let nameHandler = (e) => {
        setName(e.target.value)
    }
    let emailHandler = (e) => {
        setEmail(e.target.value)
    }
    let messageHandler = (e) => {
        setMessage(e.target.value)
    }

    let formHandler = async (e) => {
        e.preventDefault();

        setError(false);
        
        let data ={
            name, 
            email,
            message
        }

        if (name === null || name === "" && email === null || email === "" && message === null || message === "" ) {

            setError(true)
            return;
            
        } else {
            await fetch("https://portfolio-ba9ea-default-rtdb.europe-west1.firebasedatabase.app/messages.json", { method: "POST", headers: {"Content-Type" : "application/json"}, body: JSON.stringify(data)})
    
            await emailjs.sendForm('service_bx2imh9', 'template_qtj543b', form.current, 'mcrKYJtLl9odWjGFq')
    
            e.target.reset();
        }
        
    }

    return (
        <div className="m-32 w-full h-screen flex justify-center flex-col items-center p-4">
            <div className='w-1/2 justify-center flex items-center'>
                <Heading heading="Contact" />
            </div>
            <div className='back-form w-1/2 flex justify-center items-center'>
                <form className='flex flex-col gap-8 w-full' onSubmit={formHandler} ref={form}>
                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={nameHandler} value={name} className={`bg-transparent border-2 ${!error ? "border-nobel_100" : "border-red-400" } rounded-md p-2 outline-none `}/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={emailHandler} value={email} className=' bg-transparent border-2 border-nobel_100 rounded-md p-2 outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" onChange={messageHandler} value={message} className=' bg-transparent border-2 border-nobel_100 rounded-md p-2 outline-none' />
                    </div>
                    <div className='send-btn w-full flex justify-center items-center'>
                        <ButtonPrimary button={{ type: 'submit' }}>
                            send
                        </ButtonPrimary>
                    </div>

                </form>
            </div>
        </div>
    );

}

export default Contact;

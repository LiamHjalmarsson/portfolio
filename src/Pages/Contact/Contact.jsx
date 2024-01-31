import React, { useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import ButtonPrimary from '../../Components/Ui/ButtonPrimary';

const Contact = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    let nameHandler = (e) => {
        setName(e.target.value);
    }

    let emailHandler = (e) => {
        setEmail(e.target.value);
    }

    let messageHandler = (e) => {
        setMessage(e.target.value);
    }
    
    let formHandler = async (e) => {
        e.preventDefault();

        try {
            let data = {
                name,
                email,
                message
            }

            let response = await fetch("/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            let recourse;

            if (name.length === 0 || email.length === 0 || message.length === 0) {
                recourse = await response.json();
                return ;
            } else if (response.status === 200) {
                recourse = await response.json();
            }

        } catch (error) {
            recourse = await response.json();
        }
    }

    return (
        <div className="m-32 w-full h-screen flex justify-center items-center p-4">
            <div className='w-1/2 justify-center flex items-center'>
                <Heading heading="Contact" />
            </div>
            <div className='back-form w-1/2 flex justify-center items-center'>
                <form className='flex flex-col gap-8 w-full' onSubmit={formHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={nameHandler} value={name}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={emailHandler} value={email}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" onChange={messageHandler} value={message}/>
                    </div>
                    <div className='send-btn w-full flex justify-center items-center'>
                        <ButtonPrimary type='submit'>
                            send
                        </ButtonPrimary>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Contact;

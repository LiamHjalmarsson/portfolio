import React from 'react';
import Button from './Button';

const Form = ({ formRef, formHandler, name, setName, email, handleEmailChange, message, setMessage, error, loading, emailValid }) => {
    return (
        <form className='md:min-w-[500px] md:max-w-[600px] flex flex-col gap-8 w-full' onSubmit={formHandler} ref={formRef}>
            <div className='flex gap-8 flex-col md:flex-row'>
                <div className='flex flex-col flex-grow items-start'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className={`w-full bg-transparent border-2 ${error && name === "" ? "border-red-500" : " border-caribbean_200"} rounded-md p-2 outline-none `} />
                </div>
                <div className='flex flex-col flex-grow items-start'>
                    <label htmlFor="email">Email</label>
                    <input name="email" value={email} onChange={(e) => handleEmailChange(e)} className={`w-full bg-transparent border-2 ${error && (email === "" || !emailValid) ? "border-red-500" : "border-caribbean_200"} rounded-md p-2 outline-none `} />
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className={`w-full bg-transparent border-2 ${error && message === "" ? "border-red-500" : "border-caribbean_200"} rounded-md p-2 outline-none `} />
            </div>

            <Button loading={loading} />
        </form>
    );
};


export default Form;

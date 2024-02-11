import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Heading from '../../Components/Ui/Heading';
import Section from '../../Components/Layouts/Section/Section';
import Message from './components/Message';
import Form from './components/Form';

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
                <Form
                    formRef={form}
                    formHandler={formHandler}
                    name={name}
                    setName={setName}
                    email={email}
                    handleEmailChange={handleEmailChange}
                    message={message}
                    setMessage={setMessage}
                    error={error}
                    loading={loading}
                    emailValid={emailValid}
                />
                {error && <Message error={error} />}
                {success && <Message />}
            </div>
        </Section>
    );

}

export default Contact;

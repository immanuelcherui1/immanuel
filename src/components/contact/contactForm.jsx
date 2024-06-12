import { FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
     
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_40g8lrs', 'template_kj62dw8', form.current, 'KH9Dm1YBWVcG7U7I5')
        .then((result) => {
            console.log(result.text);
            console.log('Message sent successfully!')
        }, (error) => {
            console.log(error.text);
            console.log('There was an error, please try again!')
        });
        
        e.target.reset()
        alert('Email sent successfully')
    };

    return ( 
        <>
            <div className="md:p-5 p-4 bg-slate-900 rounded-xl shadow-xl shadow-slate-800">
                <form ref={form} onSubmit={sendEmail} >
                    <div className="label">
                        <input className="input " type="text" name="user_name" placeholder="Enter name..." required />
                    </div>
                    <div className="label">
                        <input className="input " type="email" name="user_email" placeholder="Enter email..." required />
                    </div>
                    <div className="label">
                        <input className="input " type="text" name="subject" placeholder="Enter subject..." required />
                    </div>
                    <div className="label">
                        <textarea className="input" name="message" placeholder="Enter Message..." cols="30" rows="4"></textarea>
                    </div>
                    <button className="mt-4 btn flex items-center justify-center">
                        Submit
                        <span className="ml-2">
                            <FaPaperPlane />
                        </span>
                    </button>
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;
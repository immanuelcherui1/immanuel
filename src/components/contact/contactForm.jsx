import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactForm() {
 const form = useRef(null);
 const [status, setStatus] = useState('idle');
 async function sendEmail(event) {
  event.preventDefault();
  if (status === 'sending') return;
  setStatus('sending');
  try {
   await emailjs.sendForm('service_40g8lrs', 'template_kj62dw8', form.current, 'KH9Dm1YBWVcG7U7I5');
   form.current.reset();
   setStatus('success');
  } catch { setStatus('error'); }
 }
 return <form ref={form} onSubmit={sendEmail} className="contact-form" aria-label="Contact Immanuel"><label>Your name<input className="input" type="text" name="user_name" autoComplete="name" required maxLength={120}/></label><label>Email address<input className="input" type="email" name="user_email" autoComplete="email" required maxLength={254}/></label><label>Subject<input className="input" name="subject" required maxLength={180}/></label><label>Your message<textarea className="input" name="message" rows={5} required maxLength={5000}/></label><button className="btn" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Sending…' : 'Send message ↗'}</button><p role="status" aria-live="polite">{status === 'success' ? 'Thanks! Your message has been sent.' : status === 'error' ? 'Your message could not be sent. Please try again or email immanuelcherui1@gmail.com directly.' : ''}</p></form>
}

import ContactForm from './contactForm';
import ContactInfo from './contactInfo';
export default function Contact() {
 return <section id="contact"><div className="grid md:grid-cols-2 gap-10 md:gap-16"><ContactInfo/><ContactForm/></div></section>;
}

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Nav from '../Nav/Nav';
import c from './Contact.module.css';

const Contact = () => {

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_btl5xui', 'template_ah0r4df', form.current, 'KVwhYP9aWudkHjdT1')
        e.target.reset();
        return alert('Your message was sended')
    }
 
  return (
    <section className={c.main}>
        <Nav/>
        <div className={c.cont}>
            <div className={c.title}>
            <h3>get in touch</h3>
            <h2>Contact Me</h2>
            </div>
            <div>
                <form ref={form} onSubmit={handleSubmit} className={c.form}>
                    <input type='text' placeholder='Your Name' required />
                    <input type="email" placeholder='Your Email' required />
                    <textarea name="Message" rows="10" placeholder='Your Message' required ></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;
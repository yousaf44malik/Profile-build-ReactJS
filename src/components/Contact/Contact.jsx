import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hmj0qwt', 'template_phhgy2s', form.current, 'ZzY0R8gyiW_73I1I-')
   
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
    
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>yousaf44malik@gmail.com</h5>
        <a href="mailto:yousaf44malik@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <AiOutlinePhone className='contact__option-icon' />
        <h4>Phone</h4>
        <h5>0307-1022210</h5>
        <a href="">Send a message</a>
        </article>
        <article className="contact__option">
          <AiOutlineWhatsApp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>0307-xxxxxxx</h5>
        <a href="https://api.whatsapp.com/send?phone+923071022210" target="_blank">Send a message on Whatsapp</a>
        </article>

      </div>
      {/* End of contact options  */}
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>


    </div>
    </section>
  )
}

export default Contact
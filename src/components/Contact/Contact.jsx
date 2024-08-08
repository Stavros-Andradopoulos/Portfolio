import React, { useRef } from 'react'
import './Contact.css'
import Walmart from '../../Assets/walmart.png'
import Adobe from '../../Assets/adobe.png'
import Microsoft from '../../Assets/microsoft.png'
import Facebook from '../../Assets/facebook.png'
import FacebookIcon from '../../Assets/facebook-icon.png'
import InstagramIcon from '../../Assets/instagram.png'
import TwitterIcon from '../../Assets/twitter.png'
import YouTubeIcon from '../../Assets/youtube.png'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t24vqpg', 'template_g6dyk0i', form.current, {
                publicKey: 'yy2_ToWk8YnKIC4S8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Sent !');
                }, (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        };
    
    return (
        <section id='contactPage'>
            <div id="clients">
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className='clientImgs'>
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='user_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='user_email'/>
                    <textarea className="msg" name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value="Send" className='submitBtn'>Sumbit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        <img src={YouTubeIcon} alt="YouTube" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
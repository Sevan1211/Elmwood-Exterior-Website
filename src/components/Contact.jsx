// Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Adjust the path if necessary

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9fceggi',   // Replace with your EmailJS Service ID
        'template_ltv7p0f',  // Replace with your EmailJS Template ID
        form.current,
            {publicKey:'pE5J6_GuhifxMQNC4'}    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setEmailSent(true);
          setStatusMessage('Your message has been sent successfully!');
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatusMessage('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name" // Match variable in your EmailJS template
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" // Match variable in your EmailJS template
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message" // Match variable in your EmailJS template
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;




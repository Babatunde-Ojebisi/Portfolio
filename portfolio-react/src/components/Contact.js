import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name="message" 
          rows="5" 
          placeholder="Your Message" 
          required 
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
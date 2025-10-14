import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      ...formStatus,
      loading: true
    });
    
    try {
      // In a real implementation, you would use a service like EmailJS, Formspree, or a custom backend
      // This is a placeholder for demonstration - in production, replace with actual email sending logic
      
      // Example of how you might implement with EmailJS:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   { 
      //     name: formData.name,
      //     email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //     to_email: 'official.ojebisibabatunde@gmail.com'
      //   },
      //   'YOUR_USER_ID'
      // );
      
      // For now, we'll simulate a successful submission
      console.log('Form submitted to official.ojebisibabatunde@gmail.com:', formData);
      
      // Show success message
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
        loading: false
      });
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
            loading: false
          });
        }, 5000);
      }, 300);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.',
        loading: false
      });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div className="contact-form-wrapper">
          {formStatus.submitted && (
            <div className={`form-success-message ${formStatus.success ? 'success' : 'error'}`}>
              <p>{formStatus.message}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn submit-btn"
              disabled={formStatus.loading}
            >
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
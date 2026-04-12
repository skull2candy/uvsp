import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="section-padding contact-section">
      <div className="container contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Connect With Us</span>
          <h2 className="heading-secondary">Start a Conversation</h2>
          <p className="contact-text">
            For inquiries regarding our upcoming projects or to schedule a private viewing, please reach out to our advisory team.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={24} className="contact-icon" />
              <div>
                <h4>Corporate Office</h4>
                <p>12, Prithviraj Road, New Delhi 110011</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} className="contact-icon" />
              <div className="contact-detail-item">
                <h4>Direct Line</h4>
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                  <p>+91 88005 89785</p>
                  <a href="tel:+918800589785" style={{color: 'var(--accent-color)'}}><Phone size={18} /></a>
                  <a href="https://wa.me/918800589785" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)'}}><MessageCircle size={18} /></a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>info@uvspbuildcon.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" className="luxury-input" placeholder="FULL NAME" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" className="luxury-input" placeholder="EMAIL ADDRESS" required />
            </div>
            <div className="form-group">
              <select id="project" className="luxury-input" required>
                <option value="" disabled selected hidden>PROJECT INTEREST</option>
                <option value="ryhan-square">Ryhan Square</option>
                <option value="the-crown">The Crown</option>
                <option value="other">Other / General</option>
              </select>
            </div>
            <div className="form-group">
              <textarea id="message" rows="1" className="luxury-input" placeholder="HOW CAN WE ASSIST?" required style={{resize: 'none'}}></textarea>
            </div>
            <button type="submit" className="btn luxury-submit-btn w-full" disabled={isSent} style={{marginTop: '2rem'}}>
              {isSent ? 'Sent Successfully!' : 'Send Inquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

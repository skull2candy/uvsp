import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { pageVariants } from '../utils/animations';
import SEO from '../components/SEO';
import './Pages.css';

const ContactPage = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      message: e.target[3].value,
      property_interest: 'General Inquiry'
    };

    try {
       await fetch('/api/leads', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
       setIsSent(true);
       setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
       console.error("Submission failed", err);
       alert("Technical error. Please try again or contact via phone.");
    }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-wrapper contact-monolithic"
      style={{position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '10rem', paddingBottom: '6rem'}}
    >
      <SEO 
        title="Private Advisory" 
        description="Contact UVSP Buildcon for exclusive real estate consultations and architectural inquiries in New Delhi." 
      />
      {/* EXTREME LUXURY TEXTURE WATERMARK */}
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none'}}>
         <img src="/contact.png" alt="Architectural Watermark" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, filter: 'grayscale(100%)'}} />
      </div>

      <div className="container" style={{position: 'relative', zIndex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        
        {/* HEADER TEXT */}
        <motion.div variants={staggerContainer} initial="initial" animate="animate" style={{marginBottom: '5rem'}}>
           <motion.span variants={fadeInUp} className="subtitle" style={{color: 'var(--accent-color)', letterSpacing: '0.4em'}}>Concierge Services</motion.span>
           <motion.h1 variants={fadeInUp} className="heading-primary" style={{fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1.1', margin: '1.5rem 0'}}>
             Private Advisory
           </motion.h1>
           <motion.p variants={fadeInUp} className="body-text-large" style={{opacity: 0.8, maxWidth: '600px', margin: '0 auto'}}>
             Whether you seek to acquire a bespoke residence or require insights into our architectural process, our advisory board is at your absolute disposal.
           </motion.p>
        </motion.div>

        {/* THE FORM CORE */}
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.8, duration: 1, ease: [0.16, 1, 0.3, 1]}} style={{width: '100%', maxWidth: '600px'}}>
           <AnimatePresence mode="wait">
             {!isSent ? (
               <motion.form key="form" className="elite-form" onSubmit={handleSubmit} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, filter: 'blur(10px)'}}>
                 <div className="form-group">
                    <input type="text" className="luxury-input" placeholder="Full Name" required />
                 </div>
                 <div className="form-group">
                    <input type="email" className="luxury-input" placeholder="Email Address" required />
                 </div>
                 <div className="form-group">
                    <input type="text" className="luxury-input" placeholder="Phone Number (Optional)" />
                 </div>
                 <div className="form-group">
                    <textarea rows="1" className="luxury-input" placeholder="How can we assist you?" required style={{resize: 'none'}}></textarea>
                 </div>
                 <button type="submit" className="btn luxury-submit-btn w-full" style={{marginTop: '3rem'}}>
                   Request Consultation
                 </button>
               </motion.form>
             ) : (
               <motion.div key="success" className="elite-success-state" initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}>
                  <h3 className="heading-secondary" style={{fontSize: '2.2rem', color: 'var(--accent-color)', marginBottom: '1.5rem'}}>Inquiry Secured.</h3>
                  <p className="body-text-large" style={{maxWidth: '500px', margin: '0 auto', opacity: 0.8}}>
                     An executive architecture advisor has been pinged and will contact you shortly regarding your request. We appreciate your interest in UVSP Buildcon.
                  </p>
               </motion.div>
             )}
           </AnimatePresence>
        </motion.div>

        {/* METADATA FOOTER (Office & Direct) */}
        <motion.div className="contact-metadata-footer" initial={{opacity:0, y: 30}} animate={{opacity:1, y:0}} transition={{delay:1.2, duration: 1}}>
           <div className="metadata-item">
             <h4 className="label-text" style={{color: 'var(--accent-color)', marginBottom: '0.5rem'}}>Corporate HQ</h4>
             <p style={{fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', opacity: 0.6}}>12, Prithviraj Road, New Delhi</p>
           </div>
           <div className="metadata-item">
             <h4 className="label-text" style={{color: 'var(--accent-color)', marginBottom: '0.5rem'}}>Direct Line</h4>
             <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center'}}>
               <p style={{fontFamily: 'Inter, sans-serif', fontSize: '1rem', opacity: 0.8}}>+91 88005 89785</p>
               <a href="tel:+918800589785" style={{color: 'var(--accent-color)', marginLeft: '0.5rem', transition: 'all 0.3s ease'}}><Phone size={18} /></a>
               <a href="https://wa.me/918800589785" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', transition: 'all 0.3s ease'}}><MessageCircle size={18} /></a>
             </div>
           </div>
           <div className="metadata-item">
             <h4 className="label-text" style={{color: 'var(--accent-color)', marginBottom: '0.5rem'}}>Email</h4>
             <p style={{fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', opacity: 0.6}}>info@uvspbuildcon.com</p>
           </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactPage;

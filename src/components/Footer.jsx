import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import './Footer.css';

// Reusable Kinetic Link Component
const KineticLink = ({ to, label, external = false }) => {
  const content = (
    <motion.div 
      className="kinetic-link-content"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span className="kl-text">{label}</span>
      <motion.span 
        className="kl-arrow"
        variants={{
          rest: { opacity: 0, x: -10, y: 10 },
          hover: { opacity: 1, x: 0, y: 0, transition: { duration: 0.3 } }
        }}
      >
        <ArrowUpRight size={18} />
      </motion.span>
    </motion.div>
  );

  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className="kinetic-link">{content}</a>
  ) : (
    <Link to={to} className="kinetic-link">{content}</Link>
  );
};

const Footer = () => {  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="footer-cinematic">
      <motion.div 
        className="container footer-c-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* TOP ROW: Content Split */}
        <div className="footer-split">
           
           {/* Left Column: Brand & Advisory */}
           <motion.div variants={itemVariants} className="footer-left">
              <div style={{marginBottom: '2rem'}}>
                <img src="/logo.png" alt="UVSP" className="footer-luxury-logo" />
              </div>
              <p className="footer-mission">
                Forging absolute architectural supremacy across New Delhi. We do not build houses; we curate private estates of generational value.
              </p>
              
              <div className="f-contact-block" style={{marginTop: '4rem'}}>
                 <span className="f-label">Private Advisory</span>
                 <a href="mailto:info@uvspbuildcon.com" className="f-contact-link">info@uvspbuildcon.com</a>
                 <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem'}}>
                    <a href="tel:+918800589785" className="f-contact-link" style={{marginBottom: 0}}>+91 88005 89785</a>
                    <a href="tel:+918800589785" style={{color: 'var(--accent-color)', transition: 'all 0.3s ease'}}><Phone size={20} /></a>
                    <a href="https://wa.me/918800589785" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', transition: 'all 0.3s ease'}}><MessageCircle size={20} /></a>
                 </div>
                 <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <a href="tel:+917982168465" className="f-contact-link" style={{marginBottom: 0}}>+91 79821 68465</a>
                    <a href="tel:+917982168465" style={{color: 'var(--accent-color)', transition: 'all 0.3s ease'}}><Phone size={20} /></a>
                    <a href="https://wa.me/917982168465" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', transition: 'all 0.3s ease'}}><MessageCircle size={20} /></a>
                 </div>
              </div>
           </motion.div>
           
           {/* Right Column: Kinetic Navigation */}
           <div className="footer-right">
              
              <motion.div variants={itemVariants} className="f-nav-col">
                 <span className="f-label">Navigation</span>
                 <nav className="f-nav-list">
                    <KineticLink to="/" label="Portfolio" />
                    <KineticLink to="/about" label="The Philosophy" />
                    <KineticLink to="/journal" label="Editorial Journal" />
                    <KineticLink to="/contact" label="Private Advisory" />
                 </nav>
              </motion.div>

              <motion.div variants={itemVariants} className="f-nav-col">
                 <span className="f-label">Network</span>
                 <nav className="f-nav-list">
                    <KineticLink external to="#" label="Instagram" />
                    <KineticLink external to="#" label="LinkedIn" />
                    <KineticLink external to="#" label="Architectural Digest" />
                 </nav>
              </motion.div>

           </div>
        </div>

        {/* MASSIVE TYPOGRAPHY ANCHOR */}
        <motion.div variants={itemVariants} className="footer-massive-type-wrapper">
           <h1 className="footer-massive-type">UVSP BUILDCON</h1>
        </motion.div>

        {/* BOTTOM METADATA ROW */}
        <motion.div variants={itemVariants} className="footer-bottom-row">
           <p className="f-meta">&copy; {new Date().getFullYear()} UVSP Buildcon Pvt. Ltd. Absolute Rights Reserved.</p>
           <div className="f-legal">
              <Link to="#">Terms of Acquisition</Link>
              <Link to="#">Privacy Architecture</Link>
           </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;

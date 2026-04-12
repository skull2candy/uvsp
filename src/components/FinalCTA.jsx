import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

const FinalCTA = () => (
  <section
    style={{
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#050505',
      overflow: 'hidden',
    }}
  >
    {/* Subtle background texture */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'url(/cta-luxury-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.15,
    }} />

    {/* Gold gradient orb */}
    <div style={{
      position: 'absolute',
      top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px', height: '600px',
      background: 'radial-gradient(circle, rgba(200,176,130,0.12) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '6rem 2rem' }}>

      <motion.span
        className="subtitle"
        style={{ color: 'var(--accent-color)', letterSpacing: '0.4em' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Begin Your Journey
      </motion.span>

      <motion.h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          color: '#fff',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          margin: '1.5rem 0 1rem',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Let's Build Your<br />Dream Address.
      </motion.h2>

      <motion.p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.05em',
          marginBottom: '4rem',
          maxWidth: '500px',
          margin: '0 auto 4rem',
          lineHeight: 1.7,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        18 years of trust. 500+ happy families. One call away from your finest address in South Delhi.
      </motion.p>

      <motion.div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="btn btn-solid"
          style={{ textDecoration: 'none', padding: '18px 40px', fontSize: '0.8rem' }}
        >
          Contact Us
        </Link>
        <Link
          to="/contact"
          className="btn"
          style={{
            textDecoration: 'none',
            padding: '18px 40px',
            fontSize: '0.8rem',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
          }}
        >
          <Phone size={15} style={{ marginRight: '0.5rem' }} />
          Schedule Visit
        </Link>
        <a
          href="https://wa.me/918800589785?text=Hi%20UVSP%2C%20I'd%20like%20to%20enquire%20about%20your%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            textDecoration: 'none',
            padding: '18px 40px',
            fontSize: '0.8rem',
            border: '1px solid #25D366',
            color: '#25D366',
          }}
        >
          <MessageCircle size={15} style={{ marginRight: '0.5rem' }} />
          WhatsApp Now
        </a>
      </motion.div>

      {/* Phone numbers below */}
      <motion.div
        style={{ marginTop: '5rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a href="tel:+918800589785"
          style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textDecoration: 'none' }}>
          +91 88005 89785
        </a>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
        <a href="tel:+917982168465"
          style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textDecoration: 'none' }}>
          +91 79821 68465
        </a>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
        <a href="mailto:info@uvspbuildcon.com"
          style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textDecoration: 'none' }}>
          info@uvspbuildcon.com
        </a>
      </motion.div>

    </div>
  </section>
);

export default FinalCTA;

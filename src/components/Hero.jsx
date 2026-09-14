import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="hero-section">
      <motion.div className="hero-image-container" style={{ y }}>
        <img src="/main-hero.webp" alt="Luxury Architecture" className="hero-image" />
        <div className="hero-overlay"></div>
      </motion.div>

      <motion.div
        className="hero-content"
        style={{ opacity }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container hero-container">
          <div className="hero-badge-pill">
            <span className="hero-badge-dot" />
            <span>EST. 2006 · SOUTH DELHI ARCHITECTURAL MASTERY</span>
          </div>

          <motion.h1
            className="heading-primary hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Bespoke Residences <br />
            <span className="text-gold-gradient">&amp; Luxury Floors</span>
          </motion.h1>

          <motion.p
            className="hero-subheadline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Jaunapur · Vasant Kunj · Mehrauli · Chattarpur
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button
              className="btn btn-solid hero-btn hero-btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Selected Works
            </button>
            <Link
              to="/contact"
              className="btn hero-btn hero-btn-outline"
            >
              <Calendar size={15} style={{ marginRight: '0.6rem', color: 'var(--accent-color)' }} />
              Schedule Private Viewing
            </Link>
            <a
              href="https://wa.me/918800589785"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn hero-btn-concierge"
            >
              <MessageCircle size={15} style={{ marginRight: '0.6rem' }} />
              WhatsApp Concierge
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Micro Ticker Bar */}
      <div className="hero-ticker-bar">
        <div className="hero-ticker-item">
          <span className="ticker-label">FEATURED CORRIDOR</span>
          <span className="ticker-val">Whispering Pines, Jaunapur</span>
        </div>
        <div className="hero-ticker-sep" />
        <div className="hero-ticker-item">
          <span className="ticker-label">FLAGSHIP RESIDENCE</span>
          <span className="ticker-val">The Crown, Vasant Kunj</span>
        </div>
        <div className="hero-ticker-sep" />
        <div className="hero-ticker-item">
          <span className="ticker-label">HERITAGE SECTOR</span>
          <span className="ticker-val">Ryhan Square, South Delhi</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

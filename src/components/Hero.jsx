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
        <img src="/main-hero.png" alt="Luxury Architecture" className="hero-image" />
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
          <motion.span
            className="subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The Most Trusted Builders in South Delhi
          </motion.span>
          <motion.h1
            className="heading-primary"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Premium South Delhi<br />Builder Floors
          </motion.h1>
          <motion.p
            className="hero-subheadline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
          >
            Luxury Residences &nbsp;·&nbsp; Premium Floors &nbsp;·&nbsp; Trusted Development
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button
              className="btn btn-solid hero-btn"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </button>
            <Link
              to="/contact"
              className="btn hero-btn hero-btn-outline"
            >
              <Calendar size={16} style={{ marginRight: '0.5rem' }} />
              Book Site Visit
            </Link>
            <a
              href="https://wa.me/918800589785"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn hero-btn-whatsapp"
            >
              <MessageCircle size={16} style={{ marginRight: '0.5rem' }} />
              WhatsApp Now
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

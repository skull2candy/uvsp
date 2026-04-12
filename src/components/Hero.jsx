import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="hero-section">
      <motion.div 
        className="hero-image-container"
        style={{ y }}
      >
        <img 
          src="/main-hero.png" 
          alt="Luxury Architecture" 
          className="hero-image"
        />
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
            A Legacy of Excellence
          </motion.span>
          <motion.h1 
            className="heading-primary"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Crafting Timeless<br />Spaces
          </motion.h1>
          <motion.button 
            className="btn btn-solid"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/philosophy.png" 
            alt="Interior Detail" 
            className="about-image"
          />
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="subtitle">Luxury Developers</span>
          <h2 className="heading-secondary">Best Builders in South Delhi</h2>
          <p className="about-text">
            At UVSP Buildcon, we believe that true luxury lies in the unseen details. Our architectural vision is rooted in the timeless elegance of Italian design—where form meets function precisely, and natural materials speak their own quiet, profound language. 
          </p>
          <p className="about-text">
            Every project we undertake is a testament to meticulous craftsmanship, merging classic proportions with modern sensibilities to create spaces that transcend trends.
          </p>
          <Link to="/project/featured" className="btn" style={{textDecoration: 'none'}}>Our Heritage</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  '/project_1.png',
  '/project_2.png',
  '/hero.png',
  '/project_3.png',
  '/contact.png'
];

const Gallery = () => {
  return (
    <section className="section-padding gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="subtitle">Visuals</span>
          <h2 className="heading-secondary">Gallery</h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index}
              className={`gallery-item item-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img src={src} alt="Gallery item" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

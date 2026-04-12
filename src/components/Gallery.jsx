import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryItems = [
  { src: '/ryhan-gallery/1.png', type: 'image' },
  { src: '/ryhan-gallery/2.png', type: 'image' },
  { src: '/ryhan-gallery/vid1.mp4', type: 'video' },
  { src: '/ryhan-gallery/4.png', type: 'image' },
  { src: '/ryhan-gallery/5.png', type: 'image' },
  { src: '/ryhan-gallery/6.png', type: 'image' },
  { src: '/ryhan-gallery/vid2.mp4', type: 'video' },
  { src: '/ryhan-gallery/8.png', type: 'image' },
  { src: '/ryhan-gallery/9.png', type: 'image' },
  { src: '/ryhan-gallery/3.png', type: 'image' },
  { src: '/ryhan-gallery/10.png', type: 'image' },
  { src: '/ryhan-gallery/7.png', type: 'image' },
  { src: '/ryhan-gallery/11.png', type: 'image' }
];

const MediaItem = ({ item, isActive, onMouseEnter }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, item.type]);

  return (
    <div 
      className={`accordion-item ${isActive ? 'active' : ''}`}
      onMouseEnter={onMouseEnter}
    >
      {item.type === 'video' ? (
        <video 
          ref={videoRef}
          src={item.src} 
          muted 
          loop 
          playsInline 
          className="accordion-media"
        />
      ) : (
        <img src={item.src} alt="Gallery Exhibit" className="accordion-media" />
      )}
    </div>
  );
};

const Gallery = () => {
  // We default to centering the active state on the 7th item (index 6) to make it look balanced initially
  const [activeIndex, setActiveIndex] = useState(6);

  return (
    <section className="gallery-masterpiece">
      <div className="container" style={{textAlign: 'center', marginBottom: '4rem'}}>
         <span className="subtitle" style={{letterSpacing: '0.4em'}}>A Visual Journey</span>
         <h2 className="heading-secondary" style={{fontSize: 'clamp(3rem, 6vw, 5rem)'}}>Ryhan Curations</h2>
      </div>

      <motion.div 
        className="accordion-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-10%" }}
      >
        {galleryItems.map((item, index) => (
          <MediaItem 
            key={index} 
            item={item} 
            isActive={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;

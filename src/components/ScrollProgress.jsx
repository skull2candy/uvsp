import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--accent-color)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 9999,
        boxShadow: '0 0 8px rgba(200, 176, 130, 0.6)',
      }}
    />
  );
};

export default ScrollProgress;

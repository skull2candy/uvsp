import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 18, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Happy Families' },
  { value: 50, suffix: '+', label: 'Delivered Projects' },
  { value: 100, suffix: '%', label: 'Quality Commitment' },
];

const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const TrustStats = () => (
  <section style={{
    background: '#0D0D0D',
    borderTop: '1px solid rgba(197, 168, 128, 0.2)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '4.5rem 0',
    position: 'relative',
  }}>
    <div className="container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2.5rem',
      alignItems: 'center',
    }}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            textAlign: 'center',
            position: 'relative',
            padding: '1rem',
          }}
        >
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
            color: '#FFFFFF',
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: '-0.03em',
            textShadow: '0 4px 20px rgba(197, 168, 128, 0.15)',
          }}>
            <CountUp target={stat.value} suffix={stat.suffix} />
          </div>
          <div style={{
            fontFamily: 'Inter',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent-color)',
            fontWeight: 600,
            marginTop: '0.85rem',
          }}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustStats;

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
    background: 'var(--surface-color)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    padding: '5rem 0',
  }}>
    <div className="container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
    }}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: 'var(--accent-color)',
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: '-0.02em',
          }}>
            <CountUp target={stat.value} suffix={stat.suffix} />
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-color)',
            opacity: 0.6,
            marginTop: '0.75rem',
          }}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustStats;

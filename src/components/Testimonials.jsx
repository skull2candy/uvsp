import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajiv Sharma',
    role: 'Director, Sharma Enterprises',
    location: 'Vasant Kunj, South Delhi',
    review: 'UVSP Buildcon delivered a residence that truly exceeds every expectation. The attention to detail in The Crown is extraordinary — every corner radiates the quiet luxury I was looking for.',
    rating: 5,
  },
  {
    name: 'Priya Malhotra',
    role: 'Senior Partner, M&A Law Firm',
    location: 'Mehrauli, South Delhi',
    review: 'What struck me most was their transparent process. No hidden costs, timely possession, and a finish quality that rivals the finest residences in Delhi. UVSP is a name I recommend unconditionally.',
    rating: 5,
  },
  {
    name: 'Anil & Sunita Kapoor',
    role: 'Homeowners',
    location: 'Ryhan Square, Vasant Kunj',
    review: 'After 20 years of searching, we finally found the home we deserved. The craftsmanship at Ryhan Square is extraordinary. Our family feels the difference every single day.',
    rating: 5,
  },
  {
    name: 'Vikram Anand',
    role: 'Real Estate Investor',
    location: 'South Delhi Portfolio',
    review: 'As an investor, I have worked with dozens of developers. UVSP Buildcon stands apart — their properties appreciate faster, their build quality is unmatched, and their team is a pleasure to work with.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.4 } }),
  };

  return (
    <section style={{
      background: 'var(--bg-color)',
      padding: '8rem 0',
      borderTop: '1px solid var(--border-color)',
    }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="subtitle">Client Voices</span>
          <h2 className="heading-secondary">What Our Residents Say</h2>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px' }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                padding: 'clamp(2rem, 5vw, 4rem)',
                borderRadius: '2px',
                textAlign: 'center',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '2rem' }}>
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-color)" color="var(--accent-color)" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                lineHeight: 1.7,
                color: 'var(--text-color)',
                opacity: 0.9,
                fontStyle: 'italic',
                marginBottom: '2.5rem',
                maxWidth: '700px',
                margin: '0 auto 2.5rem',
              }}>
                "{testimonials[current].review}"
              </p>

              {/* Divider */}
              <div style={{ width: '40px', height: '1px', background: 'var(--accent-color)', margin: '0 auto 1.5rem' }} />

              {/* Attribution */}
              <div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-color)',
                }}>
                  {testimonials[current].name}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-color)',
                  marginTop: '0.3rem',
                }}>
                  {testimonials[current].role} &nbsp;·&nbsp; {testimonials[current].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          marginTop: '3rem',
        }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: 'none', border: '1px solid var(--border-color)',
              color: 'var(--text-color)', padding: '0.7rem', cursor: 'pointer',
              display: 'flex', transition: 'all 0.3s ease', borderRadius: '2px',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--accent-color)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-color)'; }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  border: 'none',
                  borderRadius: '4px',
                  background: i === current ? 'var(--accent-color)' : 'var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            style={{
              background: 'none', border: '1px solid var(--border-color)',
              color: 'var(--text-color)', padding: '0.7rem', cursor: 'pointer',
              display: 'flex', transition: 'all 0.3s ease', borderRadius: '2px',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--accent-color)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-color)'; }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

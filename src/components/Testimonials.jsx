import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Harish Sharma',
    location: 'Verified Review',
    review: 'It was a very positive experience interacting with the UVSP team. Their passion, dedication, and commitment toward their responsibilities are clearly visible. Wishing them continued success.',
    rating: 5,
  },
  {
    name: 'Shashank Trivedi',
    location: 'Verified Review',
    review: 'Amazing work! Truly honest and delivered with the right perspective. Highly recommended for anyone looking for quality and reliability.',
    rating: 5,
  },
  {
    name: 'Kaveri Kadam',
    location: 'Verified Review',
    review: 'The team shows passion and dedication for their work. Both have a Strong potential and has clear idea with concepts. All the best for future success.',
    rating: 5,
  },
  {
    name: 'Ripudaman Chauhan',
    location: 'Verified Review',
    review: 'Amazing work. Very co-operative, helpful, and trustworthy. Keep the great work up!',
    rating: 5,
  },
  {
    name: 'Aamir Aashique',
    location: 'Verified Review',
    review: 'One of the true real estate people—honest and dedicated to their craft.',
    rating: 5,
  },
  {
    name: 'Akhileshwar Prasad',
    location: 'Verified Review',
    review: 'Professional, energetic and incredibly responsive. 10/10 experience with UVSP Buildcon.',
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
                  {testimonials[current].location}
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

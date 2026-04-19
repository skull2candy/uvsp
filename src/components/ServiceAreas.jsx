import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
  {
    name: 'Vasant Kunj',
    tag: 'Primary Market',
    desc: 'Diplomatic avenues, lush green cover, premium connectivity. The crown jewel of South Delhi real estate.',
    highlight: 'The Crown · Ryhan Square',
    color: '#C8B082',
  },
  {
    name: 'Mehrauli',
    tag: 'Heritage Locale',
    desc: 'Where centuries of history meets ultra-modern luxury living. Unmatched privacy and architectural grandeur.',
    highlight: 'Upcoming Estates',
    color: '#A99260',
  },
  {
    name: 'Chattarpur',
    tag: 'Growing Enclave',
    desc: 'South Delhi\'s fastest-appreciating micro-market. Metro connectivity meets premium farmhouse culture.',
    highlight: 'Select Residences',
    color: '#8F7B50',
  },
  {
    name: 'Saket',
    tag: 'Urban Premium',
    desc: 'Adjacent to Select Citywalk and premier hospitals. Walk-to-everything luxury for the modern family.',
    highlight: 'Prime Floors',
    color: '#B5A27E',
  },
  {
    name: 'South Delhi',
    tag: 'Portfolio Spread',
    desc: '50+ delivered projects across South Delhi\'s finest sectors. A 18-year legacy of architectural excellence.',
    highlight: '50+ Delivered Projects',
    color: '#C8B082',
  },
];

const ServiceAreas = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: 'var(--surface-color)', padding: '10rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '6rem', maxWidth: '600px' }}
        >
          <span className="subtitle">Premier Builders in South Delhi</span>
          <h2 className="heading-secondary">Dominating the South Delhi Luxury Corridor</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--text-color)', opacity: 0.6, lineHeight: 1.7 }}>
            As the most reputed <strong>builders in South Delhi</strong>, we have delivered 50+ bespoke luxury floors in Vasant Kunj, Mehrauli, Saket, and beyond. Every location is handpicked for elite lifestyle and high capital appreciation.
          </p>
        </motion.div>

        {/* Location List */}
        <div style={{ borderTop: '1px solid var(--border-color)' }}>
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2rem 0',
                borderBottom: '1px solid var(--border-color)',
                cursor: 'pointer',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              {/* Number + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: '1' }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: 'var(--accent-color)',
                  letterSpacing: '0.2em',
                  minWidth: '30px',
                }}>
                  0{i + 1}
                </span>
                <div>
                  <motion.h3
                    animate={{ color: hovered === i ? 'var(--accent-color)' : 'var(--text-color)' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {loc.name}
                  </motion.h3>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-color)',
                    opacity: 0.8,
                  }}>
                    {loc.tag}
                  </span>
                </div>
              </div>

              {/* Description — visible on hover */}
              <motion.p
                animate={{ opacity: hovered === i ? 1 : 0, x: hovered === i ? 0 : 10 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: 'var(--text-color)',
                  opacity: 0.7,
                  lineHeight: 1.6,
                  flex: 2,
                  display: 'none',
                  maxWidth: '400px',
                }}
                className="location-desc"
              >
                {loc.desc}
              </motion.p>

              {/* Highlight + Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-color)',
                  opacity: 0.5,
                  whiteSpace: 'nowrap',
                }}>
                  {loc.highlight}
                </span>
                <motion.div
                  animate={{
                    x: hovered === i ? 5 : 0,
                    color: hovered === i ? 'var(--accent-color)' : 'var(--text-color)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={20} strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginTop: '5rem', textAlign: 'center' }}
        >
          <Link to="/portfolio" className="btn btn-solid" style={{ textDecoration: 'none' }}>
            View All Projects
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceAreas;

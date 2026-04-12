import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
      
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              background: '#1b1b1b',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(10px)',
            }}
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/918800589785?text=Hi%20UVSP%20Buildcon%2C%20I'm%20interested%20in%20your%20luxury%20properties."
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setTooltip(true)}
        onHoverEnd={() => setTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#fff',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          position: 'relative',
        }}
      >
        {/* Pulse ring */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid #25D366',
          }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.8, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <MessageCircle size={26} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;

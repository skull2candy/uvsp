import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageVariants } from '../utils/animations';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg-color)'
      }}
    >
      <SEO title="404 Page Not Found" noindex />
      
      <motion.span 
        className="subtitle" 
        style={{ color: 'var(--accent-color)', letterSpacing: '0.4em', marginBottom: '1rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ERROR 404
      </motion.span>
      
      <h1 className="heading-primary" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '2rem' }}>
        Foundations Not Found
      </h1>
      
      <p style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '1.1rem', 
        color: 'var(--text-color)', 
        opacity: 0.6, 
        maxWidth: '500px', 
        lineHeight: 1.8,
        marginBottom: '3rem'
      }}>
        The architectural layout for this page does not exist. It may have been relocated or removed from our portfolio.
      </p>
      
      <Link to="/" className="btn btn-solid" style={{ textDecoration: 'none' }}>
        Return to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;

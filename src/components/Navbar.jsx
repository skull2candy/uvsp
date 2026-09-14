import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['transparent', 'var(--bg-color)']
  );

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        style={{ backgroundColor }}
      >
        <div className="navbar-container">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="UVSP Logo" className="logo-img" />
          </Link>

          <div className="nav-desktop">
            <Link to="/about" className="menu-btn">ABOUT</Link>
            <div className="nav-dropdown">
              <span className="menu-btn dropdown-toggle">PORTFOLIO</span>
              <div className="dropdown-menu">
                <Link to="/portfolio" className="dropdown-link dropdown-header-link">
                  <span>All Projects</span>
                  <span className="dropdown-badge">Overview</span>
                </Link>
                <div className="dropdown-separator" />
                <Link to="/property/whispering-pines" className="dropdown-link">
                  <span className="dropdown-item-title">Whispering Pines</span>
                  <span className="dropdown-item-sub">Jaunapur · 3 BHK</span>
                </Link>
                <Link to="/property/the-crown" className="dropdown-link">
                  <span className="dropdown-item-title">The Crown</span>
                  <span className="dropdown-item-sub">Vasant Kunj · 3 BHK</span>
                </Link>
                <Link to="/property/ryhan-square" className="dropdown-link">
                  <span className="dropdown-item-title">Ryhan Square</span>
                  <span className="dropdown-item-sub">Vasant Kunj · 3 BHK</span>
                </Link>
              </div>
            </div>
            <Link to="/journal" className="menu-btn">JOURNAL</Link>
            <Link to="/contact" className="nav-cta-btn">
              <span className="nav-cta-dot" />
              <span>BOOK VISIT</span>
            </Link>
          </div>

          <div className="nav-mobile-controls">
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-content">
              <Link to="/about" className="mobile-link">ABOUT</Link>
              <Link to="/portfolio" className="mobile-link">PORTFOLIO</Link>
              <Link to="/journal" className="mobile-link">JOURNAL</Link>
              <Link to="/contact" className="mobile-link">CONTACT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

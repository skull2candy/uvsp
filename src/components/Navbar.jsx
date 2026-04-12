import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
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
              <span className="menu-btn dropdown-toggle">EXPLORE</span>
              <div className="dropdown-menu">
                <Link to="/portfolio" className="dropdown-link">Portfolio</Link>
                <Link to="/property/the-crown" className="dropdown-link">The Crown</Link>
                <Link to="/property/ryhan-square" className="dropdown-link">Ryhan Square</Link>
              </div>
            </div>
            <Link to="/journal" className="menu-btn">JOURNAL</Link>
            <Link to="/contact" className="menu-btn">CONTACT</Link>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="nav-mobile-controls">
            <button className="theme-toggle" onClick={toggleTheme} style={{marginRight: '1rem'}}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
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

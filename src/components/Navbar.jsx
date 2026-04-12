import { Moon, Sun } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['transparent', 'var(--bg-color)']
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{ backgroundColor }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="UVSP Logo" className="logo-img" />
        </Link>
        <div className="nav-actions">
          <Link to="/about" className="menu-btn" style={{textDecoration: 'none'}}>ABOUT</Link>
          <div className="nav-dropdown">
            <span className="menu-btn dropdown-toggle">EXPLORE</span>
            <div className="dropdown-menu">
              <Link to="/project/featured" className="dropdown-link">Featured Project</Link>
              <Link to="/project/standard" className="dropdown-link">Standard Project</Link>
            </div>
          </div>
          <Link to="/journal" className="menu-btn" style={{textDecoration: 'none'}}>JOURNAL</Link>
          <Link to="/contact" className="menu-btn" style={{textDecoration: 'none'}}>CONTACT</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

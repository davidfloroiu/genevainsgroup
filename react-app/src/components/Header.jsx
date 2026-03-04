import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${!isHome && !scrolled ? ' nav-dark-hero' : ''}`}>
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="Geneva Insurance Group" />
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#philosophy" onClick={(e) => handleNavClick(e, '#philosophy')}>Our Philosophy</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
        <li><a href="#process" onClick={(e) => handleNavClick(e, '#process')}>Process</a></li>
        <li><a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')}>Why Us</a></li>
        <li><a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')}>Reviews</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-cta">Get a Quote</a></li>
      </ul>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

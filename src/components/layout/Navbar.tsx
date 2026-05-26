import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from '../BrandLogo';
import { useNavScroll } from '../../hooks/useReveal';
import { NAV_LINKS } from '../../lib/data';
import './Navbar.css';

export default function Navbar() {
  const scrolled = useNavScroll();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <Link to="/" className="nav-logo">
          <BrandLogo className="nav-logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`nav-link${l.path === '/contact' ? ' nav-cta' : ''}${pathname === l.path ? ' active' : ''}`}
              >
                <span>{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger — always on top */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`mobile-nav-link${l.path === '/contact' ? ' mobile-nav-cta' : ''}${pathname === l.path ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
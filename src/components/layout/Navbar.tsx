import { Link, useLocation } from 'react-router-dom';
import BrandLogo from '../BrandLogo';
import { useNavScroll } from '../../hooks/useReveal';
import { NAV_LINKS } from '../../lib/data';
import './Navbar.css';

export default function Navbar() {
  const scrolled = useNavScroll();
  const { pathname } = useLocation();
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <BrandLogo className="nav-logo-img" />
      </Link>

      <ul className="nav-links">
        {NAV_LINKS.map(l => (
          <li key={l.path}>
            <Link to={l.path} className={`nav-link${l.path === '/contact' ? ' nav-cta' : ''}${pathname === l.path ? ' active' : ''}`}>
              <span>{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
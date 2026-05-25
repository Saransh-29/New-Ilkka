import { Link } from 'react-router-dom';
import BrandLogo from '../BrandLogo';
import { COMPANY } from '../../lib/data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <BrandLogo className="footer-logo-img" />
          </Link>
          <p>
            {COMPANY.tagline}. A progressive pharmaceutical company providing high-quality, affordable healthcare
            solutions in Gynaecology and Infertility across India.
          </p>
          <div className="footer-certs">
            {['WHO-GMP', 'ISO Compliant', 'Tablets', 'Capsules', 'Syrups', 'Injectables'].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/manufacturing">Manufacturing</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <div className="footer-col">
          <h4>Science</h4>
          <Link to="/research">Research & Innovation</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Insights</Link>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <Link to="/contact">Contact Us</Link>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter / X</a>
          <a href="#">Investor Relations</a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2025 {COMPANY.name}. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
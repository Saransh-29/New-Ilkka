import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Cursor from './components/ui/Cursor';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import Products from './pages/Products';
import Research from './pages/Research';
import Sustainability from './pages/Sustainability';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/research" element={<Research />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

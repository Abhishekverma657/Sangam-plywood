import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/Sangam_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-2' : 'bg-surface border-b border-black/5 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logoImg} alt="Sangam Plywood Logo" className="h-10 md:h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors text-sm font-medium uppercase tracking-wider ${
                    isActive ? 'text-primary' : 'text-text-main hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="tel:9460756014"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-background px-5 py-2 rounded-full font-medium transition-colors"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full border-t border-black/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 text-base font-medium rounded-md ${
                    isActive ? 'text-primary bg-white/10' : 'text-text-main hover:text-primary hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="tel:9460756014"
              className="flex items-center justify-center gap-2 bg-primary text-background px-5 py-3 rounded-md font-medium mt-4"
            >
              <Phone size={18} />
              <span>+91-9460756014</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

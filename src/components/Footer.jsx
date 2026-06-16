import { Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/sangam-logo1.png';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={logoImg} alt="Sangam Plywood Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Premium quality wood and plywood products for commercial and residential applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-white shrink-0 mt-1" />
                <span className="text-white/80">Bhilwara, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-white shrink-0" />
                <div>
                  <span className="block text-white/80">+91-7709081913</span>
                  <span className="block text-white/80">+91-9460756014</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-white shrink-0" />
                <a href="mailto:sangamplywoodbhl@yahoo.com" className="text-white/80 hover:text-white transition-colors">sangamplywoodbhl@yahoo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center flex justify-center items-center">
          <p className="text-white/80 text-sm text-center">
            &copy; {new Date().getFullYear()} All rights reserved. Managed by AS Infotech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

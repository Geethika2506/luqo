
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient text-white py-12 px-6 mt-16 bg-[#ec360d]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-white/80 text-sm mt-4 max-w-xs font-montserrat">
              Discover accessible shopping experiences for everyone.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4 font-montserrat">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  About
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Stores
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4 font-montserrat">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/register-store" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors font-montserrat">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4 font-montserrat">Subscribe</h4>
            <p className="text-white/80 text-sm mb-3 font-montserrat">
              Get updates on new accessible stores
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                aria-label="Your email address" 
                className="px-3 py-2 w-full rounded-l-md text-textPrimary text-sm focus:outline-none font-montserrat" 
              />
              <button 
                className="bg-white text-brand px-4 py-2 rounded-r-md font-medium text-sm hover:bg-white/90 transition-colors font-montserrat" 
                aria-label="Subscribe to newsletter"
                onClick={() => alert("Thank you for subscribing!")}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-montserrat">
            © {new Date().getFullYear()} LUQO. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => (
              <a 
                key={social} 
                href={`https://${social.toLowerCase()}.com`} 
                className="text-white/60 hover:text-white text-sm transition-colors font-montserrat" 
                aria-label={`Visit our ${social} page`}
                target="_blank"
                rel="noreferrer"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

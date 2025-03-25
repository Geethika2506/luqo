
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-navyBlue py-3 px-6 flex justify-between items-center">
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      
      <div className="flex items-center">
        <a href="/" aria-label="LUQO Home" className="mr-6">
          <img 
            src="/lovable-uploads/b06c87f1-5669-43fa-bea4-59295acfdc94.png" 
            alt="" 
            className="w-8 h-8 object-contain" 
            aria-hidden="true"
          />
        </a>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <a 
          href="/about" 
          className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat"
          aria-label="About us"
        >
          About
        </a>
        <a 
          href="/contact" 
          className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat"
          aria-label="Contact us"
        >
          Contact
        </a>
        <a 
          href="/signup" 
          className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat"
          aria-label="Sign up"
        >
          Sign Up
        </a>
      </nav>
      
      <div className="flex items-center space-x-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-navyBlue focus:bg-white focus:text-navyBlue transition-all font-montserrat"
          aria-label="Sign in to your account"
        >
          Sign In
        </Button>
        <Button 
          size="sm" 
          className="bg-white text-navyBlue hover:bg-opacity-90 focus:bg-opacity-90 transition-all font-montserrat"
          aria-label="Search stores"
        >
          Search
        </Button>
      </div>
    </header>
  );
};

export default Header;

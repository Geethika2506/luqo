
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-navyBlue py-3 px-6 flex justify-between items-center">
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
      
      <div className="flex items-center space-x-4">
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

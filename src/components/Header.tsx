
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search');
    console.log('Search button clicked');
  };

  const handleSignIn = () => {
    navigate('/sign-in');
    console.log('Sign In button clicked');
  };

  return (
    <header className="w-full bg-[#FF5722] py-3 px-6 flex justify-between items-center">
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
          onClick={handleSignIn}
          className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF5722] focus:bg-white focus:text-[#FF5722] transition-all font-montserrat"
          aria-label="Sign in to your account"
        >
          Sign In
        </Button>
        <Button 
          size="sm" 
          onClick={handleSearch}
          className="bg-white text-[#FF5722] hover:bg-opacity-90 focus:bg-opacity-90 transition-all font-montserrat"
          aria-label="Search stores"
        >
          Search
        </Button>
      </div>
    </header>
  );
};

export default Header;

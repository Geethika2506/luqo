
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JoinSection: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterStore = () => {
    navigate('/register-store');
  };

  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-4 md:mb-6 font-montserrat">
          Join Luqo
        </h2>
        <p className="text-base text-textSecondary mb-6 md:mb-8 max-w-2xl mx-auto font-montserrat">
          Be part of our growing community of stores and shoppers dedicated to creating accessible shopping experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand/90 transition-colors font-montserrat" 
            onClick={handleRegisterStore}
          >
            Register Your Store
          </button>
          <button 
            className="bg-transparent border-2 border-brand text-brand px-8 py-3 rounded-full font-medium hover:bg-brand/10 transition-colors font-montserrat" 
            onClick={() => navigate('/sign-in')}
          >
            Sign Up as Shopper
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;

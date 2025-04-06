
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const ForBusinesses: React.FC = () => {
  const navigate = useNavigate();
  
  const handleRegisterStore = () => {
    navigate('/register-store');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-navyBlue to-navyBlue/80 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Grow Your Business with Luqo
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Connect with local shoppers, showcase your unique experiences, and build a loyal customer base.
            </p>
            <button 
              onClick={handleRegisterStore}
              className="bg-brand hover:bg-brand/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Register Your Business
            </button>
          </div>
        </section>
        
        {/* Benefits section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 font-montserrat">
              Why Join Luqo?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-textPrimary">Increased Visibility</h3>
                <p className="text-textSecondary">
                  Get discovered by local shoppers looking for unique experiences and offerings in your area.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-textPrimary">Community Connection</h3>
                <p className="text-textSecondary">
                  Build relationships with customers who share your values and appreciate your craft.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-textPrimary">Simple Tools</h3>
                <p className="text-textSecondary">
                  Easy-to-use platform for creating workshops, events, and special offers to attract new customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 font-montserrat">
              Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-textSecondary mb-4">
                  "Joining Luqo transformed our small jewelry workshop. We've seen a 40% increase in workshop attendance and developed lasting relationships with customers who value our craft."
                </p>
                <p className="font-medium text-textPrimary">— Emma, Pagde Swimwear</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-textSecondary mb-4">
                  "The platform made it so easy to showcase our unique approach to fashion. We've connected with customers who truly appreciate sustainable clothing and our workshops are consistently booked."
                </p>
                <p className="font-medium text-textPrimary">— Marcus, Adaptive Clothing</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-brand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-montserrat">
              Ready to Join?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Start growing your business and connecting with local customers today. Registration is quick and simple.
            </p>
            <button 
              onClick={handleRegisterStore}
              className="bg-white hover:bg-white/90 text-brand px-8 py-3 rounded-full font-medium transition-colors"
            >
              Register Your Business
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForBusinesses;

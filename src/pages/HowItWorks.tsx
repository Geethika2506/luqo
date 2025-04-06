
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-textPrimary font-montserrat">
            How Luqo Works
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-textPrimary">For Shoppers</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2 text-brand">1. Discover</h3>
                  <p className="text-textSecondary">
                    Browse nearby experiences and small businesses offering unique activities, workshops, and special offers in your city.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2 text-brand">2. Connect</h3>
                  <p className="text-textSecondary">
                    Sign up for free to save your favorite stores, get notifications about new offers, and connect directly with business owners.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2 text-brand">3. Experience</h3>
                  <p className="text-textSecondary">
                    Enjoy personalized local experiences, from creative workshops to exclusive events and special offers designed for your interests.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-textPrimary">For Businesses</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2 text-brand">1. Register</h3>
                  <p className="text-textSecondary">
                    Create your business profile and showcase what makes your store or service unique to the local community.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2 text-brand">2. Create</h3>
                  <p className="text-textSecondary">
                    Design engaging workshops, events, or special offers that highlight your expertise and attract new customers.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2 text-brand">3. Grow</h3>
                  <p className="text-textSecondary">
                    Build a loyal customer base, get feedback and insights, and connect with people who appreciate your craft.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;

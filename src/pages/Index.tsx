import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryButton from '@/components/CategoryButton';
import StoreCard from '@/components/StoreCard';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

// Sample store data
const storeExperiences = [
  {
    id: 1,
    title: "Pao Jewellery",
    description: "Experience handcrafted jewelry with audio descriptions and touchable display samples. Friendly staff trained in sign language.",
    category: "Jewelry",
    imageUrl: "https://via.placeholder.com/400x200/EEEEEE/999999"
  },
  {
    id: 2,
    title: "Sensory Bookshop",
    description: "Browse our extensive collection of books with braille options, audiobooks, and a calm sensory-friendly environment.",
    category: "Books",
    imageUrl: "https://via.placeholder.com/400x200/EEEEEE/999999"
  },
  {
    id: 3,
    title: "Adaptive Clothing",
    description: "Fashion for everyone with magnetic closures, sensory-friendly fabrics, and wheelchair-friendly designs.",
    category: "Fashion",
    imageUrl: "https://via.placeholder.com/400x200/EEEEEE/999999"
  },
  {
    id: 4,
    title: "Tech For All",
    description: "Accessible technology with trained staff to demonstrate adaptive features and assistive devices for various needs.",
    category: "Technology",
    imageUrl: "https://via.placeholder.com/400x200/EEEEEE/999999"
  }
];

// Available categories
const categories = ["All", "Jewelry", "Fashion", "Books", "Technology"];

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredStores, setFilteredStores] = useState(storeExperiences);
  const [loaded, setLoaded] = useState(false);

  // Filter stores based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredStores(storeExperiences);
    } else {
      setFilteredStores(storeExperiences.filter(store => store.category === activeCategory));
    }
  }, [activeCategory]);

  // Animation on load
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20 px-6">
        <div 
          className={`container mx-auto text-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          id="main-content" 
          tabIndex={-1}
        >
          <Logo size="lg" className="mx-auto mb-10" />
          <h2 className="text-white text-2xl md:text-3xl font-light max-w-2xl mx-auto mb-6 tracking-wide">
            Discover Accessible Shopping Experiences
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10">
            Explore stores designed with accessibility in mind, providing inclusive experiences for everyone.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 stagger-animate">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content - Store Cards */}
      <section className="container mx-auto px-6 py-12 -mt-6 relative z-10">
        <h2 className="sr-only">Store Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-animate">
          {filteredStores.map((store, index) => (
            <StoreCard
              key={store.id}
              title={store.title}
              description={store.description}
              category={store.category}
              imageUrl={store.imageUrl}
              className="animate-slide-in"
            />
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-textPrimary mb-3">No stores found</h3>
            <p className="text-textSecondary">
              No stores found in this category. Please try another category.
            </p>
          </div>
        )}
      </section>
      
      {/* Accessibility Commitment Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-6 text-center">
            Our Accessibility Commitment
          </h2>
          <p className="text-textSecondary text-center mb-10">
            We believe shopping should be accessible to everyone. Our platform highlights stores that prioritize 
            inclusive design and accessibility features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Access",
                description: "Stores with step-free entry, wide aisles, and accessible changing rooms and restrooms."
              },
              {
                title: "Sensory Considerations",
                description: "Quiet hours, reduced lighting options, and staff trained to assist those with sensory sensitivities."
              },
              {
                title: "Communication Support",
                description: "Alternative formats, sign language support, and clear signage with visual aids."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-textPrimary mb-3">{feature.title}</h3>
                <p className="text-textSecondary text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-brand text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Join Our Accessible Storefront Network
          </h2>
          <p className="mb-8 text-white/90">
            Are you a store owner committed to accessibility? Partner with us to showcase your inclusive shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-brand px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
              aria-label="Register your store"
            >
              Register Your Store
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              aria-label="Learn more about our accessibility standards"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

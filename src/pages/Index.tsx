import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryButton from '@/components/CategoryButton';
import StoreCard from '@/components/StoreCard';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

// Enhanced store data with real images, offers, giveaways, and experiences
const storeExperiences = [{
  id: "1",
  title: "Pao Jewellery",
  description: "Experience handcrafted jewelry with audio descriptions and touchable display samples. Friendly staff trained in sign language.",
  category: "Jewelry",
  imageUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "20% off on all handcrafted necklaces when you mention LUQO at checkout",
  giveaway: "Free sterling silver earrings with purchases over $100 this month",
  experience: "At Pao Jewellery, we've created an inclusive shopping environment where everyone can appreciate the beauty of our handcrafted pieces. Our showroom features enhanced lighting and magnifying glasses to help you see intricate details. Each display includes Braille descriptions and our staff members are trained in basic sign language. We offer a unique 'touch collection' where you can feel the textures and weights of different designs. Audio descriptions are available for each jewelry piece, and our counters are at varied heights to accommodate wheelchair users. We regularly host sensory-friendly shopping hours with reduced lighting and sound."
}, {
  id: "2",
  title: "Sensory Bookshop",
  description: "Browse our extensive collection of books with braille options, audiobooks, and a calm sensory-friendly environment.",
  category: "Books",
  imageUrl: "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  offer: "Buy one audiobook, get one 50% off through the end of the month",
  giveaway: "Free tote bag with purchases over $50",
  experience: "The Sensory Bookshop is designed to be a sanctuary for all book lovers. Our store layout features wide aisles for easy navigation, and we have a selection of adjustable reading chairs to accommodate various needs. We're proud to offer an extensive collection of books in multiple formats: traditional print, large print, braille, and digital/audio options. Our 'Quiet Corner' is a dedicated low-sensory zone with noise-cancelling features and adjustable lighting. Staff members are trained in accessibility support and can assist with finding the perfect book in your preferred format. We host regular inclusive reading groups and author events with sign language interpreters. Visitors particularly enjoy our scented bookmarks that correspond to different genres!"
}, {
  id: "3",
  title: "Adaptive Clothing",
  description: "Fashion for everyone with magnetic closures, sensory-friendly fabrics, and wheelchair-friendly designs.",
  category: "Fashion",
  imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "15% discount on your first purchase when you sign up for our newsletter",
  experience: "Adaptive Clothing revolutionizes the shopping experience with fashion that truly works for everybody. Our store features extra-wide fitting rooms with grab bars, accessible mirrors, and adjustable lighting. All our clothing items incorporate innovative design elements like magnetic closures, elasticized waistbands, and sensory-friendly fabrics without tags. Our 'seated fashion' line is specifically designed for wheelchair users with longer backs on tops and special cut pants. We offer personal shopping assistants who understand various accessibility needs and can help find the perfect outfit. The store uses clear, simple signage with pictograms, and our staff are trained to provide descriptive information about colors, textures, and styles. We regularly host inclusive fashion shows featuring models with diverse abilities."
}, {
  id: "4",
  title: "Tech For All",
  description: "Accessible technology with trained staff to demonstrate adaptive features and assistive devices for various needs.",
  category: "Technology",
  imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  giveaway: "Free accessibility starter pack with purchases over $200",
  experience: "Tech For All creates an environment where everyone can explore and learn about adaptive technology. Our store features demonstration stations where you can try various assistive technologies, from screen readers to adaptive gaming controllers. All display products are fully charged and ready to test, with clear, jargon-free instructions in multiple formats. Our staff are certified in accessibility training and can customize technology solutions for individual needs. We offer regular workshops on topics like 'Introduction to Voice Commands' and 'Making Your Smart Home Accessible.' The store layout includes tactile flooring to guide visitors with visual impairments, and all product information is available in multiple formats including braille, large print, and audio. We're particularly proud of our 'Tech Buddies' program, which pairs customers with knowledgeable staff for personalized shopping assistance."
}];

// Available categories
const categories = ["All", "Jewelry", "Fashion", "Books", "Technology"];
const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredStores, setFilteredStores] = useState(storeExperiences);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

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
  
  const handleRegisterStore = () => {
    navigate('/register-store');
  };
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 px-6" 
        style={{
          backgroundImage: "url('/lovable-uploads/3f284a0b-f894-4a63-bdec-0065602fe3f6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className={`container mx-auto text-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} id="main-content" tabIndex={-1}>
          <Logo size="lg" className="mx-auto mb-10" />
          <h2 className="text-white text-2xl md:text-3xl font-light max-w-2xl mx-auto mb-6 tracking-wide font-montserrat">
            Discover Accessible Shopping Experiences
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 font-montserrat">
            Explore stores designed with accessibility in mind, providing inclusive experiences for everyone.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 stagger-animate">
            {categories.map(category => <CategoryButton key={category} label={category} isActive={activeCategory === category} onClick={() => setActiveCategory(category)} className="animate-scale-in" />)}
          </div>
        </div>
      </section>
      
      {/* Main Content - Store Cards */}
      <section className="container mx-auto px-6 py-12 -mt-6 relative z-10">
        <h2 className="sr-only">Store Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-animate">
          {filteredStores.map(store => <StoreCard key={store.id} id={store.id} title={store.title} description={store.description} category={store.category} imageUrl={store.imageUrl} offer={store.offer} giveaway={store.giveaway} experience={store.experience} className="animate-slide-in" />)}
        </div>
        
        {filteredStores.length === 0 && <div className="text-center py-16">
            <h3 className="text-xl font-medium text-textPrimary mb-3">No stores found</h3>
            <p className="text-textSecondary">
              No stores found in this category. Please try another category.
            </p>
          </div>}
      </section>
      
      {/* Accessibility Commitment Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-6 text-center font-montserrat">
            Our Accessibility Commitment
          </h2>
          <p className="text-textSecondary text-center mb-10 font-montserrat">
            We believe shopping should be accessible to everyone. Our platform highlights stores that prioritize 
            inclusive design and accessibility features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: "Physical Access",
            description: "Stores with step-free entry, wide aisles, and accessible changing rooms and restrooms."
          }, {
            title: "Sensory Considerations",
            description: "Quiet hours, reduced lighting options, and staff trained to assist those with sensory sensitivities."
          }, {
            title: "Communication Support",
            description: "Alternative formats, sign language support, and clear signage with visual aids."
          }].map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-textPrimary mb-3 font-montserrat">{feature.title}</h3>
                <p className="text-textSecondary text-sm font-montserrat">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-brand text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-montserrat">
            Join Our Accessible Storefront Network
          </h2>
          <p className="mb-8 text-white/90 font-montserrat">
            Are you a store owner committed to accessibility? Partner with us to showcase your inclusive shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-brand px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors font-montserrat" aria-label="Register your store" onClick={handleRegisterStore}>
              Register Your Store
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors font-montserrat" aria-label="Learn more about our accessibility standards" onClick={() => navigate('/about')}>
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;

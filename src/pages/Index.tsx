import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryButton from '@/components/CategoryButton';
import StoreCard from '@/components/StoreCard';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

// Enhanced experience data with real images, offers, giveaways, and locations
const storeExperiences = [{
  id: "1",
  title: "Handcrafted Jewelry Workshop",
  storeName: "Pao Jewellery",
  description: "Learn to create your own unique piece of jewelry with expert guidance. Materials and tools provided.",
  category: "Workshops",
  imageUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "20% off for first-time attendees",
  giveaway: "Take home your handmade creation",
  experience: "At Pao Jewellery, we've created an inclusive shopping environment where everyone can appreciate the beauty of our handcrafted pieces. Our showroom features enhanced lighting and magnifying glasses to help you see intricate details. Each display includes Braille descriptions and our staff members are trained in basic sign language. We offer a unique 'touch collection' where you can feel the textures and weights of different designs. Audio descriptions are available for each jewelry piece, and our counters are at varied heights to accommodate wheelchair users. We regularly host sensory-friendly shopping hours with reduced lighting and sound."
}, {
  id: "2",
  title: "Author Book Launch & Signing",
  storeName: "Sensory Bookshop",
  description: "Meet your favorite author, get your book signed and participate in an interactive Q&A session.",
  category: "Art & Culture",
  imageUrl: "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  offer: "Buy the book at the event and get 15% off",
  giveaway: "Free bookmark with every purchase",
  experience: "The Sensory Bookshop is designed to be a sanctuary for all book lovers. Our store layout features wide aisles for easy navigation, and we have a selection of adjustable reading chairs to accommodate various needs. We're proud to offer an extensive collection of books in multiple formats: traditional print, large print, braille, and digital/audio options. Our 'Quiet Corner' is a dedicated low-sensory zone with noise-cancelling features and adjustable lighting. Staff members are trained in accessibility support and can assist with finding the perfect book in your preferred format. We host regular inclusive reading groups and author events with sign language interpreters. Visitors particularly enjoy our scented bookmarks that correspond to different genres!"
}, {
  id: "3",
  title: "Sustainable Fashion Workshop",
  storeName: "Adaptive Clothing",
  description: "Learn about sustainable fashion practices and how to upcycle your existing wardrobe items.",
  category: "Workshops",
  imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "15% discount on workshop materials",
  experience: "Adaptive Clothing revolutionizes the shopping experience with fashion that truly works for everybody. Our store features extra-wide fitting rooms with grab bars, accessible mirrors, and adjustable lighting. All our clothing items incorporate innovative design elements like magnetic closures, elasticized waistbands, and sensory-friendly fabrics without tags. Our 'seated fashion' line is specifically designed for wheelchair users with longer backs on tops and special cut pants. We offer personal shopping assistants who understand various accessibility needs and can help find the perfect outfit. The store uses clear, simple signage with pictograms, and our staff are trained to provide descriptive information about colors, textures, and styles. We regularly host inclusive fashion shows featuring models with diverse abilities."
}, {
  id: "4",
  title: "Outdoor Photography Expedition",
  storeName: "Tech For All",
  description: "Join our guided photography walk through scenic locations. All skill levels welcome.",
  category: "Outdoors",
  imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  giveaway: "Free photography guide e-book",
  experience: "Tech For All creates an environment where everyone can explore and learn about adaptive technology. Our store features demonstration stations where you can try various assistive technologies, from screen readers to adaptive gaming controllers. All display products are fully charged and ready to test, with clear, jargon-free instructions in multiple formats. Our staff are certified in accessibility training and can customize technology solutions for individual needs. We offer regular workshops on topics like 'Introduction to Voice Commands' and 'Making Your Smart Home Accessible.' The store layout includes tactile flooring to guide visitors with visual impairments, and all product information is available in multiple formats including braille, large print, and audio. We're particularly proud of our 'Tech Buddies' program, which pairs customers with knowledgeable staff for personalized shopping assistance."
}, {
  id: "5",
  title: "Local Food Tasting Tour",
  storeName: "Flavor Fusion",
  description: "Sample authentic local dishes from multiple vendors in one delicious guided tour.",
  category: "Food",
  imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "10% off your next visit to any participating restaurant",
  giveaway: "Recipe booklet of featured dishes",
  experience: "Our food tours are designed to be inclusive and accommodating to various dietary needs and preferences. We offer clear allergen information for all food samples and can provide alternative options for those with specific dietary restrictions."
}];

// Available categories
const categories = ["All", "Workshops", "Art & Culture", "Food", "Outdoors"];
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
      <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-[#FF5722] to-[#FF7043]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/21cbe818-5a66-401e-ae8d-a13b7f473e67.png" alt="Hero background" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
        </div>
        <div className={`container mx-auto text-center relative z-10 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} id="main-content" tabIndex={-1}>
          <Logo size="lg" className="mx-auto mb-10" />
          <h2 className="text-white text-2xl md:text-3xl font-light max-w-2xl mx-auto mb-12 tracking-wide font-montserrat">
            Local. Smart. Connected.
          </h2>
          
          {/* Category Filters - Updated with more spacing and square-rounded appearance */}
          <div className="flex flex-wrap justify-center gap-6 stagger-animate mt-8">
            {categories.map(category => <CategoryButton key={category} label={category} isActive={activeCategory === category} onClick={() => setActiveCategory(category)} className="animate-scale-in" />)}
          </div>
        </div>
      </section>
      
      {/* Main Content - Store Cards */}
      <section className="container mx-auto px-6 py-12 -mt-8 relative z-10">
        <h2 className="sr-only">Experiences Near You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-animate">
          {filteredStores.map(store => <StoreCard key={store.id} id={store.id} title={store.title} storeName={store.storeName} description={store.description} category={store.category} imageUrl={store.imageUrl} offer={store.offer} giveaway={store.giveaway} experience={store.experience} className="animate-slide-in" />)}
        </div>
        
        {filteredStores.length === 0 && <div className="text-center py-16">
            <h3 className="text-xl font-medium text-textPrimary mb-3">No experiences found</h3>
            <p className="text-textSecondary">
              No experiences found in this category. Please try another category.
            </p>
          </div>}
      </section>
      
      {/* Join Luqo Section - Replacing Accessibility Commitment Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-6 font-montserrat">
            Join Luqo
          </h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto font-montserrat">
            Be part of our growing community of stores and shoppers dedicated to creating accessible shopping experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand text-white px-8 py-3 rounded-md font-medium hover:bg-brand/90 transition-colors font-montserrat" onClick={handleRegisterStore}>
              Register Your Store
            </button>
            <button className="bg-transparent border-2 border-brand text-brand px-8 py-3 rounded-md font-medium hover:bg-brand/10 transition-colors font-montserrat" onClick={() => navigate('/sign-in')}>
              Sign Up as Shopper
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      
      
      <Footer />
    </div>;
};
export default Index;
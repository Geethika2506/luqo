import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryButton from '@/components/CategoryButton';
import StoreCard from '@/components/StoreCard';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import CitySelector from '@/components/CitySelector';
import CategoryCard from '@/components/CategoryCard';

// Enhanced experience data with real images, offers, giveaways, and locations
const storeExperiences = [{
  id: "1",
  title: "Customizable swimwear charms workshop",
  storeName: "Pagde Swimwear",
  description: "Create unique charms to add a personalized touch to your swimwear.",
  category: "Workshops",
  imageUrl: "/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png",
  offer: "20% off for first-time attendees",
  giveaway: "Take home your handmade creation",
  experience: "At Pagde Swimwear, we've created an inclusive shopping environment where everyone can appreciate the beauty of our handcrafted swimwear pieces. Our showroom features enhanced lighting and magnifying glasses to help you see intricate details. Each display includes Braille descriptions and our staff members are trained in basic sign language. We offer a unique 'touch collection' where you can feel the textures and weights of different designs. Audio descriptions are available for each swimwear piece, and our counters are at varied heights to accommodate wheelchair users. We regularly host sensory-friendly shopping hours with reduced lighting and sound."
}, {
  id: "2",
  title: "Author Book Launch & Signing",
  storeName: "Sensory Bookshop",
  description: "Meet your favorite author, get your book signed and participate in an interactive Q&A session.",
  category: "Art & Culture",
  imageUrl: "/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png",
  offer: "Buy the book at the event and get 15% off",
  giveaway: "Free bookmark with every purchase",
  experience: "The Sensory Bookshop is designed to be a sanctuary for all book lovers. Our store layout features wide aisles for easy navigation, and we have a selection of adjustable reading chairs to accommodate various needs. We're proud to offer an extensive collection of books in multiple formats: traditional print, large print, braille, and digital/audio options. Our 'Quiet Corner' is a dedicated low-sensory zone with noise-cancelling features and adjustable lighting. Staff members are trained in accessibility support and can assist with finding the perfect book in your preferred format. We host regular inclusive reading groups and author events with sign language interpreters. Visitors particularly enjoy our scented bookmarks that correspond to different genres!"
}, {
  id: "3",
  title: "Sustainable Fashion Workshop",
  storeName: "Adaptive Clothing",
  description: "Learn about sustainable fashion practices and how to upcycle your existing wardrobe items.",
  category: "Workshops",
  imageUrl: "/lovable-uploads/72f411e9-fdd4-4d19-8c4e-6ef7a54aa8e4.png",
  offer: "15% discount on workshop materials",
  experience: "Adaptive Clothing revolutionizes the shopping experience with fashion that truly works for everybody. Our store features extra-wide fitting rooms with grab bars, accessible mirrors, and adjustable lighting. All our clothing items incorporate innovative design elements like magnetic closures, elasticized waistbands, and sensory-friendly fabrics without tags. Our 'seated fashion' line is specifically designed for wheelchair users with longer backs on tops and special cut pants. We offer personal shopping assistants who understand various accessibility needs and can help find the perfect outfit. The store uses clear, simple signage with pictograms, and our staff are trained to provide descriptive information about colors, textures, and styles. We regularly host inclusive fashion shows featuring models with diverse abilities."
}, {
  id: "4",
  title: "Outdoor Photography Expedition",
  storeName: "Tech For All",
  description: "Join our guided photography walk through scenic locations. All skill levels welcome.",
  category: "Outdoors",
  imageUrl: "/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png",
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
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    console.log('Selected city:', city);
    // In a real app, you would filter content based on the selected city
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* New Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 lg:px-8 bg-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('/lovable-uploads/cd01bef3-c92f-4a70-bcc8-41417eea83c4.png')] bg-center bg-cover">
          <div className="w-full h-full bg-gradient-to-b from-black/95 via-black/90 to-black/85"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-montserrat">
            Discover Local Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10 font-light">
            Connect with nearby small businesses offering unique activities and special offers.
          </p>
          
          {/* City Selector */}
          <CitySelector 
            onChange={handleCityChange} 
            className="mb-12 md:mb-16"
          />
          
          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
            <CategoryCard 
              title="Workshops" 
              imageUrl="/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png"
              href="/search?category=Workshops"
              bgColor="bg-[#1e3a8a]"
            />
            
            <CategoryCard 
              title="Events" 
              imageUrl="/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png"
              href="/search?category=Events"
              bgColor="bg-[#3c1f7b]"
            />
            
            <CategoryCard 
              title="Offers" 
              imageUrl="/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png"
              href="/search?category=Offers"
              bgColor="bg-[#c2410c]"
            />
          </div>
        </div>
      </section>
      
      {/* Main Content - Store Cards */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-6 md:mb-8 font-montserrat">Experiences Near You</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
          {categories.map(category => (
            <CategoryButton 
              key={category} 
              label={category} 
              isActive={activeCategory === category} 
              onClick={() => setActiveCategory(category)} 
              className="animate-scale-in" 
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredStores.map(store => (
            <StoreCard 
              key={store.id} 
              id={store.id} 
              title={store.title} 
              storeName={store.storeName} 
              description={store.description} 
              category={store.category} 
              imageUrl={store.imageUrl} 
              offer={store.offer} 
              giveaway={store.giveaway} 
              experience={store.experience} 
              className="animate-slide-in" 
            />
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-textPrimary mb-3">No experiences found</h3>
            <p className="text-textSecondary">
              No experiences found in this category. Please try another category.
            </p>
          </div>
        )}
      </section>
      
      {/* Join Luqo Section */}
      <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-4 md:mb-6 font-montserrat">
            Join Luqo
          </h2>
          <p className="text-base text-textSecondary mb-6 md:mb-8 max-w-2xl mx-auto font-montserrat">
            Be part of our growing community of stores and shoppers dedicated to creating accessible shopping experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand/90 transition-colors font-montserrat" onClick={handleRegisterStore}>
              Register Your Store
            </button>
            <button className="bg-transparent border-2 border-brand text-brand px-8 py-3 rounded-full font-medium hover:bg-brand/10 transition-colors font-montserrat" onClick={() => navigate('/sign-in')}>
              Sign Up as Shopper
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

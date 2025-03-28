
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryButton from '@/components/CategoryButton';
import StoreCard from '@/components/StoreCard';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Enhanced experience data to match the images
const storeExperiences = [{
  id: "1",
  title: "Sustainable Fashion Workshop",
  storeName: "Adaptive Clothing",
  description: "Learn about sustainable fashion practices and how to upcycle your existing wardrobe items.",
  category: "Workshops",
  imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "15% discount on workshop materials",
  duration: "4 hours",
  price: "$45"
}, {
  id: "2",
  title: "Outdoor Photography Expedition",
  storeName: "Tech For All",
  description: "Join our guided photography walk through scenic locations. All skill levels welcome.",
  category: "Outdoors",
  imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  giveaway: "Free photography guide e-book",
  duration: "3 hours",
  price: "$60"
}, {
  id: "3",
  title: "Local Food Tasting Tour",
  storeName: "Flavor Fusion",
  description: "Sample authentic local dishes from multiple vendors in one delicious guided tour.",
  category: "Food",
  imageUrl: "public/lovable-uploads/70be6256-2539-4e3d-b6c8-13372d14d700.png",
  offer: "10% off your next visit to any participating restaurant",
  giveaway: "Recipe booklet of featured dishes",
  duration: "4 hours",
  price: "$75"
}, {
  id: "4",
  title: "Pottery Making Class",
  storeName: "Creative Clay Studio",
  description: "Get your hands dirty and learn the basics of pottery making in this beginner-friendly workshop.",
  category: "Workshops",
  imageUrl: "public/lovable-uploads/10ff1caf-9551-4834-a6dc-8fa596dfbdf6.png",
  giveaway: "Take home your handmade creation",
  duration: "2.5 hours",
  price: "$65"
}, {
  id: "5",
  title: "Handcrafted Jewelry Workshop",
  storeName: "Pao Jewellery",
  description: "Learn to create your own unique piece of jewelry with expert guidance. Materials and tools provided.",
  category: "Workshops",
  imageUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "20% off for first-time attendees",
  giveaway: "Take home your handmade creation",
  duration: "3 hours",
  price: "$85"
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Category Filter Bar - Simplified design */}
      <div className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <CategoryButton 
                key={category} 
                label={category} 
                isActive={activeCategory === category} 
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content - Store Cards */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              price={store.price} 
              duration={store.duration} 
            />
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-textPrimary mb-3">No experiences found</h3>
            <p className="text-textSecondary">
              No experiences found in this category. Please try another category.
            </p>
          </div>
        )}
      </section>
      
      {/* Join Luqo Section with brand orange background */}
      <section className="bg-brand py-16 px-6 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Join Our Accessible Storefront Network
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Are you a store owner committed to accessibility? Partner with us to showcase your inclusive shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-brand hover:bg-white/90 px-8 py-6 text-base"
              onClick={handleRegisterStore}
            >
              Register Your Store
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

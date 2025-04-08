
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '@/components/CategoryCard';
import StoreCard from '@/components/StoreCard';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample data to show experiences
const storeExperiences = [{
  id: "1",
  title: "Customizable swimwear charms workshop",
  storeName: "Pagde Swimwear",
  description: "Create unique charms to add a personalized touch to your swimwear.",
  category: "Workshops",
  imageUrl: "/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png",
  offer: "20% off for first-time attendees",
  giveaway: "Take home your handmade creation"
}, {
  id: "2",
  title: "Author Book Launch & Signing",
  storeName: "Sensory Bookshop",
  description: "Meet your favorite author, get your book signed and participate in an interactive Q&A session.",
  category: "Events",
  imageUrl: "/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png",
  offer: "Buy the book at the event and get 15% off",
  giveaway: "Free bookmark with every purchase"
}, {
  id: "3",
  title: "Sustainable Fashion Workshop",
  storeName: "Adaptive Clothing",
  description: "Learn about sustainable fashion practices and how to upcycle your existing wardrobe items.",
  category: "Workshops",
  imageUrl: "/lovable-uploads/72f411e9-fdd4-4d19-8c4e-6ef7a54aa8e4.png",
  offer: "15% discount on workshop materials"
}, {
  id: "4",
  title: "Outdoor Photography Expedition",
  storeName: "Tech For All",
  description: "Join our guided photography walk through scenic locations. All skill levels welcome.",
  category: "Outdoors",
  imageUrl: "/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png",
  giveaway: "Free photography guide e-book"
}, {
  id: "5",
  title: "Local Food Tasting Tour",
  storeName: "Flavor Fusion",
  description: "Sample authentic local dishes from multiple vendors in one delicious guided tour.",
  category: "Food",
  imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  offer: "10% off your next visit to any participating restaurant",
  giveaway: "Recipe booklet of featured dishes"
}];

const categories = ["Workshops", "Events", "Offers"];

const categoryMapping = {
  "Workshops": ["Workshops"],
  "Events": ["Art & Culture", "Outdoors"],
  "Offers": ["Food"]
};

const ForBusinesses: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<string>("Workshops");
  const [filteredStores, setFilteredStores] = useState(storeExperiences);

  const handleRegisterStore = () => {
    navigate('/register-store');
  };

  // Filter stores based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredStores(storeExperiences);
    } else {
      const categoriesForFilter = categoryMapping[activeCategory as keyof typeof categoryMapping] || [activeCategory];
      setFilteredStores(storeExperiences.filter(store => 
        categoriesForFilter.includes(store.category)
      ));
    }
  }, [activeCategory]);

  // Images for category cards
  const workshopImage = "/lovable-uploads/17fb8e44-896a-4404-b22d-7bc10a56ea99.png";
  const eventsImage = "/lovable-uploads/65f25eba-83e4-4ef6-8395-c452854b8fa4.png";
  const offersImage = "/lovable-uploads/f0e62bad-8058-441f-8ae9-93f3e1328699.png";

  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-navyBlue to-navyBlue/80 z-0 bg-neutral-950"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Grow Your Business with Luqo
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Connect with local shoppers, showcase your unique experiences, and build a loyal customer base.
            </p>
            <button onClick={handleRegisterStore} className="bg-brand hover:bg-brand/90 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Register Your Business
            </button>
          </div>
        </section>
        
        {/* Filter Category Cards section */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 font-montserrat">
              Explore Our Offerings
            </h2>
            
            <div className={cn("grid gap-4 md:gap-6 w-full max-w-5xl mx-auto", 
              isMobile ? "grid-cols-1" : "grid-cols-3")}>
              {categories.map(category => (
                <div 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "cursor-pointer transition-all transform hover:-translate-y-1",
                    activeCategory === category ? "ring-4 ring-brand ring-opacity-70" : ""
                  )}
                >
                  <CategoryCard 
                    title={category} 
                    imageUrl={
                      category === "Workshops" ? workshopImage : 
                      category === "Events" ? eventsImage : offersImage
                    }
                    href="#"
                    bgColor={
                      category === "Workshops" ? "bg-[#1e3a8a]" : 
                      category === "Events" ? "bg-[#3c1f7b]" : "bg-[#c2410c]"
                    }
                    className={cn(
                      activeCategory === category ? "shadow-lg" : "shadow-md"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experiences section */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-6 md:mb-8 font-montserrat">
            {activeCategory} Near You
          </h2>
          
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
                className="animate-slide-in" 
              />
            ))}
          </div>
          
          {filteredStores.length === 0 && 
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-textPrimary mb-3">No experiences found</h3>
              <p className="text-textSecondary">
                No experiences found in this category. Please try another category.
              </p>
            </div>
          }
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
            <button onClick={handleRegisterStore} className="bg-white hover:bg-white/90 text-brand px-8 py-3 rounded-full font-medium transition-colors">
              Register Your Business
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ForBusinesses;

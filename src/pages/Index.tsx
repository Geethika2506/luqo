
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import CitySelector from '@/components/CitySelector';
import CategoryCard from '@/components/CategoryCard';
import CategoryButton from '@/components/CategoryButton';
import StoreCard from '@/components/StoreCard';
import { Utensils, Palmtree, Palette } from 'lucide-react';
import { storeExperiences } from '@/data/storeExperiences';

const Index: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredExperiences, setFilteredExperiences] = useState(storeExperiences);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredExperiences(storeExperiences);
    } else {
      const filtered = storeExperiences.filter(exp => exp.category === category);
      setFilteredExperiences(filtered);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
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
              subcategories={[
                {
                  label: "Food",
                  href: "/search?category=Events&subcategory=Food",
                  icon: <Utensils className="h-3 w-3" />
                },
                {
                  label: "Outdoors",
                  href: "/search?category=Events&subcategory=Outdoors",
                  icon: <Palmtree className="h-3 w-3" />
                },
                {
                  label: "Art & Culture",
                  href: "/search?category=Events&subcategory=ArtCulture",
                  icon: <Palette className="h-3 w-3" />
                }
              ]}
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

      {/* Experience Categories Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-8 text-center">
            Explore Experiences
          </h2>
          
          {/* Category Tabs */}
          <div className="flex justify-center gap-2 md:gap-4 mb-10 overflow-x-auto pb-2">
            <CategoryButton 
              label="All" 
              isActive={activeCategory === 'All'} 
              onClick={() => handleCategoryClick('All')}
            />
            <CategoryButton 
              label="Workshops" 
              isActive={activeCategory === 'Workshops'} 
              onClick={() => handleCategoryClick('Workshops')}
            />
            <CategoryButton 
              label="Events" 
              isActive={activeCategory === 'Events'} 
              onClick={() => handleCategoryClick('Events')}
            />
            <CategoryButton 
              label="Offers" 
              isActive={activeCategory === 'Offers'} 
              onClick={() => handleCategoryClick('Offers')}
            />
          </div>
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredExperiences.map((experience, index) => (
              <StoreCard
                key={experience.id}
                id={experience.id}
                title={experience.title}
                description={experience.description}
                storeName={experience.storeName}
                category={experience.category}
                imageUrl={experience.imageUrl}
                offer={experience.offer}
                giveaway={experience.giveaway}
                className={`transition-all duration-500 delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
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

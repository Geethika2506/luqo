
import React from 'react';
import CitySelector from '@/components/CitySelector';
import CategoryCard from '@/components/CategoryCard';

interface HeroSectionProps {
  onCategoryClick: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCategoryClick }) => {
  return (
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
          className="mb-12 md:mb-16"
        />
        
        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
          <CategoryCard 
            title="Workshops" 
            imageUrl="/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png"
            href="#"
            bgColor="bg-[#1e3a8a]"
            onClick={() => onCategoryClick("Workshops")}
          />
          
          <CategoryCard 
            title="Events" 
            imageUrl="/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png"
            href="#"
            bgColor="bg-[#3c1f7b]"
            onClick={() => onCategoryClick("Events")}
            hasSubcategories={true}
            subcategories={["Art & Culture", "Outdoors", "Food"]}
          />
          
          <CategoryCard 
            title="Offers" 
            imageUrl="/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png"
            href="#"
            bgColor="bg-[#c2410c]"
            onClick={() => onCategoryClick("Offers")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

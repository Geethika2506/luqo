
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoryContent from '@/components/home/CategoryContent';
import JoinSection from '@/components/home/JoinSection';
import { storeExperiences } from '@/data/storeExperiences';
import { Palmtree, Utensils, Palette } from 'lucide-react';

// Available main categories
const mainCategories = ["All", "Workshops", "Events", "Offers"];

// Event subcategories
const eventSubcategories = ["Art & Culture", "Outdoors", "Food"];

const Index: React.FC = () => {
  const [activeMainCategory, setActiveMainCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [filteredStores, setFilteredStores] = useState(storeExperiences);
  const [selectedCity, setSelectedCity] = useState('');

  // Filter stores based on active category and subcategory
  useEffect(() => {
    let filtered = [...storeExperiences];
    
    // Filter by main category
    if (activeMainCategory === "Workshops") {
      filtered = storeExperiences.filter(store => store.category === "Workshops");
    } else if (activeMainCategory === "Events") {
      if (activeSubcategory) {
        filtered = storeExperiences.filter(store => store.category === activeSubcategory);
      } else {
        filtered = storeExperiences.filter(store => 
          eventSubcategories.includes(store.category)
        );
      }
    } else if (activeMainCategory === "Offers") {
      filtered = storeExperiences.filter(store => store.offer);
    }
    
    setFilteredStores(filtered);
  }, [activeMainCategory, activeSubcategory]);

  const handleCategoryClick = (category: string) => {
    setActiveMainCategory(category);
    setActiveSubcategory("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <HeroSection onCategoryClick={handleCategoryClick} />
      
      {/* Category Content Section */}
      <CategoryContent
        activeMainCategory={activeMainCategory}
        activeSubcategory={activeSubcategory}
        mainCategories={mainCategories}
        eventSubcategories={eventSubcategories}
        filteredStores={filteredStores}
        handleCategoryClick={handleCategoryClick}
        setActiveSubcategory={setActiveSubcategory}
      />
      
      {/* Join Luqo Section */}
      <JoinSection />
      
      <Footer />
    </div>
  );
};

export default Index;

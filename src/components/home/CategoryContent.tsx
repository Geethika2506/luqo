
import React from 'react';
import CategoryTabs from '@/components/CategoryTabs';
import StoreCard from '@/components/StoreCard';
import { StoreExperience } from '@/data/storeExperiences';

interface CategoryContentProps {
  activeMainCategory: string;
  activeSubcategory: string;
  mainCategories: string[];
  eventSubcategories: string[];
  filteredStores: StoreExperience[];
  handleCategoryClick: (category: string) => void;
  setActiveSubcategory: (category: string) => void;
}

const CategoryContent: React.FC<CategoryContentProps> = ({
  activeMainCategory,
  activeSubcategory,
  mainCategories,
  eventSubcategories,
  filteredStores,
  handleCategoryClick,
  setActiveSubcategory
}) => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
      {/* Main category tabs */}
      <CategoryTabs 
        categories={mainCategories} 
        activeCategory={activeMainCategory} 
        onSelectCategory={handleCategoryClick}
        className="mb-6"
      />
      
      {/* Event subcategory tabs - only show when Events is selected */}
      {activeMainCategory === "Events" && (
        <CategoryTabs 
          categories={eventSubcategories} 
          activeCategory={activeSubcategory} 
          onSelectCategory={setActiveSubcategory}
          className="mb-8"
        />
      )}
      
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
  );
};

export default CategoryContent;

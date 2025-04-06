
import React from 'react';
import { cn } from '@/lib/utils';
import CategoryButton from './CategoryButton';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  className
}) => {
  return (
    <div className={cn("flex flex-wrap gap-2 md:gap-4", className)}>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          label={category}
          isActive={activeCategory === category}
          onClick={() => onSelectCategory(category)}
          className="animate-scale-in"
        />
      ))}
    </div>
  );
};

export default CategoryTabs;

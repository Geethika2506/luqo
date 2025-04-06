
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'lucide-react';

interface Subcategory {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  href: string;
  className?: string;
  bgColor?: string;
  subcategories?: Subcategory[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  href,
  className,
  bgColor = "bg-navyBlue",
  subcategories = []
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  const handleSubcategoryClick = (e: React.MouseEvent, subHref: string) => {
    e.stopPropagation();
    navigate(subHref);
  };

  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1",
        bgColor,
        className
      )}
      onClick={handleClick}
    >
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
        
        {subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {subcategories.map((sub, index) => (
              <div
                key={index}
                onClick={(e) => handleSubcategoryClick(e, sub.href)}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs flex items-center transition-colors"
              >
                {sub.icon && <span className="mr-1">{sub.icon}</span>}
                {sub.label}
              </div>
            ))}
          </div>
        )}
        
        <div className="flex-grow relative overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

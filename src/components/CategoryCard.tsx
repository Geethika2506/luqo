
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  href: string;
  className?: string;
  bgColor?: string;
  onClick?: () => void;
  hasSubcategories?: boolean;
  subcategories?: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  href,
  className,
  bgColor = "bg-navyBlue",
  onClick,
  hasSubcategories = false,
  subcategories = []
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(href);
    }
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
        <div className="flex-grow relative overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          
          {hasSubcategories && subcategories.length > 0 && (
            <div className="absolute bottom-0 left-0 w-full p-2 flex gap-2 flex-wrap bg-gradient-to-t from-black/80 to-transparent">
              {subcategories.map((subcat) => (
                <span 
                  key={subcat}
                  className="text-xs text-white bg-brand/90 px-2 py-1 rounded-full"
                >
                  {subcat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;


import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  href: string;
  className?: string;
  bgColor?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  href,
  className,
  bgColor = "bg-navyBlue"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
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
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

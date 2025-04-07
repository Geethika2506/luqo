
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1",
        bgColor,
        isMobile ? "h-[120px]" : "",
        className
      )}
      onClick={handleClick}
    >
      <div className={cn(
        "flex h-full", 
        isMobile ? "flex-row items-center p-2" : "flex-col p-4"
      )}>
        {isMobile ? (
          <>
            <div className="relative overflow-hidden rounded-lg w-1/3 h-full mr-3">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
            <div className="flex-grow relative overflow-hidden rounded-lg">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;

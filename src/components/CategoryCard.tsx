
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

  // Special styling for Workshops card to match the design
  const isWorkshop = title === "Workshops";
  const isEvent = title === "Events";
  const isOffer = title === "Offers";
  
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 shadow-md",
        bgColor,
        isMobile ? "h-[120px]" : "",
        className
      )}
      onClick={handleClick}
      style={{boxShadow: "0 4px 12px rgba(0,0,0,0.15)"}}
    >
      <div className={cn(
        "flex h-full", 
        isMobile ? "flex-row items-center p-0" : 
          isWorkshop ? "flex-col p-0" : "flex-col p-4"
      )}>
        {isMobile ? (
          <>
            <div className="relative overflow-hidden h-full flex-1">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover object-center"
                style={{
                  objectPosition: title === "Workshops" ? "center 30%" : 
                               title === "Events" ? "center 40%" : 
                               title === "Offers" ? "center center" : "center 60%"
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center drop-shadow-md">{title}</h3>
              </div>
            </div>
          </>
        ) : isWorkshop ? (
          <>
            <h3 className="text-2xl md:text-3xl font-bold text-white p-4 pb-2">{title}</h3>
            <div className="w-full overflow-hidden rounded-lg mx-auto px-3 pb-3">
              <img 
                src="/lovable-uploads/17fb8e44-896a-4404-b22d-7bc10a56ea99.png" 
                alt={title} 
                className="w-full rounded-lg object-cover shadow-md"
                style={{
                  height: "180px",
                  objectPosition: "center top"
                }}
              />
            </div>
          </>
        ) : isEvent ? (
          <>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
            <div className="flex-grow relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/65f25eba-83e4-4ef6-8395-c452854b8fa4.png" 
                alt={title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
                style={{
                  objectPosition: "center center"
                }}
              />
            </div>
          </>
        ) : isOffer ? (
          <>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
            <div className="flex-grow relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/f0e62bad-8058-441f-8ae9-93f3e1328699.png" 
                alt={title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
                style={{
                  objectPosition: "center center",
                  minHeight: "150px"
                }}
              />
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

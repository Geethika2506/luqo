
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tag, Gift, ChevronRight, MapPin } from 'lucide-react';

interface StoreCardProps {
  title: string;
  description: string;
  category: string;
  storeName?: string;
  imageUrl?: string;
  className?: string;
  offer?: string;
  giveaway?: string;
  experience?: string;
  id: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ 
  title, 
  description,
  storeName,
  category,
  imageUrl = "https://via.placeholder.com/400x200/EEEEEE/999999", 
  className,
  offer,
  giveaway,
  id
}) => {
  const navigate = useNavigate();

  const handleViewExperience = () => {
    navigate(`/store/${id}`);
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={`${title} experience`} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {offer && (
            <div className="bg-brand text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
              <Tag className="h-3 w-3 mr-1" />
              OFFER
            </div>
          )}
          {giveaway && (
            <div className="bg-navyBlue text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
              <Gift className="h-3 w-3 mr-1" />
              GIFT
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-brand text-white rounded-full mb-3">
          {category}
        </span>
        
        <h3 className="text-lg font-semibold mb-2 text-textPrimary">
          {title}
        </h3>
        
        {storeName && (
          <div className="flex items-center text-sm text-textSecondary mb-2">
            <MapPin className="h-3.5 w-3.5 mr-1 text-brand" />
            <span>{storeName} <span className="text-xs italic ml-1">near you</span></span>
          </div>
        )}
        
        <p className="text-textSecondary text-sm mb-4">
          {description}
        </p>
        
        <button 
          className="text-brand font-medium text-sm flex items-center hover:underline focus:underline"
          aria-label={`View details for ${title}`}
          onClick={handleViewExperience}
        >
          View Experience
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default StoreCard;

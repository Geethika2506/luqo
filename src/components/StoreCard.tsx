
import React from 'react';
import { cn } from '@/lib/utils';

interface StoreCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  className?: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ 
  title, 
  description, 
  category,
  imageUrl = "https://via.placeholder.com/400x200/EEEEEE/999999", 
  className 
}) => {
  return (
    <div 
      className={cn(
        "bg-cardBg rounded-lg overflow-hidden card-hover animate-fade-in opacity-0",
        className
      )}
    >
      <div 
        className="h-48 w-full bg-gray-300 relative"
        aria-hidden="true"
      >
        <img 
          src={imageUrl} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-brand text-white rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-lg font-semibold mb-2 text-textPrimary">
          {title}
        </h3>
        <p className="text-textSecondary text-sm">
          {description}
        </p>
        <button 
          className="mt-4 text-brand font-medium text-sm flex items-center hover:underline focus:underline"
          aria-label={`View details for ${title}`}
        >
          View Experience
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16"

            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoreCard;

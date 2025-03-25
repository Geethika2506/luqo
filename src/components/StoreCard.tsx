
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tag, Gift, ChevronRight, X } from 'lucide-react';

interface StoreCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  className?: string;
  offer?: string;
  giveaway?: string;
  experience?: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ 
  title, 
  description, 
  category,
  imageUrl = "https://via.placeholder.com/400x200/EEEEEE/999999", 
  className,
  offer,
  giveaway,
  experience
}) => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div 
      className={cn(
        "bg-cardBg rounded-lg overflow-hidden card-hover animate-fade-in opacity-0 relative",
        className
      )}
    >
      {/* Experience Modal */}
      {showExperience && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-semibold text-textPrimary">{title} Experience</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowExperience(false)}
                aria-label="Close experience details"
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-6">
              <img 
                src={imageUrl} 
                alt={`${title} store`} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <p className="text-textPrimary mb-4">{experience}</p>
              
              {(offer || giveaway) && (
                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-medium text-textPrimary">Special Offers & Giveaways</h4>
                  
                  {offer && (
                    <div className="flex items-start gap-3 bg-brand/10 p-3 rounded-md">
                      <Tag className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-brand">Current Offer:</span>
                        <p className="text-textSecondary text-sm mt-1">{offer}</p>
                      </div>
                    </div>
                  )}
                  
                  {giveaway && (
                    <div className="flex items-start gap-3 bg-navyBlue/10 p-3 rounded-md">
                      <Gift className="h-5 w-5 text-navyBlue flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-navyBlue">Giveaway:</span>
                        <p className="text-textSecondary text-sm mt-1">{giveaway}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      <div 
        className="h-48 w-full bg-gray-300 relative"
        aria-hidden="true"
      >
        <img 
          src={imageUrl} 
          alt={`${title} store`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {(offer || giveaway) && (
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
        )}
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
          onClick={() => setShowExperience(true)}
        >
          View Experience
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default StoreCard;

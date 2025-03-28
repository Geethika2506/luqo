
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tag, Gift, MapPin, Clock, DollarSign, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog';

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
  price?: string;
  duration?: string;
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
  id,
  price = "$85",
  duration = "3 hours"
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAuthDialog, setShowAuthDialog] = React.useState(false);
  const [actionType, setActionType] = React.useState<'book' | 'wishlist'>('book');

  const handleViewExperience = () => {
    navigate(`/store/${id}`);
  };

  const checkUserAuth = async (action: 'book' | 'wishlist') => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      if (action === 'book') {
        toast({
          title: "Booking initiated",
          description: `You're booking ${title}. This would take you to the booking page in a real app.`,
        });
      } else {
        toast({
          title: "Added to wishlist",
          description: `${title} has been added to your wishlist.`,
        });
      }
    } else {
      setActionType(action);
      setShowAuthDialog(true);
    }
  };

  const handleBookNow = () => {
    checkUserAuth('book');
  };

  const handleWishlist = () => {
    checkUserAuth('wishlist');
  };

  const handleSignIn = () => {
    setShowAuthDialog(false);
    navigate('/sign-in');
  };

  return (
    <>
      <div 
        className={cn(
          "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100",
          className
        )}
      >
        <div 
          className="h-48 w-full bg-gray-300 relative cursor-pointer"
          onClick={handleViewExperience}
          aria-hidden="true"
        >
          <img 
            src={imageUrl} 
            alt={`${title} experience`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {(offer || giveaway) && (
            <div className="absolute top-3 right-3 flex gap-2">
              {offer && (
                <div className="bg-brand text-white text-xs font-bold py-1 px-3 rounded-full flex items-center">
                  OFFER
                </div>
              )}
              {giveaway && (
                <div className="bg-navyBlue text-white text-xs font-bold py-1 px-3 rounded-full flex items-center">
                  GIFT
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="mb-3">
            <div className="inline-block mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-brand text-white rounded-full">
                {category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-textPrimary cursor-pointer" onClick={handleViewExperience}>
              {title}
            </h3>
          </div>

          {storeName && (
            <div className="flex items-center text-sm text-textSecondary mb-3">
              <MapPin className="h-4 w-4 mr-1 text-brand" />
              <span>{storeName} <span className="text-xs italic ml-1">near you</span></span>
            </div>
          )}

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center text-sm text-textSecondary">
              <Clock className="h-4 w-4 mr-1 text-brand" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-1 text-brand" />
              <span>{price}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2 mb-4">{description}</p>
        </div>

        <div className="border-t border-gray-100">
          <div className="grid grid-cols-2 gap-2 p-4">
            <Button 
              className="bg-brand text-white hover:bg-brand/90"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              className="border-brand text-brand hover:bg-brand/5"
              onClick={handleWishlist}
            >
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      <AlertDialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign in required</AlertDialogTitle>
            <AlertDialogDescription>
              You need to be signed in to {actionType === 'book' ? 'book this experience' : 'add to wishlist'}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSignIn}>Sign in</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default StoreCard;

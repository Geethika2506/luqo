
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tag, Gift, ArrowLeft, Heart, Calendar } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { supabase } from '@/integrations/supabase/client';

const storeExperiences = [
  {
    id: "1",
    title: "Pagde Swimwear",
    description: "Create unique charms to add a personalized touch to your swimwear.",
    category: "Swimwear",
    imageUrl: "/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png",
    offer: "20% off on all handcrafted charms when you mention LUQO at checkout",
    giveaway: "Free charm with purchases over $75 this month",
    experience: "At Pagde Swimwear, we've created an inclusive shopping environment where everyone can appreciate the beauty of our handcrafted swimwear pieces. Our showroom features enhanced lighting and magnifying glasses to help you see intricate details. Each display includes Braille descriptions and our staff members are trained in basic sign language. We offer a unique 'touch collection' where you can feel the textures and weights of different designs. Audio descriptions are available for each swimwear piece, and our counters are at varied heights to accommodate wheelchair users. We regularly host sensory-friendly shopping hours with reduced lighting and sound."
  },
  {
    id: "2",
    title: "Sensory Bookshop",
    description: "Browse our extensive collection of books with braille options, audiobooks, and a calm sensory-friendly environment.",
    category: "Books",
    imageUrl: "/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png",
    offer: "Buy one audiobook, get one 50% off through the end of the month",
    giveaway: "Free tote bag with purchases over $50",
    experience: "The Sensory Bookshop is designed to be a sanctuary for all book lovers. Our store layout features wide aisles for easy navigation, and we have a selection of adjustable reading chairs to accommodate various needs. We're proud to offer an extensive collection of books in multiple formats: traditional print, large print, braille, and digital/audio options. Our 'Quiet Corner' is a dedicated low-sensory zone with noise-cancelling features and adjustable lighting. Staff members are trained in accessibility support and can assist with finding the perfect book in your preferred format. We host regular inclusive reading groups and author events with sign language interpreters. Visitors particularly enjoy our scented bookmarks that correspond to different genres!"
  },
  {
    id: "3",
    title: "Adaptive Clothing",
    description: "Fashion for everyone with magnetic closures, sensory-friendly fabrics, and wheelchair-friendly designs.",
    category: "Fashion",
    imageUrl: "/lovable-uploads/72f411e9-fdd4-4d19-8c4e-6ef7a54aa8e4.png",
    offer: "15% discount on your first purchase when you sign up for our newsletter",
    experience: "Adaptive Clothing revolutionizes the shopping experience with fashion that truly works for everybody. Our store features extra-wide fitting rooms with grab bars, accessible mirrors, and adjustable lighting. All our clothing items incorporate innovative design elements like magnetic closures, elasticized waistbands, and sensory-friendly fabrics without tags. Our 'seated fashion' line is specifically designed for wheelchair users with longer backs on tops and special cut pants. We offer personal shopping assistants who understand various accessibility needs and can help find the perfect outfit. The store uses clear, simple signage with pictograms, and our staff are trained to provide descriptive information about colors, textures, and styles. We regularly host inclusive fashion shows featuring models with diverse abilities."
  },
  {
    id: "4",
    title: "Tech For All",
    description: "Accessible technology with trained staff to demonstrate adaptive features and assistive devices for various needs.",
    category: "Technology",
    imageUrl: "/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png",
    giveaway: "Free accessibility starter pack with purchases over $200",
    experience: "Tech For All creates an environment where everyone can explore and learn about adaptive technology. Our store features demonstration stations where you can try various assistive technologies, from screen readers to adaptive gaming controllers. All display products are fully charged and ready to test, with clear, jargon-free instructions in multiple formats. Our staff are certified in accessibility training and can customize technology solutions for individual needs. We offer regular workshops on topics like 'Introduction to Voice Commands' and 'Making Your Smart Home Accessible.' The store layout includes tactile flooring to guide visitors with visual impairments, and all product information is available in multiple formats including braille, large print, and audio. We're particularly proud of our 'Tech Buddies' program, which pairs customers with knowledgeable staff for personalized shopping assistance."
  }
];

const StoreDetails = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const [store, setStore] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const { toast } = useToast();
  const [bookingDate, setBookingDate] = useState<Date | undefined>(undefined);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  useEffect(() => {
    const foundStore = storeExperiences.find(s => s.id === storeId);
    
    if (foundStore) {
      setStore(foundStore);
      
      // Generate some available dates for the next 30 days
      const dates = [];
      const today = new Date();
      for (let i = 1; i <= 30; i++) {
        // Skip some days to make it look realistic
        if (i % 3 !== 0) {
          const date = new Date();
          date.setDate(today.getDate() + i);
          dates.push(date);
        }
      }
      setAvailableDates(dates);
    }
    setLoading(false);
  }, [storeId]);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    if (session) {
      setIsBookingDialogOpen(true);
    }
  };

  const handleConfirmBooking = async () => {
    if (!bookingDate || !session || !store) return;
    
    try {
      // Here you would typically save the booking to your database
      toast({
        title: "Booking Confirmed!",
        description: `You've booked the experience at ${store.title} for ${format(bookingDate, 'PPPP')}.`,
      });
      setIsBookingDialogOpen(false);
      setBookingDate(undefined);
    } catch (error) {
      console.error('Error booking:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleAddToWishlist = async () => {
    if (!session || !store) return;
    
    try {
      // Check if item is already in wishlist
      const { data: existingItems, error: checkError } = await supabase
        .from('wishlist')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('store_id', store.id)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError;
      }

      if (existingItems) {
        toast({
          title: "Already in Wishlist",
          description: `${store.title} is already in your wishlist.`,
        });
        return;
      }

      // Add to wishlist
      const { error } = await supabase
        .from('wishlist')
        .insert({
          user_id: session.user.id,
          store_id: store.id,
          store_name: store.title,
          store_image: store.imageUrl,
          store_category: store.category,
          added_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: "Added to Wishlist",
        description: `${store.title} has been added to your wishlist.`,
      });
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast({
        title: "Action Failed",
        description: "There was an error adding this item to your wishlist.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="flex justify-center items-center h-full">
            <p className="text-xl font-montserrat">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 font-montserrat">Store Not Found</h1>
            <p className="mb-8 font-montserrat">Sorry, we couldn't find the store you're looking for.</p>
            <Button onClick={handleGoBack} className="bg-[#FF5722] hover:bg-[#FF5722]/90">
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <Button 
          variant="ghost" 
          onClick={handleGoBack} 
          className="mb-6 flex items-center text-[#FF5722]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-montserrat">Back to stores</span>
        </Button>

        <Card className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <img 
              src={store.imageUrl} 
              alt={`${store.title} store`} 
              className="w-full h-64 md:h-96 object-cover" 
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand text-white rounded-full mb-3 font-montserrat">
                {store.category}
              </span>
            </div>
          </div>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4 font-montserrat">{store.title}</h1>
            <p className="text-lg mb-6 font-montserrat">{store.description}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-montserrat">Shopping Experience</h2>
              <p className="text-gray-700 font-montserrat">{store.experience}</p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {session ? (
                <>
                  <Button 
                    className="flex items-center gap-2 bg-brand hover:bg-brand/90"
                    onClick={handleBookNow}
                  >
                    <Calendar className="h-4 w-4" />
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-brand text-brand hover:bg-brand/10"
                    onClick={handleAddToWishlist}
                  >
                    <Heart className="h-4 w-4" />
                    Add to Wishlist
                  </Button>
                </>
              ) : (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="flex items-center gap-2 bg-brand hover:bg-brand/90">
                        <Calendar className="h-4 w-4" />
                        Book Now
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Sign in required</AlertDialogTitle>
                        <AlertDialogDescription>
                          You need to sign in before booking this experience.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => navigate('/sign-in')}>Sign In</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 border-brand text-brand hover:bg-brand/10"
                      >
                        <Heart className="h-4 w-4" />
                        Add to Wishlist
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Sign in required</AlertDialogTitle>
                        <AlertDialogDescription>
                          You need to sign in before adding items to your wishlist.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => navigate('/sign-in')}>Sign In</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              )}
            </div>
            
            {(store.offer || store.giveaway) && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 font-montserrat">Special Offers & Giveaways</h2>
                
                {store.offer && (
                  <div className="flex items-start gap-3 bg-brand/10 p-4 rounded-md">
                    <Tag className="h-5 w-5 text-brand flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-brand font-montserrat">Current Offer:</span>
                      <p className="text-textSecondary mt-1 font-montserrat">{store.offer}</p>
                    </div>
                  </div>
                )}
                
                {store.giveaway && (
                  <div className="flex items-start gap-3 bg-navyBlue/10 p-4 rounded-md">
                    <Gift className="h-5 w-5 text-navyBlue flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-navyBlue font-montserrat">Giveaway:</span>
                      <p className="text-textSecondary mt-1 font-montserrat">{store.giveaway}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Booking Dialog */}
        <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select a Date</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="mb-4 text-sm text-gray-600">
                Please select a date for your experience at {store?.title}:
              </p>
              <div className="flex justify-center">
                <CalendarComponent
                  mode="single"
                  selected={bookingDate}
                  onSelect={setBookingDate}
                  disabled={[
                    { before: new Date() },
                    (date) => {
                      // Disable dates that are not in availableDates
                      return !availableDates.some(
                        availableDate => 
                          availableDate.getDate() === date.getDate() &&
                          availableDate.getMonth() === date.getMonth() &&
                          availableDate.getFullYear() === date.getFullYear()
                      );
                    }
                  ]}
                  className="p-3 pointer-events-auto"
                />
              </div>
              {bookingDate && (
                <p className="mt-4 text-center text-sm font-medium text-brand">
                  You selected: {format(bookingDate, 'PPPP')}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsBookingDialogOpen(false)}>Cancel</Button>
              <Button 
                onClick={handleConfirmBooking} 
                disabled={!bookingDate}
                className="bg-brand hover:bg-brand/90"
              >
                Confirm Booking
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default StoreDetails;

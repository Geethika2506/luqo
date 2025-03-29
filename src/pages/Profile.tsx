
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Heart, Calendar } from 'lucide-react';
import { format } from 'date-fns';

type WishlistItem = {
  id: string;
  user_id: string;
  store_id: string;
  store_name: string;
  store_image: string;
  store_category: string;
  added_at: string;
};

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      
      if (!data.session) {
        navigate('/sign-in');
        return;
      }
      
      fetchUserData(data.session.user.id);
    };
    
    getSession();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        
        if (!session) {
          navigate('/sign-in');
          return;
        }
        
        fetchUserData(session.user.id);
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);
  
  const fetchUserData = async (userId: string) => {
    try {
      setLoading(true);
      
      // Fetch profile data
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        
      if (profileError) throw profileError;
      setProfile(profileData);
      
      // Fetch wishlist items
      const { data: wishlistData, error: wishlistError } = await supabase
        .from('wishlist')
        .select('*')
        .eq('user_id', userId)
        .order('added_at', { ascending: false });
        
      if (wishlistError) throw wishlistError;
      setWishlistItems(wishlistData || []);
      
      // We would fetch bookings here too if we had that table
      setBookings([]);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast({
        title: "Error",
        description: "Failed to load your profile data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleRemoveFromWishlist = async (itemId: string, storeName: string) => {
    try {
      const { error } = await supabase
        .from('wishlist')
        .delete()
        .eq('id', itemId);
        
      if (error) throw error;
      
      // Update local state
      setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
      
      toast({
        title: "Removed from Wishlist",
        description: `${storeName} has been removed from your wishlist.`,
      });
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast({
        title: "Action Failed",
        description: "There was an error removing this item from your wishlist.",
        variant: "destructive"
      });
    }
  };
  
  const navigateToStore = (storeId: string) => {
    navigate(`/store/${storeId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="flex justify-center items-center h-full">
            <p className="text-xl font-montserrat">Loading your profile...</p>
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
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Avatar className="h-24 w-24 border-2 border-brand">
                  <AvatarImage src={profile?.avatar_url} alt="Profile" />
                  <AvatarFallback className="bg-brand/10 text-brand text-xl font-bold">
                    {profile?.full_name 
                      ? profile.full_name.substring(0, 2).toUpperCase() 
                      : session?.user?.email.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-2 font-montserrat">
                    {profile?.full_name || 'User'}
                  </h1>
                  <p className="text-gray-600 mb-4 font-montserrat">
                    {session?.user?.email}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate('/edit-profile')}
                    className="border-brand text-brand hover:bg-brand/10"
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="wishlist" className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="wishlist" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex-1">
                <Calendar className="h-4 w-4 mr-2" />
                My Bookings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                  <CardDescription>
                    Stores and experiences you've saved for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {wishlistItems.length === 0 ? (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 font-montserrat">
                        Your wishlist is empty. Browse stores and add them to your wishlist!
                      </p>
                      <Button 
                        className="mt-4 bg-brand hover:bg-brand/90"
                        onClick={() => navigate('/search')}
                      >
                        Browse Stores
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wishlistItems.map((item) => (
                        <div 
                          key={item.id} 
                          className="relative border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div 
                            className="cursor-pointer"
                            onClick={() => navigateToStore(item.store_id)}
                          >
                            <img 
                              src={item.store_image} 
                              alt={item.store_name} 
                              className="w-full h-36 object-cover"
                            />
                            <div className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold font-montserrat">
                                    {item.store_name}
                                  </h3>
                                  <span className="inline-block px-2 py-1 text-xs bg-brand/10 text-brand rounded-full mt-2 font-montserrat">
                                    {item.store_category}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mt-2">
                                Added {format(new Date(item.added_at), 'PP')}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 rounded-full p-1 bg-white/80 hover:bg-white text-red-500 hover:text-red-600"
                            onClick={() => handleRemoveFromWishlist(item.id, item.store_name)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove from wishlist</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>My Bookings</CardTitle>
                  <CardDescription>
                    Your upcoming and past store experiences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-montserrat">
                      You don't have any bookings yet. Book an experience to get started!
                    </p>
                    <Button 
                      className="mt-4 bg-brand hover:bg-brand/90"
                      onClick={() => navigate('/search')}
                    >
                      Explore Experiences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      
      if (data.session) {
        // Fetch user profile
        const { data: profileData, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.session.user.id)
          .single();
          
        if (!error && profileData) {
          setProfile(profileData);
        }
      }
    };
    
    getSession();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        
        if (session) {
          // Fetch user profile when auth state changes
          const { data: profileData, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
            
          if (!error && profileData) {
            setProfile(profileData);
          }
        } else {
          setProfile(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSearch = () => {
    navigate('/search');
    console.log('Search button clicked');
  };

  const handleSignIn = () => {
    navigate('/sign-in');
    console.log('Sign In button clicked');
  };
  
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out.",
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleRegisterStore = () => {
    navigate('/register-store');
    console.log('Register Store button clicked');
  };

  const getInitials = () => {
    if (session?.user?.email) {
      return session.user.email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="w-full bg-[#FF5722] py-3 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" aria-label="LUQO Home" className="mr-6">
          <img 
            src="/lovable-uploads/b06c87f1-5669-43fa-bea4-59295acfdc94.png" 
            alt="" 
            className="w-8 h-8 object-contain" 
            aria-hidden="true"
          />
        </a>
      </div>
      
      <div className="flex items-center space-x-4">
        <a 
          href="/about" 
          className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat"
          aria-label="About us"
        >
          About
        </a>
        <a 
          href="/contact" 
          className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat"
          aria-label="Contact us"
        >
          Contact
        </a>
        
        {session ? (
          <>
            <div className="flex items-center mr-2">
              <Avatar className="h-8 w-8 mr-2 border-2 border-white">
                <AvatarImage src={profile?.avatar_url} alt="Profile" />
                <AvatarFallback className="bg-white text-[#FF5722] text-xs font-bold">
                  {getInitials()}
                </AvatarFallback>
              </Avatar>
              <span className="text-white text-sm font-montserrat hidden md:inline">
                {profile?.full_name || session.user.email}
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRegisterStore}
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF5722] focus:bg-white focus:text-[#FF5722] transition-all font-montserrat"
              aria-label="Register your store"
            >
              Register Store
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSignOut}
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF5722] focus:bg-white focus:text-[#FF5722] transition-all font-montserrat"
              aria-label="Sign out"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSignIn}
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF5722] focus:bg-white focus:text-[#FF5722] transition-all font-montserrat"
            aria-label="Sign in to your account"
          >
            Sign In
          </Button>
        )}
        
        <Button 
          size="sm" 
          onClick={handleSearch}
          className="bg-white text-[#FF5722] hover:bg-opacity-90 focus:bg-opacity-90 transition-all font-montserrat"
          aria-label="Search stores"
        >
          Search
        </Button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, LogOut } from 'lucide-react';
import Logo from '@/components/Logo';
const Header: React.FC = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  useEffect(() => {
    const getSession = async () => {
      const {
        data
      } = await supabase.auth.getSession();
      setSession(data.session);
      if (data.session) {
        const {
          data: profileData,
          error
        } = await supabase.from('profiles').select('*').eq('id', data.session.user.id).single();
        if (!error && profileData) {
          setProfile(profileData);
        }
      }
    };
    getSession();
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session) {
        const {
          data: profileData,
          error
        } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        if (!error && profileData) {
          setProfile(profileData);
        }
      } else {
        setProfile(null);
      }
    });
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
        description: "You have been logged out."
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
    if (profile?.full_name) {
      return profile.full_name.substring(0, 2).toUpperCase();
    }
    if (session?.user?.email) {
      return session.user.email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };
  const getDisplayName = () => {
    if (profile?.full_name) {
      return profile.full_name;
    }
    if (session?.user?.email) {
      // Extract username from email (part before @)
      const username = session.user.email.split('@')[0];
      return username;
    }
    return 'User';
  };
  return <header className="w-full bg-[#FF5722] flex justify-between items-center py-[6px] mx-0 my-0 px-0">
      <div className="flex items-center">
        <a href="/" aria-label="LUQO Home" className="mr-6 px-0 mx-0">
          <Logo size="sm" />
        </a>
      </div>
      
      <div className="flex items-center space-x-4 px-0 my-[8px] py-0 mx-0">
        <a href="/about" aria-label="About us" className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat mx-0">
          About
        </a>
        <a href="/contact" className="text-white hover:underline focus:underline text-sm font-medium transition-all font-montserrat" aria-label="Contact us">
          Contact
        </a>
        
        <Button size="sm" onClick={handleSearch} className="bg-white text-[#FF5722] hover:bg-opacity-90 focus:bg-opacity-90 transition-all font-montserrat" aria-label="Search stores">
          Search
        </Button>
        
        {session ? <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center cursor-pointer ml-2">
                <Avatar className="h-8 w-8 mr-2 border-2 border-white">
                  <AvatarImage src={profile?.avatar_url} alt="Profile" />
                  <AvatarFallback className="bg-white text-[#FF5722] text-xs font-bold">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-white text-sm font-montserrat hidden md:inline">
                  {getDisplayName()}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handleRegisterStore} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Register Store</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> : <Button variant="outline" size="sm" onClick={handleSignIn} className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF5722] focus:bg-white focus:text-[#FF5722] transition-all font-montserrat" aria-label="Sign in to your account">
            Sign In
          </Button>}
      </div>
    </header>;
};
export default Header;
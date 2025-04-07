import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, LogOut } from 'lucide-react';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
const Header: React.FC = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [session, setSession] = React.useState<any>(null);
  const [profile, setProfile] = React.useState<any>(null);
  const isMobile = useIsMobile();
  React.useEffect(() => {
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
  const handleSignIn = () => {
    navigate('/sign-in');
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
      const username = session.user.email.split('@')[0];
      return username;
    }
    return 'User';
  };
  return <header className="w-full bg-zinc-900 absolute top-0 left-0 z-50 px-4 border-b border-zinc-800 py-0">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <a href="/" aria-label="LUQO Home">
            <Logo size="sm" variant="white" />
          </a>
        </div>
        
        <div className={cn("flex items-center", isMobile ? "space-x-4" : "space-x-8")}>
          <a href="/how-it-works" aria-label="How It Works" className="text-white/95 text-sm font-medium transition-all font-montserrat hover:text-white py-px px-[6px]">
            How It Works
          </a>
          <a href="/for-businesses" className="text-white/95 text-sm font-medium transition-all font-montserrat hover:text-white" aria-label="For Businesses">
            For Businesses
          </a>
          
          {session ? <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <Avatar className="h-8 w-8 border-2 border-white/20">
                    <AvatarImage src={profile?.avatar_url} alt="Profile" />
                    <AvatarFallback className="bg-white text-zinc-900 text-xs font-bold">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
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
            </DropdownMenu> : <Button onClick={handleSignIn} className="bg-brand text-white hover:bg-brand/90 focus:bg-brand/90 transition-all font-montserrat rounded-md text-sm px-4 py-1 h-auto" aria-label="Sign Up">
              Sign Up
            </Button>}
        </div>
      </div>
    </header>;
};
export default Header;
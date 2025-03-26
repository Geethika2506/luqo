
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in form submitted');
    // In a real app, this would authenticate the user
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6 font-montserrat">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-montserrat">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-montserrat">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm font-montserrat">Remember me</label>
              </div>
              <a href="#" className="text-sm text-[#FF5722] hover:underline font-montserrat">Forgot password?</a>
            </div>
            <Button 
              type="submit"
              className="w-full bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-montserrat"
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm font-montserrat">
              Don't have an account? 
              <a href="#" className="text-[#FF5722] hover:underline ml-1 font-montserrat">Sign up</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;

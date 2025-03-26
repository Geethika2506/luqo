
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const RegisterStore = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Store registration submitted",
      description: "Thank you for registering your store. We will review your submission and get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-montserrat">Register Your Accessible Store</h1>
          
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="storeName" className="block text-sm font-medium font-montserrat">
                  Store Name
                </label>
                <Input 
                  id="storeName" 
                  placeholder="Enter your store name" 
                  required 
                  className="font-montserrat"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium font-montserrat">
                  Location
                </label>
                <Input 
                  id="location" 
                  placeholder="Store address or area" 
                  required 
                  className="font-montserrat"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium font-montserrat">
                  Category
                </label>
                <select 
                  id="category" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand font-montserrat"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Technology">Technology</option>
                  <option value="Books">Books</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Food">Food & Grocery</option>
                  <option value="Home">Home & Garden</option>
                  <option value="Health">Health & Beauty</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium font-montserrat">
                  Store Description
                </label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your store" 
                  required 
                  className="font-montserrat"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="accessibility" className="block text-sm font-medium font-montserrat">
                  Accessibility Features
                </label>
                <Textarea 
                  id="accessibility" 
                  placeholder="List the accessibility features your store offers" 
                  required 
                  className="font-montserrat"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact" className="block text-sm font-medium font-montserrat">
                  Contact Email
                </label>
                <Input 
                  id="contact" 
                  type="email"
                  placeholder="Email address" 
                  required 
                  className="font-montserrat"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-montserrat"
              >
                Submit Registration
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterStore;

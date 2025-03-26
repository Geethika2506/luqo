
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const RegisterStore = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    description: '',
    accessibility_features: '',
    contact_email: ''
  });

  // Check if user is logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        toast({
          title: "Authentication required",
          description: "You need to be signed in to register a store.",
          variant: "destructive",
        });
        navigate('/sign-in');
      }
    };
    
    checkSession();
  }, [navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Get current user
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error("You must be signed in to register a store");
      }
      
      const { error } = await supabase.from('stores').insert({
        ...formData,
        user_id: session.user.id
      });

      if (error) throw error;

      toast({
        title: "Store registration successful",
        description: "Thank you for registering your store. It has been added to our database!",
      });
      
      // Reset form
      setFormData({
        name: '',
        location: '',
        category: '',
        description: '',
        accessibility_features: '',
        contact_email: ''
      });
      
      // Redirect to home page
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error registering store",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
                <label htmlFor="name" className="block text-sm font-medium font-montserrat">
                  Store Name
                </label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.location}
                  onChange={handleChange}
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
                  value={formData.category}
                  onChange={handleChange}
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
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your store" 
                  required 
                  className="font-montserrat"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="accessibility_features" className="block text-sm font-medium font-montserrat">
                  Accessibility Features
                </label>
                <Textarea 
                  id="accessibility_features" 
                  value={formData.accessibility_features}
                  onChange={handleChange}
                  placeholder="List the accessibility features your store offers" 
                  required 
                  className="font-montserrat"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact_email" className="block text-sm font-medium font-montserrat">
                  Contact Email
                </label>
                <Input 
                  id="contact_email" 
                  type="email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  placeholder="Email address" 
                  required 
                  className="font-montserrat"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-montserrat"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Registration"}
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

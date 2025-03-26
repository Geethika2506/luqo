
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tag, Gift, ArrowLeft } from 'lucide-react';

// This would come from an API in a real app
const storeExperiences = [
  {
    id: "1",
    title: "Pao Jewellery",
    description: "Experience handcrafted jewelry with audio descriptions and touchable display samples. Friendly staff trained in sign language.",
    category: "Jewelry",
    imageUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    offer: "20% off on all handcrafted necklaces when you mention LUQO at checkout",
    giveaway: "Free sterling silver earrings with purchases over $100 this month",
    experience: "At Pao Jewellery, we've created an inclusive shopping environment where everyone can appreciate the beauty of our handcrafted pieces. Our showroom features enhanced lighting and magnifying glasses to help you see intricate details. Each display includes Braille descriptions and our staff members are trained in basic sign language. We offer a unique 'touch collection' where you can feel the textures and weights of different designs. Audio descriptions are available for each jewelry piece, and our counters are at varied heights to accommodate wheelchair users. We regularly host sensory-friendly shopping hours with reduced lighting and sound."
  },
  {
    id: "2",
    title: "Sensory Bookshop",
    description: "Browse our extensive collection of books with braille options, audiobooks, and a calm sensory-friendly environment.",
    category: "Books",
    imageUrl: "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    offer: "Buy one audiobook, get one 50% off through the end of the month",
    giveaway: "Free tote bag with purchases over $50",
    experience: "The Sensory Bookshop is designed to be a sanctuary for all book lovers. Our store layout features wide aisles for easy navigation, and we have a selection of adjustable reading chairs to accommodate various needs. We're proud to offer an extensive collection of books in multiple formats: traditional print, large print, braille, and digital/audio options. Our 'Quiet Corner' is a dedicated low-sensory zone with noise-cancelling features and adjustable lighting. Staff members are trained in accessibility support and can assist with finding the perfect book in your preferred format. We host regular inclusive reading groups and author events with sign language interpreters. Visitors particularly enjoy our scented bookmarks that correspond to different genres!"
  },
  {
    id: "3",
    title: "Adaptive Clothing",
    description: "Fashion for everyone with magnetic closures, sensory-friendly fabrics, and wheelchair-friendly designs.",
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    offer: "15% discount on your first purchase when you sign up for our newsletter",
    experience: "Adaptive Clothing revolutionizes the shopping experience with fashion that truly works for everybody. Our store features extra-wide fitting rooms with grab bars, accessible mirrors, and adjustable lighting. All our clothing items incorporate innovative design elements like magnetic closures, elasticized waistbands, and sensory-friendly fabrics without tags. Our 'seated fashion' line is specifically designed for wheelchair users with longer backs on tops and special cut pants. We offer personal shopping assistants who understand various accessibility needs and can help find the perfect outfit. The store uses clear, simple signage with pictograms, and our staff are trained to provide descriptive information about colors, textures, and styles. We regularly host inclusive fashion shows featuring models with diverse abilities."
  },
  {
    id: "4",
    title: "Tech For All",
    description: "Accessible technology with trained staff to demonstrate adaptive features and assistive devices for various needs.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    giveaway: "Free accessibility starter pack with purchases over $200",
    experience: "Tech For All creates an environment where everyone can explore and learn about adaptive technology. Our store features demonstration stations where you can try various assistive technologies, from screen readers to adaptive gaming controllers. All display products are fully charged and ready to test, with clear, jargon-free instructions in multiple formats. Our staff are certified in accessibility training and can customize technology solutions for individual needs. We offer regular workshops on topics like 'Introduction to Voice Commands' and 'Making Your Smart Home Accessible.' The store layout includes tactile flooring to guide visitors with visual impairments, and all product information is available in multiple formats including braille, large print, and audio. We're particularly proud of our 'Tech Buddies' program, which pairs customers with knowledgeable staff for personalized shopping assistance."
  }
];

const StoreDetails = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const [store, setStore] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch from an API
    const foundStore = storeExperiences.find(s => s.id === storeId);
    
    if (foundStore) {
      setStore(foundStore);
    }
    setLoading(false);
  }, [storeId]);

  const handleGoBack = () => {
    navigate(-1);
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
      </main>
      <Footer />
    </div>
  );
};

export default StoreDetails;

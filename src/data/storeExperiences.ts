
import { Tag, Gift, MapPin, Utensils, Palmtree, Palette } from 'lucide-react';

export interface StoreExperience {
  id: string;
  title: string;
  description: string;
  storeName: string;
  category: string;
  subcategory?: string;
  imageUrl: string;
  offer?: string;
  giveaway?: string;
}

export const storeExperiences: StoreExperience[] = [
  {
    id: "workshop-1",
    title: "Customizable swimwear charms workshop",
    description: "Create unique charms to add a personalized touch to your swimwear.",
    storeName: "Pagde Swimwear",
    category: "Workshops",
    imageUrl: "/lovable-uploads/8f81265b-ac15-4f04-add2-a115d50c2c69.png",
    offer: "15% off",
    giveaway: "Free kit"
  },
  {
    id: "workshop-2",
    title: "Sustainable Fashion Workshop",
    description: "Learn about sustainable fashion practices and how to upcycle your existing wardrobe items.",
    storeName: "Adaptive Clothing",
    category: "Workshops",
    imageUrl: "/lovable-uploads/e9bd4ff6-b4ed-48e2-b185-a73fae6679cf.png",
    offer: "20% discount"
  },
  {
    id: "event-1",
    title: "Author Book Launch & Signing",
    description: "Meet local authors and get your books signed at this exclusive event.",
    storeName: "Book Corner",
    category: "Events",
    subcategory: "Art & Culture",
    imageUrl: "/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png"
  },
  {
    id: "event-2",
    title: "Outdoor Photography Expedition",
    description: "Join our guided tour to capture breathtaking nature shots with expert photographers.",
    storeName: "Camera Club",
    category: "Events",
    subcategory: "Outdoors",
    imageUrl: "/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png",
    offer: "Equipment rental included"
  },
  {
    id: "event-3",
    title: "Local Food Tasting Tour",
    description: "Sample the best local cuisines from various restaurants in one evening.",
    storeName: "Foodie Tours",
    category: "Events",
    subcategory: "Food",
    imageUrl: "/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png",
    giveaway: "Recipe book"
  },
  {
    id: "offer-1",
    title: "Weekend Special Discount",
    description: "Exclusive weekend offers on selected items throughout the store.",
    storeName: "Local Marketplace",
    category: "Offers",
    imageUrl: "/lovable-uploads/c52658b8-159b-4d05-b711-e633030111d0.png",
    offer: "30% off"
  }
];

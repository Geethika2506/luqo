
export interface StoreExperience {
  id: string;
  title: string;
  storeName: string;
  description: string;
  category: string;
  imageUrl: string;
  offer?: string;
  giveaway?: string;
  experience?: string;
}

// Enhanced experience data with real images, offers, giveaways, and locations
export const storeExperiences: StoreExperience[] = [{
  id: "1",
  title: "Customizable swimwear charms workshop",
  storeName: "Pagde Swimwear",
  description: "Create unique charms to add a personalized touch to your swimwear.",
  category: "Workshops",
  imageUrl: "/lovable-uploads/5528c405-81a3-4c7f-b76e-09726fd8e8ad.png",
  offer: "20% off for first-time attendees",
  giveaway: "Take home your handmade creation",
  experience: "At Pagde Swimwear, we've created an inclusive shopping environment where everyone can appreciate the beauty of our handcrafted swimwear pieces. Our showroom features enhanced lighting and magnifying glasses to help you see intricate details. Each display includes Braille descriptions and our staff members are trained in basic sign language. We offer a unique 'touch collection' where you can feel the textures and weights of different designs. Audio descriptions are available for each swimwear piece, and our counters are at varied heights to accommodate wheelchair users. We regularly host sensory-friendly shopping hours with reduced lighting and sound."
}, {
  id: "2",
  title: "Author Book Launch & Signing",
  storeName: "Sensory Bookshop",
  description: "Meet your favorite author, get your book signed and participate in an interactive Q&A session.",
  category: "Art & Culture",
  imageUrl: "/lovable-uploads/80cc2d29-241d-45c3-a5c7-1dc9ae53e488.png",
  offer: "Buy the book at the event and get 15% off",
  giveaway: "Free bookmark with every purchase",
  experience: "The Sensory Bookshop is designed to be a sanctuary for all book lovers. Our store layout features wide aisles for easy navigation, and we have a selection of adjustable reading chairs to accommodate various needs. We're proud to offer an extensive collection of books in multiple formats: traditional print, large print, braille, and digital/audio options. Our 'Quiet Corner' is a dedicated low-sensory zone with noise-cancelling features and adjustable lighting. Staff members are trained in accessibility support and can assist with finding the perfect book in your preferred format. We host regular inclusive reading groups and author events with sign language interpreters. Visitors particularly enjoy our scented bookmarks that correspond to different genres!"
}, {
  id: "3",
  title: "Sustainable Fashion Workshop",
  storeName: "Adaptive Clothing",
  description: "Learn about sustainable fashion practices and how to upcycle your existing wardrobe items.",
  category: "Workshops",
  imageUrl: "/lovable-uploads/72f411e9-fdd4-4d19-8c4e-6ef7a54aa8e4.png",
  offer: "15% discount on workshop materials",
  experience: "Adaptive Clothing revolutionizes the shopping experience with fashion that truly works for everybody. Our store features extra-wide fitting rooms with grab bars, accessible mirrors, and adjustable lighting. All our clothing items incorporate innovative design elements like magnetic closures, elasticized waistbands, and sensory-friendly fabrics without tags. Our 'seated fashion' line is specifically designed for wheelchair users with longer backs on tops and special cut pants. We offer personal shopping assistants who understand various accessibility needs and can help find the perfect outfit. The store uses clear, simple signage with pictograms, and our staff are trained to provide descriptive information about colors, textures, and styles. We regularly host inclusive fashion shows featuring models with diverse abilities."
}, {
  id: "4",
  title: "Outdoor Photography Expedition",
  storeName: "Tech For All",
  description: "Join our guided photography walk through scenic locations. All skill levels welcome.",
  category: "Outdoors",
  imageUrl: "/lovable-uploads/b5e8ca1f-e525-41dc-8723-feefb1c729ac.png",
  giveaway: "Free photography guide e-book",
  experience: "Tech For All creates an environment where everyone can explore and learn about adaptive technology. Our store features demonstration stations where you can try various assistive technologies, from screen readers to adaptive gaming controllers. All display products are fully charged and ready to test, with clear, jargon-free instructions in multiple formats. Our staff are certified in accessibility training and can customize technology solutions for individual needs. We offer regular workshops on topics like 'Introduction to Voice Commands' and 'Making Your Smart Home Accessible.' The store layout includes tactile flooring to guide visitors with visual impairments, and all product information is available in multiple formats including braille, large print, and audio. We're particularly proud of our 'Tech Buddies' program, which pairs customers with knowledgeable staff for personalized shopping assistance."
}, {
  id: "5",
  title: "Local Food Tasting Tour",
  storeName: "Flavor Fusion",
  description: "Sample authentic local dishes from multiple vendors in one delicious guided tour.",
  category: "Food",
  imageUrl: "/lovable-uploads/16b37187-da46-434b-befd-c29214c59e46.png",
  offer: "10% off your next visit to any participating restaurant",
  giveaway: "Recipe booklet of featured dishes",
  experience: "Our food tours are designed to be inclusive and accommodating to various dietary needs and preferences. We offer clear allergen information for all food samples and can provide alternative options for those with specific dietary restrictions."
}];

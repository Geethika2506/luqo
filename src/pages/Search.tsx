
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock data for demonstration
  const mockStores = [
    { id: 1, name: 'AccessMart', location: 'Downtown', accessibility: ['Wheelchair Ramps', 'Braille Signage'] },
    { id: 2, name: 'InclusiveShop', location: 'Westside', accessibility: ['Hearing Loops', 'Service Animal Friendly'] },
    { id: 3, name: 'EqualAccess Store', location: 'Eastside', accessibility: ['Wide Aisles', 'Accessible Fitting Rooms'] },
    { id: 4, name: 'UniversalMart', location: 'Northside', accessibility: ['Accessible Restrooms', 'Visual Alarms'] },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    
    // Simple search implementation (case-insensitive partial match)
    const results = mockStores.filter(store => 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.accessibility.some(feature => 
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-montserrat">Search Accessible Stores</h1>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by store name, location, or accessibility feature"
                className="flex-grow font-montserrat"
              />
              <Button 
                type="submit"
                className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-montserrat"
              >
                Search
              </Button>
            </div>
          </form>
          
          {hasSearched && (
            <div>
              <h2 className="text-xl font-semibold mb-4 font-montserrat">
                {searchResults.length > 0 
                  ? `Search Results (${searchResults.length})` 
                  : 'No results found'}
              </h2>
              
              {searchResults.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map(store => (
                    <div key={store.id} className="border rounded-lg p-4 shadow-sm">
                      <h3 className="text-lg font-semibold font-montserrat">{store.name}</h3>
                      <p className="text-gray-600 font-montserrat">{store.location}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium font-montserrat">Accessibility Features:</p>
                        <ul className="text-sm list-disc list-inside mt-1">
                          {store.accessibility.map((feature: string, index: number) => (
                            <li key={index} className="font-montserrat">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        variant="outline"
                        className="mt-3 text-[#FF5722] border-[#FF5722] hover:bg-[#FF5722] hover:text-white font-montserrat"
                      >
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

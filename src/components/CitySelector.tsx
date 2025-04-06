
import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface CitySelectorProps {
  onChange?: (city: string) => void;
  className?: string;
}

const cities = [
  { id: 'nyc', name: 'New York' },
  { id: 'la', name: 'Los Angeles' },
  { id: 'chi', name: 'Chicago' },
  { id: 'hou', name: 'Houston' },
  { id: 'mia', name: 'Miami' },
  { id: 'sfo', name: 'San Francisco' },
  { id: 'sea', name: 'Seattle' },
  { id: 'bos', name: 'Boston' },
  { id: 'aus', name: 'Austin' },
  { id: 'den', name: 'Denver' },
];

const CitySelector: React.FC<CitySelectorProps> = ({ onChange, className }) => {
  const [city, setCity] = useState<string>('');

  const handleCityChange = (value: string) => {
    setCity(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <Select onValueChange={handleCityChange} value={city}>
        <SelectTrigger className="bg-white text-gray-600 rounded-full pl-3 pr-4 py-3 h-12 border-none shadow-md focus:ring-2 focus:ring-brand">
          <span className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-brand" />
            <SelectValue placeholder="Select your city" />
          </span>
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {cities.map((city) => (
            <SelectItem key={city.id} value={city.id}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CitySelector;

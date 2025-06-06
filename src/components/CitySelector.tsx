
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
        <SelectTrigger 
          className="
            bg-gradient-to-r from-white/95 to-white/90
            text-gray-600 rounded-xl pl-3 pr-4 py-3 h-12 
            border-none shadow-md focus:ring-2 focus:ring-brand
            bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
          >
          <span className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-brand" />
            <SelectValue placeholder="Select your city" />
          </span>
        </SelectTrigger>
        <SelectContent className="max-h-60 bg-white/95 backdrop-blur-sm">
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


import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  label, 
  isActive = false, 
  onClick,
  className
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2",
        isActive 
          ? "bg-brand text-white" 
          : "bg-gray-100 text-textPrimary hover:bg-gray-200",
        className
      )}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default CategoryButton;

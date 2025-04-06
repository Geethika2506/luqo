
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  label, 
  isActive = false, 
  onClick,
  className,
  icon
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 min-w-[120px] flex items-center justify-center gap-2",
        isActive 
          ? "bg-white text-brand shadow-md" 
          : "bg-white/90 text-textPrimary hover:bg-white",
        className
      )}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default CategoryButton;

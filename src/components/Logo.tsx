
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = "md",
  variant = "default"
}) => {
  const isMobile = useIsMobile();
  
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-center", 
        isMobile ? "text-center w-full" : "",
        className
      )} 
      aria-label="LUQO"
    >
      <img 
        src="/lovable-uploads/59989ead-9fdd-4939-ad23-589621189ed9.png" 
        alt="LUQO" 
        className={cn(
          sizeClasses[size],
          "object-contain"
        )}
      />
    </div>
  );
};

export default Logo;

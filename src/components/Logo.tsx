
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl"
  };

  return (
    <h1 
      className={cn(
        "font-bold tracking-tighter text-white animate-logo-glow font-montserrat", 
        sizeClasses[size],
        className
      )}
      aria-label="LUQO"
    >
      <span className="inline-block">L</span>
      <span className="inline-block">U</span>
      <span className="inline-block">Q</span>
      <span className="inline-block">O</span>
    </h1>
  );
};

export default Logo;

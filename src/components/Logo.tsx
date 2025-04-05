
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = "md"
}) => {
  const isMobile = useIsMobile();
  
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
        isMobile ? "text-center w-full" : "", 
        className
      )} 
      aria-label="LUQO"
    >
      <span className="inline-block text-center mx-[2px] my-0 px-0">LUQO</span>
      <span className="inline-block mx-[7px]"></span>
      <span className="inline-block mx-[7px]"></span>
      <span className="inline-block mx-0"></span>
    </h1>
  );
};

export default Logo;

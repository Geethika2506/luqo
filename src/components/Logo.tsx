
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
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl"
  };
  
  return (
    <h1 
      className={cn(
        "font-bold tracking-tight font-montserrat", 
        sizeClasses[size],
        variant === "default" ? "text-white" : "text-white", 
        isMobile ? "text-center w-full" : "", 
        className
      )} 
      aria-label="LUQO"
    >
      <div className="flex items-center justify-center space-x-1">
        {["L", "U", "Q", "O"].map((letter, index) => (
          <span 
            key={index} 
            className="inline-block bg-white text-center px-[3px] py-[1px]"
            style={{
              clipPath: index === 0 ? "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)" :
                      index === 3 ? "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)" :
                      "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </h1>
  );
};

export default Logo;

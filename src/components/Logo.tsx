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
  return <h1 className={cn("font-bold tracking-tight font-montserrat", sizeClasses[size], variant === "default" ? "text-white" : "text-white", isMobile ? "text-center w-full" : "", className)} aria-label="LUQO">
      <div className="flex items-center justify-center space-x-1 px-0 my-[16px] mx-0">
        {["L", "U", "Q", "O"].map((letter, index) => <span key={index} style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 800,
        letterSpacing: "-0.05em"
      }} className="text-xl font-extrabold px-0">
            {letter}
          </span>)}
      </div>
    </h1>;
};
export default Logo;
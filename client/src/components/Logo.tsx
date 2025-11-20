import logoImage from "@/components/images/ic_launcher.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "sm" }: LogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const textSizes = {
    sm: "text-md",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoImage} 
        alt="Innovacare Logo" 
        className={`${sizes[size]} rounded-md object-contain`}
      />
      <span className={`font-bold text-foreground ${textSizes[size]}`}>
      Innovacare
      </span>
    </div>
  );
}

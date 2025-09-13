import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const UniversalHoverEffect = ({
  children,
  className,
  hoverColor = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  hoverColor?: "primary" | "accent" | "secondary" | "blue" | "green" | "purple" | "red" | "yellow";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverClasses = (color: string) => {
    const colorMap = {
      primary: "from-primary-500/30 to-accent-500/30",
      accent: "from-accent-500/30 to-secondary-500/30", 
      secondary: "from-secondary-500/30 to-primary-500/30",
      blue: "from-blue-500/30 to-blue-600/30",
      green: "from-green-500/30 to-green-600/30",
      purple: "from-purple-500/30 to-purple-600/30",
      red: "from-red-500/30 to-red-600/30",
      yellow: "from-yellow-500/30 to-yellow-600/30",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div
      className={cn("relative group block h-full w-full cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className={cn(
              "absolute inset-0 h-full w-full bg-gradient-to-r backdrop-blur-sm block rounded-lg",
              getHoverClasses(hoverColor)
            )}
            layoutId={`universalHover-${Math.random()}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export const CardHoverWrapper = ({
  children,
  className,
  hoverColor = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  hoverColor?: "primary" | "accent" | "secondary" | "blue" | "green" | "purple" | "red" | "yellow";
}) => {
  return (
    <UniversalHoverEffect hoverColor={hoverColor} className={className}>
      {children}
    </UniversalHoverEffect>
  );
};

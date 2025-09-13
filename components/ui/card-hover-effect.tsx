import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  console.log("HoverEffect rendering with items:", items.length);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`${item?.link}-${idx}`}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => {
            console.log("Mouse enter on card:", idx);
            setHoveredIndex(idx);
          }}
          onMouseLeave={() => {
            console.log("Mouse leave on card:", idx);
            setHoveredIndex(null);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm block rounded-3xl"
                layoutId={`hoverBackground-${idx}`}
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
      <Card className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg">
        <CardTitle className="text-gray-800 font-bold tracking-wide text-lg">{item.title}</CardTitle>
        <CardDescription className="mt-4 text-gray-600 tracking-wide leading-relaxed text-sm">{item.description}</CardDescription>
      </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 group-hover:border-primary-500/50 transition-all relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide text-lg", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-neutral-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

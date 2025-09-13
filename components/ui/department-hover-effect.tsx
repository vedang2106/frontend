import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const DepartmentHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    color: string;
    issues: number;
    resolved: number;
    percentage: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`${item?.link}-${idx}`}
          className="relative group block h-full w-full cursor-pointer"
          onMouseEnter={() => {
            setHoveredIndex(idx);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm block rounded-lg"
                layoutId={`departmentHoverBackground-${idx}`}
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
          <DepartmentCard item={item} />
        </div>
      ))}
    </div>
  );
};

export const DepartmentCard = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    link: string;
    color: string;
    issues: number;
    resolved: number;
    percentage: number;
  };
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-4 overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20 group-hover:border-primary-500/50 transition-all relative z-20 shadow-lg"
      )}
    >
      <div className="relative z-50">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-800 text-sm">{item.title}</h4>
          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Issues</span>
            <span className="font-medium text-gray-800">{item.issues}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Resolved</span>
            <span className="font-medium text-green-600">{item.resolved}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${item.color}`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 text-right">
            {item.percentage}% resolved
          </div>
        </div>
      </div>
    </div>
  );
};

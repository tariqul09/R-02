import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  color?: string;
  height?: string;
  label?: string;
  sublabel?: string;
  className?: string;
}

const ProgressBar = ({
  percentage,
  color = "bg-primary",
  height = "h-2.5",
  label,
  sublabel,
  className,
}: ProgressBarProps) => {
  return (
    <div className={cn("space-y-1", className)}>
      {(label || sublabel) && (
        <div className="flex justify-between mb-1">
          {label && <span className="font-medium">{label}</span>}
          {sublabel && <span>{sublabel}</span>}
        </div>
      )}
      <div className={cn("w-full bg-gray-200 rounded-full", height)}>
        <motion.div
          className={cn(color, height, "rounded-full")}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

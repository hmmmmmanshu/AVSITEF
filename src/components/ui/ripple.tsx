import React from "react";
import { motion } from "framer-motion";

interface RippleProps {
  className?: string;
}

export const Ripple: React.FC<RippleProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-orange-500/20"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{
            scale: [0, 1.5, 2.5],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";

export const Ripple: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pulse-500/25"
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.6, 2.4], opacity: [0.5, 0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

export const StickyScroll = ({
  content,
  contentClassName,
  fullPage = false,
  heightClass,
}: {
  content: StickyItem[];
  contentClassName?: string;
  fullPage?: boolean;
  heightClass?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = breakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  const backgroundColors = ["#121212", "#1e1e1e", "#0f0f0f"]; // brand dark neutrals
  const linearGradients = [
    "linear-gradient(to bottom right, #f97316, #fdba74)", // pulse-500 -> pulse-300
    "linear-gradient(to bottom right, #ea580c, #fb923c)", // pulse-600 -> pulse-400
    "linear-gradient(to bottom right, #f97316, #ea580c)", // pulse blend
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const wrapperHeight = heightClass ?? (fullPage ? "h-screen" : "h-[24rem] sm:h-[30rem]");

  return (
    <motion.div
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className={cn("relative flex w-full justify-center space-x-6 overflow-y-auto rounded-none sm:rounded-md p-0 sm:p-10", wrapperHeight)}
      ref={ref}
    >
      <div className="relative flex items-start px-4 sm:px-6 w-full max-w-5xl">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-12 sm:my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="text-xl sm:text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="mt-4 sm:mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-24 sm:h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-6 hidden h-48 sm:h-60 w-64 sm:w-80 overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10 backdrop-blur lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};

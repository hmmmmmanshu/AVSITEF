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

  // Track viewport scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
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
    "linear-gradient(to bottom right, #f97316, #fdba74)",
    "linear-gradient(to bottom right, #ea580c, #fb923c)",
    "linear-gradient(to bottom right, #f97316, #ea580c)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // When using page scroll, give the section extra height to progress through cards
  const wrapperHeight = heightClass ?? (fullPage ? "h-screen" : "h-[200vh]");

  return (
    <motion.div
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className={cn("relative flex w-full justify-center space-x-6 rounded-none sm:rounded-md py-8 sm:py-12", wrapperHeight)}
      ref={ref}
    >
      <div className="relative flex items-start px-4 sm:px-6 w-full max-w-6xl">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 sm:my-24">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="text-2xl sm:text-3xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="mt-4 sm:mt-6 max-w-sm text-[15px] sm:text-base leading-relaxed text-slate-300"
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
          "sticky top-10 hidden h-56 sm:h-72 w-72 sm:w-80 overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10 backdrop-blur lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};

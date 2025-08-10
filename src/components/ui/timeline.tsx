import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline: React.FC<{ data: TimelineEntry[] }> = ({ data }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 10%", "end 50%"] });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-background" ref={containerRef}>
      <div ref={ref} className="relative max-w-6xl mx-auto pb-10 sm:pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 sm:pt-20 sm:gap-10">
            <div className="sticky z-40 top-24 self-start max-w-xs lg:max-w-sm sm:w-full">
              <div className="h-8 absolute left-3 w-8 rounded-full bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-muted border border-border" />
              </div>
              <h3 className="hidden sm:block text-2xl sm:pl-16 sm:text-5xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 sm:pl-4 w-full">
              <h3 className="sm:hidden block text-xl mb-3 text-left font-bold text-muted-foreground">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-muted to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-pulse-500 via-pulse-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

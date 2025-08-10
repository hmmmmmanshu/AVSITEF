import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

export type ParallaxProduct = {
  title: string;
  link: string;
  thumbnail: string;
};

export const HeroParallax: React.FC<{ products: ParallaxProduct[] }> = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 } as const;

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[180vh] sm:h-[240vh] py-16 sm:py-24 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d] bg-background"
    >
      <ParallaxHeader />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-20 mb-10 sm:mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 sm:mb-20 space-x-8 sm:space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const ParallaxHeader: React.FC = () => {
  return (
    <div className="max-w-6xl relative mx-auto py-8 sm:py-16 px-4 w-full left-0 top-0 text-center sm:text-left">
      <h2 className="text-2xl sm:text-5xl font-bold text-foreground">
        Built for founders who value clarity
      </h2>
      <p className="max-w-2xl text-sm sm:text-lg mt-4 sm:mt-6 text-muted-foreground">
        A minimalist, Apple-grade experience to showcase what you get in the diagnostic — without leakage.
      </p>
    </div>
  );
};

export const ProductCard: React.FC<{ product: ParallaxProduct; translate: MotionValue<number> }> = ({
  product,
  translate,
}) => {
  return (
    <motion.div style={{ x: translate }} whileHover={{ y: -12 }} className="group relative h-48 sm:h-96 w-64 sm:w-[30rem] shrink-0">
      <a href={product.link} onClick={(e) => e.preventDefault()} className="block">
        <img
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
          loading="lazy"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-80 bg-black/40 pointer-events-none rounded-lg"></div>
      <h3 className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 text-white text-sm sm:text-base">
        {product.title}
      </h3>
    </motion.div>
  );
};

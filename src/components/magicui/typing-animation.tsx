import React, { useEffect, useMemo, useRef, useState } from "react";

interface TypingAnimationProps {
  children: string;
  startOnView?: boolean;
  speedMs?: number;
  delayMs?: number;
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  children,
  startOnView = false,
  speedMs = 40,
  delayMs = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(!startOnView);
  const [visibleText, setVisibleText] = useState("");
  const text = useMemo(() => (children ?? "").toString(), [children]);

  useEffect(() => {
    if (!startOnView) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i += 1;
        setVisibleText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, speedMs);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [started, text, speedMs, delayMs]);

  return (
    <span ref={containerRef} className={className} aria-label={text}>
      {visibleText}
      <span className="inline-block w-[1ch] animate-pulse">|</span>
    </span>
  );
};

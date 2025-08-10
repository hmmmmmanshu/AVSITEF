"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Book your slot (₹499)",
    description:
      "Pick a convenient time and confirm with a small commitment fee that is credited to any sprint you join.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Book your slot
      </div>
    ),
  },
  {
    title: "Pre-call form (5 minutes)",
    description:
      "Share key metrics, goals, and links so we can diagnose quickly and spend the call on decisions, not digging.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "1-hour diagnostic on Zoom",
    description:
      "Live teardown of traction leaks, Q&A, and a personalized roadmap tailored to your current stage.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Live Diagnosis
      </div>
    ),
  },
  {
    title: "Action plan in 24h",
    description:
      "You receive a clear PDF with your Founder-Market-Fit score, GTM focus, and 14-day sprint plan.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Action plan PDF
      </div>
    ),
  },
  {
    title: "Credit to sprint",
    description:
      "Apply your ₹499 toward Validation, MVP, or GTM Sprint within 14 days if it is the right fit.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Sprint Credit
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;

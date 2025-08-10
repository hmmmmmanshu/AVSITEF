import React from "react";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "underline" | "highlight";
  color?: string; // hex or any valid CSS color
  className?: string;
}

export const Highlighter: React.FC<HighlighterProps> = ({
  children,
  action = "highlight",
  color = "#f97316", // pulse orange fallback
  className = "",
}) => {
  if (action === "underline") {
    return (
      <span
        className={className}
        style={{
          backgroundImage: `linear-gradient(to top, ${color}, ${color})`,
          backgroundPosition: "0 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 0.18em",
        }}
      >
        {children}
      </span>
    );
  }

  // highlight
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(transparent 60%, ${color} 60%)`,
        borderRadius: 2,
      }}
    >
      {children}
    </span>
  );
};


"use client";

import { useState } from "react";

type BouncyTextProps = {
  text: string;
  className?: string;
};

export default function BouncyText({
  text,
  className = "",
}: BouncyTextProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <span
      className={className}
      aria-label={text}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          onMouseEnter={() => setActiveIndex(index)}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : undefined,
            animation:
              activeIndex === index
                ? "letter-bounce 450ms ease-out"
                : "none",
          }}
        >
          {char}
        </span>
      ))}

      <style jsx>{`
        @keyframes letter-bounce {
          0% {
            transform: translateY(0);
          }
          35% {
            transform: translateY(-12px);
          }
          65% {
            transform: translateY(3px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
          }
        }
      `}</style>
    </span>
  );
}

"use client";

import { useState, useEffect } from "react";

interface RollingTextProps {
  words: string[];
  className?: string;
}

export default function TypeWriter({ words, className = "" }: RollingTextProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <span
        className={`inline-block transition-all duration-400 ease-out ${
          animate
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        {words[currentIdx]}
      </span>
    </span>
  );
}

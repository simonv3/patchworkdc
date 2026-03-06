"use client";

import React, { useState, useEffect } from "react";

type TickerProps = {
  messages: string[];
  intervalMs?: number;
  charDelayMs?: number;
  className?: string;
};

const Ticker: React.FC<TickerProps> = ({
  messages,
  intervalMs = 4000,
  charDelayMs = 50,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedChars, setDisplayedChars] = useState(0);
  const currentMessage = messages[currentIndex];
  const visibleText = currentMessage.slice(0, displayedChars);

  // Handle character-by-character display
  useEffect(() => {
    if (displayedChars < currentMessage.length) {
      const charTimer = setTimeout(() => {
        setDisplayedChars((prev) => prev + 1);
      }, charDelayMs);

      return () => clearTimeout(charTimer);
    } else {
      // Once message is fully displayed, wait for intervalMs before changing message
      const messageTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setDisplayedChars(0);
      }, intervalMs);

      return () => clearTimeout(messageTimer);
    }
  }, [displayedChars, currentMessage, charDelayMs, intervalMs, messages.length]);

  return (
    <div className={className}>
      {visibleText}
      {displayedChars < currentMessage.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

export default Ticker;

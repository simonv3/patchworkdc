"use client";

import DonateButton from "./DonateButton";
import EmailForm from "./EmailForm";
import React, { useState, useEffect } from "react";
import { formatCurrency, formatDate } from "@/app/lib/utils";
import { Artist, Gift } from "@/app/page";

const DonateFeed: React.FC<{
  artist: Artist;
  totalGifts?: number;
  gifts: Gift[];
}> = ({ artist, gifts, totalGifts = 0 }) => {
  const [displayedCount, setDisplayedCount] = useState(1);
  const [showFollowForm, setShowFollowForm] = useState(false);

  useEffect(() => {
    if (displayedCount >= gifts.length) return;

    const timer = setTimeout(() => {
      setDisplayedCount((prev) => prev + 1);
    }, 1000); // Add a new item every 1 second

    return () => clearTimeout(timer);
  }, [displayedCount, gifts.length]);

  const displayedGifts = gifts.slice(gifts.length - displayedCount);
  return (
    <div className="w-full flex flex-col items-stretch gap-3 mb-4">
      <DonateButton artist={artist}>Support</DonateButton>
      {!showFollowForm && (
        <button
          onClick={() => setShowFollowForm(!showFollowForm)}
          className="text-lg 
        px-6 
        py-3 
        bg-gray-200 
        rounded-full
        hover:bg-gray-300 
        text-foreground-default font-semibold shadow-md transition-colors 
        duration-200 focus:outline-none focus:ring-2 
        focus:ring-gray-400 focus:ring-opacity-50"
        >
          Follow
        </button>
      )}
      {showFollowForm && (
        <div className="bg-gray-50 rounded-lg p-4">
          <EmailForm
            endpoint="/api/follow"
            buttonText="Sign Me Up"
            emailPlaceholder="your@email.com"
            textareaPlaceholder="Tell us how you'd like to get involved..."
            successMessage="Thanks for signing up! We'll keep you updated on Patchwork's progress."
            onSuccess={() => setShowFollowForm(false)}
          />
        </div>
      )}
      {displayedGifts.length > 0 && (
        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Recent Gifts</h3>
          <ul className="space-y-3 relative">
            {displayedGifts.map((gift, idx) => (
              <li
                key={gift.datePurchased}
                className="bg-white rounded p-3 shadow flex flex-col z-1"
                style={{
                  animation: `fadeIn 0.5s ease-out forwards`,
                }}
              >
                <span>
                  <span className="font-semibold">Someone</span> donated{" "}
                  <span className="text-primary-default font-bold">
                    {formatCurrency(
                      gift.amount as number,
                      artist.user.currency,
                    )}
                  </span>
                </span>
                {gift.message && (
                  <span className="text-foreground-light text-sm mt-1">
                    "{gift.message}"
                  </span>
                )}
                <span className="text-sm text-foreground-light">
                  {formatDate({ date: gift.datePurchased })}
                </span>
              </li>
            ))}
            {totalGifts > gifts.length && (
              <li className="text-foreground-light text-sm">
                and {totalGifts - gifts.length} more gifts...
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DonateFeed;

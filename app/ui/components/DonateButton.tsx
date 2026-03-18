"use client";

import React from "react";
import Modal from "@/app/ui/components/Modal";
import AmountButtons from "./AmountButtons";
import { Artist } from "@/app/page";

type DonateButtonProps = {
  children?: React.ReactNode;
  artist: Artist;
};

const DonateButton: React.FC<DonateButtonProps> = ({ children, artist }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInterestedInMembership, setIsMembershipInterested] =
    React.useState(false);
  const [donationAmount, setDonationAmount] = React.useState<number>(100);
  const [message, setMessage] = React.useState<string>("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onConfirmation = React.useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artistId: artist.id,
        price: Number(donationAmount) * 100,
        message,
        // email,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Donation failed:", error);
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    window.location.assign(data.redirectUrl);
    setIsOpen(false);
    setIsLoading(false);
  }, [artist, message, donationAmount]);

  return (
    <>
      <button
        type="button"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="
        px-6 
        py-4 
        bg-primary-default 
        text-lg
        hover:bg-primary-dark 
        rounded-full
        text-white font-semibold shadow-md transition-colors 
        duration-200 focus:outline-none focus:ring-2 
        focus:ring-pink-400 focus:ring-opacity-50"
        onClick={toggleModal}
      >
        {children || "Donate"}
      </button>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        onConfirm={onConfirmation}
        confirmText="Support us!"
        isLoading={isLoading}
      >
        {/* <p>
          Want to make a 501c3 tax-deductible donation? Please give to our
          partner organization,{" "}
          <a
            href="https://www.every.org/ward-2-mutual-aid"
            target="_blank"
            className="text-primary-default underline"
            rel="noopener noreferrer"
          >
            Ward 2 Mutual Aid ➔
          </a>
          .
        </p> */}
        {/* <p>
          If you give through Ward 2 Mutual Aid, Patchwork receives 90% of the
          gift. If you give directly to us, we receive 97%.
        </p>
        <hr /> */}
        <AmountButtons
          amount={donationAmount}
          setAmount={setDonationAmount}
          currency={artist.user.currency}
        />
        <div>
          <label className="flex gap-1 items-center">
            <input
              type="checkbox"
              checked={isInterestedInMembership}
              onChange={(e) => setIsMembershipInterested(e.target.checked)}
            />
            Are you interested in becoming a <strong>monthly supporter</strong>?
          </label>
        </div>
        <div>
          {/* <p className="text-sm text-foreground-light mt-2">
            {artist.defaultPlatformFee ?? 10}% (
            {formatCurrency(
              donationAmount * (artist.defaultPlatformFee ?? 10),
              artist.user.currency,
            )}
            ) of your donation goes towards{" "}
            <a
              href="https://mirlo.space/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mirlo's
            </a>{" "}
            operating costs.
          </p> */}
        </div>
        <div>
          <label htmlFor="message" className="block">
            Leave a message for us (optional):
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            placeholder="Letsgoooo!"
          ></textarea>
        </div>
        <div>
          <p className="text-sm mt-2">
            By clicking "Support us!", you agree to the Mirlo{" "}
            <a
              href="https://mirlo.space/pages/terms"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      </Modal>
    </>
  );
};

export default DonateButton;

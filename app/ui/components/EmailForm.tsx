"use client";

import React, { useState, useCallback } from "react";

type EmailFormProps = {
  endpoint: string;
  buttonText?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  emailPlaceholder?: string;
  textareaPlaceholder?: string;
  successMessage?: string;
};

const EmailForm: React.FC<EmailFormProps> = ({
  endpoint,
  buttonText = "Submit",
  onSuccess,
  onError,
  emailPlaceholder = "your@email.com",
  textareaPlaceholder = "Tell us what's on your mind...",
  successMessage = "Thank you! We'll be in touch soon.",
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setResponseMessage("");
      setIsError(false);

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to submit form");
        }

        setResponseMessage(successMessage);
        setEmail("");
        setMessage("");
        onSuccess?.();
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        setResponseMessage(errorMessage);
        setIsError(true);
        onError?.(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [email, message, endpoint, successMessage, onSuccess, onError],
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-semibold text-foreground-default"
        >
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailPlaceholder}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-default focus:ring-opacity-50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-semibold text-foreground-default"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={textareaPlaceholder}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-default focus:ring-opacity-50 resize-none"
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 bg-primary-default hover:bg-primary-dark disabled:bg-gray-400 text-white font-semibold rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-default focus:ring-opacity-50"
      >
        {isLoading ? "Submitting..." : buttonText}
      </button>

      {responseMessage && (
        <div
          className={`p-3 rounded-lg text-sm ${
            isError ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
          }`}
        >
          {responseMessage}
        </div>
      )}
    </form>
  );
};

export default EmailForm;

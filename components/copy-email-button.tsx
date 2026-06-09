"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL_ADDRESS = "gberevbiepeterwilliam@gmail.com";
const RESET_DELAY = 2000;

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setCopied(false);
      resetTimerRef.current = null;
    }, RESET_DELAY);
  };

  return (
    <button
      className="contact-email-button"
      type="button"
      onClick={copyEmail}
      aria-label={`Copy ${EMAIL_ADDRESS} to clipboard`}
      aria-live="polite"
    >
      {copied ? "COPIED" : "EMAIL"}
    </button>
  );
}

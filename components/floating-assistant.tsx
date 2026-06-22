"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const MESSAGE_PLACEHOLDER = "Tell me a little about what you have in mind...";

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setStatus("error");
      setError("Please write a message before sending.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/portfolio-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        throw new Error("Message request failed.");
      }

      setMessage("");
      setHoneypot("");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Message could not be sent. Please try again.");
    }
  };

  return (
    <div className="floating-assistant">
      <div
        className={`assistant-panel${open ? " open" : ""}`}
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby="assistant-message-title"
      >
        <div className="assistant-heading">
          <div className="assistant-title" id="assistant-message-title">
            Send a message
          </div>
          <button
            className="assistant-close"
            type="button"
            aria-label="Close message form"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <form className="assistant-message-form" onSubmit={submitMessage}>
          <label className="sr-only" htmlFor="assistant-message">
            Message
          </label>
          <textarea
            className="assistant-message-field"
            id="assistant-message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              if (status !== "sending") {
                setStatus("idle");
                setError("");
              }
            }}
            placeholder={MESSAGE_PLACEHOLDER}
            rows={5}
            disabled={status === "sending"}
          />
          <label className="assistant-honeypot" htmlFor="assistant-website">
            Website
          </label>
          <input
            className="assistant-honeypot"
            id="assistant-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
          <div className="assistant-form-footer">
            <p className="assistant-form-status" aria-live="polite">
              {status === "sending" ? "Sending..." : null}
              {status === "success" ? "Message sent." : null}
              {status === "error" ? error : null}
            </p>
            <button
              className="assistant-send"
              type="submit"
              disabled={status === "sending" || !message.trim()}
            >
              {status === "sending" ? "Sending" : "Send"}
            </button>
          </div>
        </form>
      </div>
      <button
        className="assistant-trigger"
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((visible) => !visible)}
      >
        Play?
      </button>
    </div>
  );
}

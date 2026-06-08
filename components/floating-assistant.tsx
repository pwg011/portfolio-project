"use client";

import { useState } from "react";

const options = [
  ["Surprise me", "→"],
  ["Quick game", "◇"],
  ["Tiny challenge", "＋"],
  ["Pick a project for me", "↝"],
];

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-assistant">
      <div className={`assistant-panel${open ? " open" : ""}`}>
        <div className="assistant-heading">
          <div className="assistant-title">
            <span aria-hidden="true">◇</span>
            System Assistant
          </div>
          <button
            className="assistant-close"
            type="button"
            aria-label="Close assistant"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="assistant-options">
          {options.map(([label, icon]) => (
            <button className="assistant-option" type="button" key={label}>
              {label}
              <span aria-hidden="true">{icon}</span>
            </button>
          ))}
        </div>
      </div>
      <button
        className="assistant-trigger"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((visible) => !visible)}
      >
        Play?
      </button>
    </div>
  );
}

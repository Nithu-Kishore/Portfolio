"use client";

import { toast } from "sonner";

export function CopyEmailIconButton({ email }: { email: string }) {
  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      toast("Email copied");
    } catch {
      toast(email);
    }
  }

  return (
    <button type="button" className="icon-btn" aria-label="Copy email address" onClick={handleClick}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h9" />
      </svg>
    </button>
  );
}

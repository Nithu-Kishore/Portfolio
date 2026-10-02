"use client";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CopyEmailButton({
  email,
  className,
  children = "Copy email",
}: {
  email: string;
  className?: string;
  children?: React.ReactNode;
}) {
  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      toast("Email copied");
    } catch {
      toast(email);
    }
  }

  return (
    <button type="button" className={cn("btn btn-secondary", className)} onClick={handleClick}>
      {children}
    </button>
  );
}

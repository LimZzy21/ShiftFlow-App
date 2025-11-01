import * as React from "react";
import { cn } from "@/shared/lib/styles/cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full px-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/60",
        "shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] backdrop-blur-lg transition-all duration-300 ease-out",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:shadow-[0_0_15px_rgba(56,189,248,0.35)]",

        "hover:bg-white/15 hover:border-white/30",

        "disabled:opacity-50 disabled:cursor-not-allowed",

        className,
      )}
      {...props}
    />
  );
}

export { Input };

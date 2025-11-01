import * as React from "react";
import { cn } from "@/shared/lib/styles/cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-[120px] resize-none rounded-xl px-4 py-4 text-base text-white md:text-sm",
        "border border-white/20 bg-white/10 backdrop-blur-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]",
        "placeholder:text-white/50 selection:bg-fuchsia-500/30 selection:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/50 focus-visible:border-fuchsia-400/40 focus-visible:shadow-[0_0_15px_rgba(232,121,249,0.35)]",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/40 aria-invalid:shadow-[0_0_10px_rgba(239,68,68,0.5)]",
        "hover:bg-white/15 hover:border-white/30 transition-all duration-300 ease-out",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "@/shared/lib";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative size-5 shrink-0 rounded-md border transition-all duration-300 outline-none",
        "border-white/25 bg-white/10 backdrop-blur-sm shadow-[inset_0_0_6px_rgba(255,255,255,0.05)]",
        "hover:border-fuchsia-400/70 focus-visible:ring-[3px] focus-visible:ring-fuchsia-400/40 focus-visible:border-fuchsia-400/80",
        "data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-fuchsia-600 data-[state=checked]:to-violet-600 data-[state=checked]:border-fuchsia-500",
        "data-[state=checked]:shadow-[0_0_10px_rgba(232,121,249,0.4)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "grid place-content-center text-white transition-transform duration-200",
          "data-[state=checked]:scale-100 data-[state=unchecked]:scale-0",
        )}
      >
        <CheckIcon className="size-3.5 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

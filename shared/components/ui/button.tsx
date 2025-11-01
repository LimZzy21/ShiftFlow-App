import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide",
    "transition-all duration-300 select-none outline-none focus-visible:ring-[3px]",
    "disabled:pointer-events-none disabled:opacity-50",
    "backdrop-blur-md border border-transparent",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: cn(
          "relative bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_0_12px_rgba(232,121,249,0.4)]",
          "hover:shadow-[0_0_20px_rgba(232,121,249,0.6)] hover:scale-[1.02]",
          "focus-visible:ring-fuchsia-400/50",
        ),

        destructive: cn(
          "bg-red-600/90 text-white border border-red-400/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]",
          "hover:bg-red-600 hover:shadow-[0_0_18px_rgba(239,68,68,0.5)]",
          "focus-visible:ring-red-400/50",
        ),

        outline: cn(
          "border border-white/20 bg-white/10 text-white/90 backdrop-blur-xl",
          "hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]",
          "focus-visible:ring-fuchsia-300/50",
        ),

        secondary: cn(
          "bg-violet-800/50 text-violet-100 border border-white/10",
          "hover:bg-violet-700/60 hover:text-white",
          "focus-visible:ring-violet-300/40",
        ),

        ghost: cn(
          "bg-transparent text-violet-200 hover:text-fuchsia-300 hover:bg-white/10",
          "focus-visible:ring-fuchsia-400/50",
        ),

        // 🔗 Посилання
        link: cn(
          "text-fuchsia-300 underline underline-offset-4 decoration-fuchsia-400/50 hover:text-fuchsia-200",
        ),
      },

      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

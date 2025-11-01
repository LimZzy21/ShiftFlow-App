"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/shared/lib";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-14  w-fit items-center justify-center rounded-lg p-[3px]",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex flex-1 items-center justify-center min-w-28 gap-2 px-3 py-4 text-sm font-medium transition-all duration-200 ease-out rounded-xl select-none",
        "backdrop-blur-lg bg-white/10 border border-white/10",
        "text-violet-400",
        "data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-700 data-[state=active]:shadow-[0_0_10px_rgba(232,121,249,0.4)] data-[state=active]:ring-1 data-[state=active]:ring-fuchsia-400/40",
        "focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 focus-visible:outline-none",
        "[&_svg]:shrink-0 [&_svg]:size-4",
        "disabled:opacity-50 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

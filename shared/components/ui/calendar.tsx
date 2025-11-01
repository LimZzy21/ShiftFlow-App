"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/shared/lib";
import { Button, buttonVariants } from "@/shared/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-violet-900/70 before:to-fuchsia-900/70",
        "before:blur-2xl before:opacity-70 before:-z-10",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/70 to-fuchsia-900/70" />
      <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)]" />
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "relative z-10 bg-white/5 backdrop-blur-g border border-white/10 rounded-2xl",
          "shadow-[0_0_30px_rgba(139,92,246,0.3)] p-4 text-white transition-all duration-300",
          "group/calendar [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
          className,
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString("default", { month: "short" }),
          ...formatters,
        }}
        classNames={{
          root: cn("w-fit", defaultClassNames.root),
          months: cn(
            "flex flex-col md:flex-row gap-6 relative",
            defaultClassNames.months,
          ),
          month: cn("flex flex-col w-full gap-3", defaultClassNames.month),

          nav: cn(
            "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
            "text-violet-200",
            defaultClassNames.nav,
          ),
          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            "size-(--cell-size) p-0 select-none rounded-full",
            "hover:bg-white/10 text-violet-300 hover:text-fuchsia-300 transition-colors",
            "aria-disabled:opacity-50",
            defaultClassNames.button_previous,
          ),
          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            "size-(--cell-size) p-0 select-none rounded-full",
            "hover:bg-white/10 text-violet-300 hover:text-fuchsia-300 transition-colors",
            "aria-disabled:opacity-50",
            defaultClassNames.button_next,
          ),

          month_caption: cn(
            "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
            "text-center text-lg font-semibold text-fuchsia-200 tracking-wide drop-shadow-[0_0_8px_rgba(232,121,249,0.4)]",
            defaultClassNames.month_caption,
          ),

          dropdowns: cn(
            "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5  font-ubuntu",
            defaultClassNames.dropdowns,
          ),
          dropdown_root: cn(
            "relative rounded-md border border-white/20 shadow-xs  font-ubuntu",
            "has-focus:border-fuchsia-400/40 has-focus:ring-fuchsia-400/40 has-focus:ring-[3px]",
            defaultClassNames.dropdown_root,
          ),
          dropdown: cn(
            "absolute bg-popover inset-0 opacity-0 font-ubuntu",
            defaultClassNames.dropdown,
          ),
          caption_label: cn(
            "select-none font-medium",
            captionLayout === "label"
              ? "text-sm text-violet-100"
              : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
            defaultClassNames.caption_label,
          ),

          table: "w-full border-collapse",

          weekdays: cn("flex", defaultClassNames.weekdays),
          weekday: cn(
            "text-violet-300/80 rounded-md flex-1 font-medium text-[0.8rem] select-none uppercase tracking-wide",
            defaultClassNames.weekday,
          ),

          week: cn("flex w-full mt-2", defaultClassNames.week),
          week_number_header: cn(
            "select-none w-(--cell-size)",
            defaultClassNames.week_number_header,
          ),
          week_number: cn(
            "text-[0.8rem] select-none text-muted-foreground",
            defaultClassNames.week_number,
          ),

          day: cn(
            "relative w-full h-full p-0 text-center group/day aspect-square select-none",
            props.showWeekNumber
              ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
              : "[&:first-child[data-selected=true]_button]:rounded-l-md",
            "[&:last-child[data-selected=true]_button]:rounded-r-md",
            defaultClassNames.day,
          ),

          range_start: cn(
            "rounded-l-md bg-fuchsia-500/70 text-white",
            defaultClassNames.range_start,
          ),
          range_middle: cn(
            "rounded-none bg-fuchsia-500/30 text-white/90",
            defaultClassNames.range_middle,
          ),
          range_end: cn(
            "rounded-r-md bg-fuchsia-500/70 text-white",
            defaultClassNames.range_end,
          ),

          today: cn(
            "border border-fuchsia-300 text-fuchsia-200 font-semibold",
            "shadow-[0_0_10px_rgba(232,121,249,0.3)]",
            "data-[selected=true]:rounded-none",
            defaultClassNames.today,
          ),

          outside: cn(
            "text-white/30 aria-selected:text-white/30",
            defaultClassNames.outside,
          ),
          disabled: cn("text-white/40 opacity-50", defaultClassNames.disabled),
          hidden: cn("invisible", defaultClassNames.hidden),

          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          Chevron: ({ className, orientation, ...props }) => {
            const Icon =
              orientation === "left"
                ? ChevronLeftIcon
                : orientation === "right"
                  ? ChevronRightIcon
                  : ChevronDownIcon;
            return (
              <Icon
                className={cn("size-4 text-fuchsia-200", className)}
                {...props}
              />
            );
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex size-(--cell-size) items-center justify-center text-center">
                  {children}
                </div>
              </td>
            );
          },
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-ubuntu",
        "rounded-xl text-violet-100 transition-all duration-200",

        "hover:bg-fuchsia-500/20 hover:text-white/90",
        "group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-fuchsia-400/50 group-data-[focused=true]/day:border-fuchsia-400/50",
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",

        "data-[selected-single=true]:bg-fuchsia-500/60 data-[selected-single=true]:text-white",
        "data-[selected-single=true]:shadow-[0_0_10px_rgba(232,121,249,0.35)]",

        "data-[range-middle=true]:bg-fuchsia-500/30 data-[range-middle=true]:text-white/90",
        "data-[range-start=true]:bg-fuchsia-500/70 data-[range-start=true]:text-white",
        "data-[range-end=true]:bg-fuchsia-500/70 data-[range-end=true]:text-white",
        "data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md",
        "data-[range-middle=true]:rounded-none",
        "data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md",

        "data-[today=true]:border data-[today=true]:border-fuchsia-400/50",

        "[&>span]:text-xs [&>span]:opacity-80",

        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

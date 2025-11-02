"use client";
import { useField } from "formik";
import { useState } from "react";
import {
  Button,
  FormInput,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  FormLabel,
} from "@/shared/components/ui";
import { ChevronDownIcon } from "lucide-react";

type DeadlinePickerProps = React.ComponentPropsWithoutRef<typeof Calendar> & {
  label?: string;
  dateName: string;
  timeName: string;
};

export function DeadlinePicker({
  dateName,
  timeName,
  label,
}: DeadlinePickerProps) {
  const [dateField, metaDate, dateHelpers] = useField(dateName);
  const [_, metaTime, timeHelpers] = useField(timeName);
  const hasError =
    (metaDate.touched && !!metaDate.error) ||
    (metaTime.touched && !!metaTime.error);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 z-20">
      {label && <FormLabel label={label} />}
      <div className="flex gap-3 justify-between max-w-[calc(100%-36px)] w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="w-[calc(80%)]" asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="justify-between font-normal "
            >
              {dateField.value
                ? new Date(dateField.value).toLocaleDateString()
                : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 bg-transparent border-0"
            align="start"
          >
            <Calendar
              mode="single"
              captionLayout="dropdown"
              onSelect={(date) => {
                dateHelpers.setValue(date ? date.toISOString() : null);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>

        <FormInput
          type="time"
          name={timeName}
          id="time-picker"
          onChange={(e) => timeHelpers.setValue(e.target.value)}
          step="0"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none "
        />
      </div>
      {hasError && (
        <p className="text-sm text-red-500 mt-1">
          {metaDate.error || metaTime.error}
        </p>
      )}
    </div>
  );
}

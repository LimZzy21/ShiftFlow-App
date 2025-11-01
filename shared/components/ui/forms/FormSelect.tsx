"use client";

import { useField } from "formik";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/shared/components/ui/select";
import { cn } from "@/shared/lib";
import { FormLabel } from "@/shared/components/ui/forms/FormLabel";
import { SelectValue } from "@radix-ui/react-select";

interface FormSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: { value: string | null; label: string }[];
  className?: string;
  defaultValue?: string;
}

export function FormSelect({
  name,
  label,
  placeholder = "Select...",
  options,
  className,
}: FormSelectProps) {
  const [_, meta, helpers] = useField(name);
  const hasError = meta.touched && !!meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && <FormLabel label={label} hasError={hasError} name={name} />}

      <Select onValueChange={(value) => helpers.setValue(value)}>
        <SelectTrigger
          className={cn(
            "w-full justify-between text-violet-200 bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg shadow-[0_0_10px_rgba(139,92,246,0.25)] focus-visible:ring-2 focus-visible:ring-fuchsia-400/50 transition-all duration-300",
            hasError &&
              "border-red-500/60 focus-visible:ring-red-500/50 text-red-300",
            className,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.label} value={opt.value as string}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasError && (
        <p className="text-sm text-red-500 mt-1 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]">
          {meta.error}
        </p>
      )}
    </div>
  );
}

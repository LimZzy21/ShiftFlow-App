"use client";

import { useField } from "formik";
import { cn } from "@/shared/lib/styles/cn";
import { FormLabel } from "@/shared/components/ui/forms/FormLabel";
import { FormError } from "@/shared/components/ui/forms/FormError";
import { Textarea } from "@/shared/components/ui";

interface FormInputProps extends React.ComponentProps<typeof Textarea> {
  name: string;
  label?: string;
}

export function FormTextarea({
  name,
  label,
  className,
  ...props
}: FormInputProps) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && !!meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && <FormLabel label={label} hasError={hasError} name={name} />}

      <Textarea
        id={name}
        {...field}
        {...props}
        aria-invalid={hasError}
        className={cn("transition-all duration-300", hasError && className)}
      />

      {hasError && <FormError error={meta.error} />}
    </div>
  );
}

"use client";

import { useField } from "formik";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { FormLabel } from "@/shared/components/ui/forms/FormLabel";

interface FormCheckboxProps {
  name: string;
  label?: string;
  helperText?: string;
}

export function FormCheckbox({ name, label, helperText }: FormCheckboxProps) {
  const [field, _, helpers] = useField({ name, type: "checkbox" });

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={name}
        checked={!!field.value}
        onCheckedChange={(checked) => helpers.setValue(checked)}
      />

      {label && <FormLabel label={label} name={name} />}

      {helperText && (
        <p className="text-xs text-violet-200/60 mt-1">{helperText}</p>
      )}
    </div>
  );
}

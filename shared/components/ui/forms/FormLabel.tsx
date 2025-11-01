import { cn } from "@/shared/lib";

interface FormLabelProps {
  label: string;
  hasError?: boolean;
  name?: string;
}

export const FormLabel = ({ label, hasError, name }: FormLabelProps) => {
  return (
    <label
      htmlFor={name}
      className={cn(
        "text-sm font-semibold tracking-wide transition-colors duration-200",
        hasError
          ? "text-red-600 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
          : "text-violet-300",
      )}
    >
      {label}
    </label>
  );
};

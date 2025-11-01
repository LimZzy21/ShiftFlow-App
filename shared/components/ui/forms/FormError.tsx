interface FormErrorProps {
  error: string | undefined;
}

export const FormError = ({ error }: FormErrorProps) => {
  return (
    <p className="text-sm text-red-600  mt-1 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]">
      {error}
    </p>
  );
};

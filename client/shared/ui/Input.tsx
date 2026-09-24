import { InputHTMLAttributes } from "react";
import FormField from "./FormField";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
};

export default function Input({ label, name, required, error, hint, className, ...rest }: InputProps) {
  return (
    <FormField label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <input
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/40 ${
          error
            ? "border-rose-400 focus:border-rose-500"
            : "border-rose-100 focus:border-rose-400"
        } ${className ?? ""}`}
        {...rest}
      />
    </FormField>
  );
}

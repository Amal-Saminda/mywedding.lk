import { TextareaHTMLAttributes } from "react";
import FormField from "./FormField";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
};

export default function Textarea({
  label,
  name,
  required,
  error,
  hint,
  className,
  rows = 3,
  ...rest
}: TextareaProps) {
  return (
    <FormField label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full resize-none rounded-lg border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/40 ${
          error
            ? "border-rose-400 focus:border-rose-500"
            : "border-rose-100 focus:border-rose-400"
        } ${className ?? ""}`}
        {...rest}
      />
    </FormField>
  );
}

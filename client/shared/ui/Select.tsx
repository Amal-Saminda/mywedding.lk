import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import FormField from "./FormField";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
  placeholder?: string;
  options: string[];
};

export default function Select({
  label,
  name,
  required,
  error,
  hint,
  placeholder = "Select an option",
  options,
  className,
  ...rest
}: SelectProps) {
  return (
    <FormField label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <div className="relative">
        <select
          id={name}
          name={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full appearance-none rounded-lg border bg-surface px-4 py-2.5 pr-10 text-sm text-ink outline-none transition-colors ${
            error
              ? "border-rose-400 focus:border-rose-500"
              : "border-rose-100 focus:border-rose-400"
          } ${className ?? ""}`}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft/60"
        />
      </div>
    </FormField>
  );
}

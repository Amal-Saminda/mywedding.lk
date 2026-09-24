"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormField from "./FormField";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
};

export default function PasswordInput({
  label,
  name,
  required,
  error,
  hint,
  className,
  ...rest
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full rounded-lg border bg-surface px-4 py-2.5 pr-11 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/40 ${
            error
              ? "border-rose-400 focus:border-rose-500"
              : "border-rose-100 focus:border-rose-400"
          } ${className ?? ""}`}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft/60 transition-colors hover:text-plum"
        >
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </FormField>
  );
}

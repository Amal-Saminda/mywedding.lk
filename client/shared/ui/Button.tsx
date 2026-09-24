import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-rose-plum text-white hover:opacity-90 disabled:opacity-40",
  secondary: "border border-plum text-plum hover:bg-plum hover:text-white disabled:opacity-40",
  ghost: "text-ink-soft hover:text-plum disabled:opacity-40",
};

export default function Button({ variant = "primary", className, ...rest }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-pill px-6 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className ?? ""}`}
      {...rest}
    />
  );
}

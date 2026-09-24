import FormField from "./FormField";

type SegmentedControlProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function SegmentedControl({
  label,
  name,
  required,
  error,
  options,
  value,
  onChange,
}: SegmentedControlProps) {
  return (
    <FormField label={label} htmlFor={name} required={required} error={error}>
      <div role="radiogroup" aria-label={label} id={name} className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option)}
              className={`rounded-pill border px-5 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-transparent bg-rose-plum text-white"
                  : "border-rose-100 bg-surface text-ink-soft hover:border-rose-300"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </FormField>
  );
}

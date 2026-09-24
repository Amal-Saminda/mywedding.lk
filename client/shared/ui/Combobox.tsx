"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import FormField from "./FormField";

type ComboboxProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

/** A type-to-filter select. Unlike a native <select>, this scales to a long
 *  option list (e.g. hundreds of towns) without forcing the user to scroll —
 *  and because selection only happens by picking a listed item, the stored
 *  value stays one of the controlled options, which keeps later filtering /
 *  matching on that field reliable. */
export default function Combobox({
  label,
  name,
  required,
  error,
  hint,
  placeholder = "Type to search…",
  options,
  value,
  onChange,
}: ComboboxProps) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setQuery(value), [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setQuery(value); // revert stray typing if nothing was picked
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((option) => option.toLowerCase().includes(q));
  }, [query, options]);

  function selectOption(option: string) {
    onChange(option);
    setQuery(option);
    setOpen(false);
  }

  function clear() {
    onChange("");
    setQuery("");
  }

  return (
    <FormField label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <div ref={containerRef} className="relative">
        <input
          id={name}
          name={name}
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-invalid={!!error}
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          placeholder={placeholder}
          className={`w-full rounded-lg border bg-surface px-4 py-2.5 pr-16 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/40 ${
            error ? "border-rose-400 focus:border-rose-500" : "border-rose-100 focus:border-rose-400"
          }`}
        />
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {value && (
            <button
              type="button"
              onClick={clear}
              aria-label="Clear selection"
              className="text-ink-soft/50 transition-colors hover:text-plum"
            >
              <X size={14} />
            </button>
          )}
          <ChevronDown size={16} className="text-ink-soft/50" />
        </div>

        {open && (
          <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-rose-100 bg-surface py-1 shadow-lift">
            {filtered.length > 0 ? (
              filtered.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()} // keep focus so blur doesn't beat the click
                    onClick={() => selectOption(option)}
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-blush ${
                      option === value ? "bg-rose-50 font-semibold text-rose-600" : "text-ink"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-ink-soft/70">No matching town</li>
            )}
          </ul>
        )}
      </div>
    </FormField>
  );
}

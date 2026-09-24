"use client";

import { useRef, useState } from "react";
import { Camera, X } from "lucide-react";
import Avatar from "./Avatar";

type AvatarUploadProps = {
  name: string;
  initialSrc?: string | null;
  onChange?: (file: File | null) => void;
};

const MAX_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

/** Lets a member add, replace, or remove their profile photo.
 *  Falls back to the monogram Avatar when no photo is set. */
export default function AvatarUpload({ name, initialSrc = null, onChange }: AvatarUploadProps) {
  const [preview, setPreview] = useState<string | null>(initialSrc);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File | undefined) {
    setError(null);
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Please use a JPG, PNG, or WEBP photo.");
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Photo must be under ${MAX_SIZE_MB}MB.`);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);
  }

  function handleRemove() {
    setPreview(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
    onChange?.(null);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <Avatar src={preview} name={name} size={112} />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Add profile photo"
          className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white shadow-card transition-colors hover:bg-rose-600"
        >
          <Camera size={16} />
        </button>
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Remove profile photo"
            className="absolute -top-1 -left-1 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white shadow-card transition-colors hover:bg-ink-soft"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="text-sm font-medium text-rose-600 hover:text-rose-700"
      >
        {preview ? "Change photo" : "Add profile photo"}
      </button>

      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}

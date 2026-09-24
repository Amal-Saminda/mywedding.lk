import Image from "next/image";

type AvatarProps = {
  src?: string | null;
  name: string;
  size?: number;
  ring?: boolean;
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Displays a member's photo when available, otherwise a monogram
 *  drawn from their name — never a generic placeholder silhouette. */
export default function Avatar({ src, name, size = 96, ring = true }: AvatarProps) {
  const dimension = { width: size, height: size };

  return (
    <div
      style={dimension}
      className={`relative shrink-0 overflow-hidden rounded-full bg-plum ${
        ring ? "ring-2 ring-gold ring-offset-2 ring-offset-surface" : ""
      }`}
    >
      {src ? (
        <Image src={src} alt={name} fill className="object-cover" sizes={`${size}px`} />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center font-display font-semibold text-white"
          style={{ fontSize: size * 0.36 }}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}

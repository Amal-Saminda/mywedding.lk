import { Briefcase, MapPin, Play } from "lucide-react";
import Avatar from "../ui/Avatar";

export type Profile = {
  id: string;
  name: string;
  age: number;
  profession: string;
  location: string;
  photoUrl?: string | null;
};

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="flex flex-col items-center rounded-card border border-rose-100 bg-surface p-5 text-center shadow-card transition-shadow hover:shadow-lift">
      <Avatar src={profile.photoUrl} name={profile.name} size={88} />

      <h3 className="mt-3 font-display text-base font-semibold text-plum">
        {profile.name}
      </h3>

      <dl className="mt-2 flex flex-col gap-1 text-xs text-ink-soft">
        <div className="flex items-center justify-center gap-3">
          <span>{profile.age} yrs</span>
          <span className="flex items-center gap-1">
            <Briefcase size={12} /> {profile.profession}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MapPin size={12} /> {profile.location}
        </div>
      </dl>

      <div className="mt-4 flex w-full gap-2">
        <a
          href={`/profile/${profile.id}`}
          className="flex-1 rounded-pill border border-plum px-3 py-2 text-xs font-semibold text-plum transition-colors hover:bg-plum hover:text-white"
        >
          View Profile
        </a>
        <button
          type="button"
          className="group flex flex-1 items-center justify-center gap-1.5 rounded-pill bg-rose-plum px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send Invitation
          <Play size={10} fill="currentColor" className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}

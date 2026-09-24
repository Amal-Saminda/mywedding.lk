import ProfileCard, { Profile } from "./ProfileCard";
import Pagination from "./Pagination";

type ProfileGridProps = {
  title: string;
  profiles: Profile[];
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function ProfileGrid({ title, profiles, totalPages, onPageChange }: ProfileGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="divider-motif mb-8">
        <h2 className="font-display text-2xl font-semibold text-plum">{title}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      {totalPages && totalPages > 1 && (
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </section>
  );
}

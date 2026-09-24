"use client";

import { useEffect, useState } from "react";
import ProfileGrid from "./ProfileGrid";
import { Profile } from "./ProfileCard";
import { loadCurrentMember } from "@/shared/lib/currentMember";

type TopProfilesSectionProps = {
  profiles: Profile[];
};

export default function TopProfilesSection({ profiles }: TopProfilesSectionProps) {
  const [merged, setMerged] = useState<Profile[]>(profiles);

  useEffect(() => {
    const member = loadCurrentMember();
    if (!member) return;

    const meProfile: Profile = {
      id: "me",
      name: member.name || "You",
      age: Number(member.age) || 0,
      profession: member.profession || "—",
      location: member.homeTown || "—",
      photoUrl: member.photo,
    };

    setMerged([meProfile, ...profiles.filter((p) => p.id !== "me")]);
  }, [profiles]);

  return <ProfileGrid title="Top Profile" profiles={merged} />;
}

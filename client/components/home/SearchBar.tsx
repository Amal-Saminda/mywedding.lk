"use client";

import { useState } from "react";
import { Search, User, MapPin, Heart } from "lucide-react";

const fieldClass =
  "flex flex-1 items-center gap-2 px-4 py-3 text-sm text-ink-soft focus-within:text-ink bg-white";

export default function SearchBar() {
  const [lookingFor, setLookingFor] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");

  return (
    <form
      className="flex flex-col divide-y divide-rose-100 rounded-card bg-surface shadow-lift sm:flex-row sm:divide-x sm:divide-y-0 sm:rounded-pill"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className={fieldClass}>
        <User size={16} className="shrink-0" />
        <select
          value={lookingFor}
          onChange={(e) => setLookingFor(e.target.value)}
          className="w-full bg-transparent outline-none"
        >
          <option value="">Looking for</option>
          <option value="bride">Bride</option>
          <option value="groom">Groom</option>
        </select>
      </label>

      <label className={fieldClass}>
        <MapPin size={16} className="shrink-0" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent outline-none"
        >
          <option value="">Location</option>
          <option value="colombo">Colombo</option>
          <option value="kandy">Kandy</option>
          <option value="galle">Galle</option>
          <option value="negombo">Negombo</option>
        </select>
      </label>

      <label className={fieldClass}>
        <Heart size={16} className="shrink-0" />
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full bg-transparent outline-none"
        >
          <option value="">Age</option>
          <option value="20-25">20–25</option>
          <option value="26-30">26–30</option>
          <option value="31-35">31–35</option>
          <option value="36+">36+</option>
        </select>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-rose-plum px-8 py-3 text-sm font-semibold text-white sm:rounded-r-pill"
      >
        <Search size={16} />
        Search
      </button>
    </form>
  );
}

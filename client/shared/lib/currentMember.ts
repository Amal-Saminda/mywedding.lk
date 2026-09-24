export type CurrentMember = {
  name: string;
  age: string;
  profession: string;
  homeTown: string;
  photo: string | null;
};

const STORAGE_KEY = "mywedding:currentMember";

export function saveCurrentMember(member: CurrentMember) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(member));
  } catch {
    // Storage can fail (private browsing, quota) — non-critical, so we swallow it.
  }
}

export function loadCurrentMember(): CurrentMember | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CurrentMember) : null;
  } catch {
    return null;
  }
}

/** Reads a File as a base64 data URL so a photo survives a localStorage round trip. */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

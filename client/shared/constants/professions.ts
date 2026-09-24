export type ProfessionGroup = {
  label: string;
  items: string[];
};

export const PROFESSION_GROUPS: ProfessionGroup[] = [
  {
    label: "Medical & Healthcare",
    items: ["Doctor", "Nurse", "Pharmacist", "Dentist"],
  },
  {
    label: "Engineering & IT",
    items: ["Software Engineer", "Civil Engineer", "Electrical Engineer", "IT Support"],
  },
  {
    label: "Education",
    items: ["Teacher", "Lecturer", "Principal"],
  },
  {
    label: "Business & Government",
    items: ["Business Owner", "Government Officer", "Accountant", "Banker"],
  },
  {
    label: "Other",
    items: ["Self Employed", "Student", "Other"],
  },
];

export const PROFESSION_OPTIONS: string[] = PROFESSION_GROUPS.flatMap((g) => g.items);

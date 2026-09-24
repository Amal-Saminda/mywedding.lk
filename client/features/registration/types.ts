export type MaritalStatus = "Unmarried" | "Divorced";
export type Gender = "Male" | "Female";

export type RegistrationFormData = {
  // Step 1 — Account
  firstName: string;
  lastName: string;
  callingName: string;
  email: string;
  password: string;
  confirmPassword: string;
  // Step 2 — Personal Details
  phoneNumber: string;
  age: string;
  gender: Gender | "";
  maritalStatus: MaritalStatus | "";
  // Step 3 — Profession & Address
  profession: string;
  homeAddress: string;
};

export const initialRegistrationData: RegistrationFormData = {
  firstName: "",
  lastName: "",
  callingName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  age: "",
  gender: "",
  maritalStatus: "",
  profession: "",
  homeAddress: "",
};

export type RegistrationErrors = Partial<Record<keyof RegistrationFormData, string>>;

export const REGISTRATION_STEPS = [
  { key: "account", label: "Account" },
  { key: "personal", label: "Personal Details" },
  { key: "profession", label: "Profession & Address" },
  { key: "review", label: "Review" },
] as const;

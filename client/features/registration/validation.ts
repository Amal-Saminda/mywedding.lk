import { RegistrationErrors, RegistrationFormData } from "../types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\s-]{7,15}$/;

export function validateAccountStep(data: RegistrationFormData): RegistrationErrors {
  const errors: RegistrationErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.lastName.trim()) errors.lastName = "Last name is required.";

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.password) {
    errors.password = "Password is required.";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  // Not separately marked required, but a mismatched or missing confirmation
  // would silently lock the member out — so it must match the password.
  if (data.password && data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export function validatePersonalStep(data: RegistrationFormData): RegistrationErrors {
  const errors: RegistrationErrors = {};

  if (data.phoneNumber && !PHONE_PATTERN.test(data.phoneNumber)) {
    errors.phoneNumber = "Enter a valid phone number.";
  }

  const ageNumber = Number(data.age);
  if (!data.age.trim()) {
    errors.age = "Age is required.";
  } else if (!Number.isInteger(ageNumber) || ageNumber < 18 || ageNumber > 99) {
    errors.age = "Age must be between 18 and 99.";
  }

  if (!data.gender) errors.gender = "Please select a gender.";
  if (!data.maritalStatus) errors.maritalStatus = "Please select a marital status.";

  return errors;
}

export function validateProfessionStep(data: RegistrationFormData): RegistrationErrors {
  const errors: RegistrationErrors = {};

  if (!data.profession.trim()) errors.profession = "Job / profession is required.";
  if (!data.homeAddress.trim()) errors.homeAddress = "Home address is required.";

  return errors;
}

export function validateStep(stepIndex: number, data: RegistrationFormData): RegistrationErrors {
  switch (stepIndex) {
    case 0:
      return validateAccountStep(data);
    case 1:
      return validatePersonalStep(data);
    case 2:
      return validateProfessionStep(data);
    default:
      return {};
  }
}

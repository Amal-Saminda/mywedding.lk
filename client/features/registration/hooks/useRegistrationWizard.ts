"use client";

import { useState } from "react";
import { REGISTRATION_STEPS, RegistrationErrors, RegistrationFormData, initialRegistrationData } from "../types";
import { validateStep } from "../validation";

export function useRegistrationWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<RegistrationFormData>(initialRegistrationData);
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof RegistrationFormData>(field: K, value: RegistrationFormData[K]) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function goNext() {
    const stepErrors = validateStep(stepIndex, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStepIndex((i) => Math.min(i + 1, REGISTRATION_STEPS.length - 1));
  }

  function goBack() {
    setErrors({});
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function goToStep(index: number) {
    // Only allow jumping to a step the user has already completed,
    // so nothing appears to skip ahead of unvalidated data.
    if (index <= stepIndex) {
      setErrors({});
      setStepIndex(index);
    }
  }

  function submit() {
    // Re-validate every data-entry step before the final submit.
    for (let i = 0; i < REGISTRATION_STEPS.length - 1; i++) {
      const stepErrors = validateStep(i, data);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        setStepIndex(i);
        return false;
      }
    }
    setSubmitted(true);
    return true;
  }

  return {
    steps: REGISTRATION_STEPS,
    stepIndex,
    data,
    errors,
    submitted,
    updateField,
    goNext,
    goBack,
    goToStep,
    submit,
  };
}

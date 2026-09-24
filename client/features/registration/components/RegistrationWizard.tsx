"use client";

import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Stepper from "@/shared/ui/Stepper";
import Button from "@/shared/ui/Button";
import { useRegistrationWizard } from "../hooks/useRegistrationWizard";
import AccountStep from "./steps/AccountStep";
import PersonalStep from "./steps/PersonalStep";
import ProfessionStep from "./steps/ProfessionStep";
import ReviewStep from "./steps/ReviewStep";

export default function RegistrationWizard() {
  const { steps, stepIndex, data, errors, submitted, updateField, goNext, goBack, goToStep, submit } =
    useRegistrationWizard();

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-card border border-rose-100 bg-surface p-10 text-center">
        <CheckCircle2 size={48} className="text-rose-500" />
        <h2 className="font-display text-2xl font-semibold text-plum">
          Welcome to MyWedding.Lk, {data.firstName}!
        </h2>
        <p className="text-sm text-ink-soft">
          Your account has been created. We'll send a verification link to {data.email} —
          confirm it to start browsing profiles.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10">
        <Stepper steps={[...steps]} activeIndex={stepIndex} />
      </div>

      <div className="rounded-card border border-rose-100 bg-surface p-6 shadow-card sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
          Step {stepIndex + 1} of {steps.length}
        </p>
        <h1 className="mb-6 font-display text-2xl font-semibold text-plum">
          {steps[stepIndex].label}
        </h1>

        {stepIndex === 0 && <AccountStep data={data} errors={errors} updateField={updateField} />}
        {stepIndex === 1 && <PersonalStep data={data} errors={errors} updateField={updateField} />}
        {stepIndex === 2 && <ProfessionStep data={data} errors={errors} updateField={updateField} />}
        {stepIndex === 3 && <ReviewStep data={data} onEditStep={goToStep} />}

        <div className="mt-8 flex items-center justify-between border-t border-rose-50 pt-6">
          <Button type="button" variant="ghost" onClick={goBack} disabled={stepIndex === 0}>
            <ArrowLeft size={14} />
            Back
          </Button>

          {stepIndex < steps.length - 1 ? (
            <Button type="button" variant="primary" onClick={goNext}>
              Continue
              <ArrowRight size={14} />
            </Button>
          ) : (
            <Button type="button" variant="primary" onClick={submit}>
              Create Account
              <ArrowRight size={14} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

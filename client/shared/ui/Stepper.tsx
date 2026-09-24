import { Check } from "lucide-react";

export type Step = {
  key: string;
  label: string;
};

type StepperProps = {
  steps: Step[];
  activeIndex: number;
};

export default function Stepper({ steps, activeIndex }: StepperProps) {
  return (
    <ol className="flex items-center">
      {steps.map((step, index) => {
        const isComplete = index < activeIndex;
        const isActive = index === activeIndex;
        const isLast = index === steps.length - 1;

        return (
          <li key={step.key} className={`flex items-center ${isLast ? "" : "flex-1"}`}>
            <div className="flex flex-col items-center gap-2">
              <span
                className={`text-xs font-medium sm:text-sm ${
                  isActive ? "text-rose-600" : isComplete ? "text-plum" : "text-ink-soft/50"
                }`}
              >
                {step.label}
              </span>
              <span
                aria-current={isActive ? "step" : undefined}
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] font-semibold transition-colors ${
                  isComplete
                    ? "border-rose-500 bg-rose-500 text-white"
                    : isActive
                    ? "border-rose-500 bg-surface text-rose-500 ring-4 ring-rose-100"
                    : "border-rose-100 bg-surface text-transparent"
                }`}
              >
                {isComplete ? <Check size={12} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
              </span>
            </div>
            {!isLast && (
              <div
                className={`mx-2 mt-6 h-0.5 flex-1 self-start ${
                  isComplete ? "bg-rose-500" : "bg-rose-100"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

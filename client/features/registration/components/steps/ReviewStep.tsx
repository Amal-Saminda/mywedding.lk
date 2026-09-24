import { Pencil } from "lucide-react";
import { RegistrationFormData } from "../../types";

type ReviewStepProps = {
  data: RegistrationFormData;
  onEditStep: (index: number) => void;
};

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-soft/70">{label}</span>
      <span className="text-right font-medium text-ink">{value || "—"}</span>
    </div>
  );
}

function SummaryCard({
  title,
  stepIndex,
  onEditStep,
  children,
}: {
  title: string;
  stepIndex: number;
  onEditStep: (index: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-rose-100 bg-surface p-5">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-display text-base font-semibold text-plum">{title}</p>
        <button
          type="button"
          onClick={() => onEditStep(stepIndex)}
          className="flex items-center gap-1 text-xs font-medium text-rose-600 hover:text-rose-700"
        >
          <Pencil size={12} />
          Edit
        </button>
      </div>
      <div className="divide-y divide-rose-50">{children}</div>
    </div>
  );
}

export default function ReviewStep({ data, onEditStep }: ReviewStepProps) {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-soft">
        Take a quick look before you submit — you can jump back to any section to fix something.
      </p>

      <SummaryCard title="Account" stepIndex={0} onEditStep={onEditStep}>
        <SummaryRow label="Name" value={fullName} />
        <SummaryRow label="Calling Name" value={data.callingName} />
        <SummaryRow label="Email" value={data.email} />
      </SummaryCard>

      <SummaryCard title="Personal Details" stepIndex={1} onEditStep={onEditStep}>
        <SummaryRow label="Phone Number" value={data.phoneNumber} />
        <SummaryRow label="Age" value={data.age} />
        <SummaryRow label="Gender" value={data.gender} />
        <SummaryRow label="Marital Status" value={data.maritalStatus} />
      </SummaryCard>

      <SummaryCard title="Profession & Address" stepIndex={2} onEditStep={onEditStep}>
        <SummaryRow label="Profession" value={data.profession} />
        <SummaryRow label="Home Address" value={data.homeAddress} />
      </SummaryCard>
    </div>
  );
}

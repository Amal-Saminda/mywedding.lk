import Input from "@/shared/ui/Input";
import SegmentedControl from "@/shared/ui/SegmentedControl";
import { Gender, MaritalStatus, RegistrationErrors, RegistrationFormData } from "../../types";

type PersonalStepProps = {
  data: RegistrationFormData;
  errors: RegistrationErrors;
  updateField: <K extends keyof RegistrationFormData>(field: K, value: RegistrationFormData[K]) => void;
};

const GENDER_OPTIONS: Gender[] = ["Male", "Female"];
const MARITAL_STATUS_OPTIONS: MaritalStatus[] = ["Unmarried", "Divorced"];

export default function PersonalStep({ data, errors, updateField }: PersonalStepProps) {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={data.phoneNumber}
          error={errors.phoneNumber}
          onChange={(e) => updateField("phoneNumber", e.target.value)}
          placeholder="+94 77 123 4567"
          hint="Optional — kept private until you approve a match."
        />
        <Input
          label="Age"
          name="age"
          type="number"
          required
          min={18}
          max={99}
          value={data.age}
          error={errors.age}
          onChange={(e) => updateField("age", e.target.value)}
          placeholder="28"
        />
      </div>

      <SegmentedControl
        label="Gender"
        name="gender"
        required
        options={GENDER_OPTIONS}
        value={data.gender}
        error={errors.gender}
        onChange={(value) => updateField("gender", value as Gender)}
      />

      <SegmentedControl
        label="Marital Status"
        name="maritalStatus"
        required
        options={MARITAL_STATUS_OPTIONS}
        value={data.maritalStatus}
        error={errors.maritalStatus}
        onChange={(value) => updateField("maritalStatus", value as MaritalStatus)}
      />
    </div>
  );
}

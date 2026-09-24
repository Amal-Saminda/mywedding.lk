import Select from "@/shared/ui/Select";
import Textarea from "@/shared/ui/Textarea";
import { PROFESSION_OPTIONS } from "@/shared/constants/professions";
import { RegistrationErrors, RegistrationFormData } from "../../types";

type ProfessionStepProps = {
  data: RegistrationFormData;
  errors: RegistrationErrors;
  updateField: <K extends keyof RegistrationFormData>(field: K, value: RegistrationFormData[K]) => void;
};

export default function ProfessionStep({ data, errors, updateField }: ProfessionStepProps) {
  return (
    <div className="space-y-5">
      <Select
        label="Job (Profession)"
        name="profession"
        required
        options={PROFESSION_OPTIONS}
        value={data.profession}
        error={errors.profession}
        onChange={(e) => updateField("profession", e.target.value)}
      />

      <Textarea
        label="Home Address"
        name="homeAddress"
        required
        rows={3}
        value={data.homeAddress}
        error={errors.homeAddress}
        onChange={(e) => updateField("homeAddress", e.target.value)}
        placeholder="House / street, city, district"
      />
    </div>
  );
}

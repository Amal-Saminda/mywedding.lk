import Input from "@/shared/ui/Input";
import PasswordInput from "@/shared/ui/PasswordInput";
import { RegistrationErrors, RegistrationFormData } from "../../types";

type AccountStepProps = {
  data: RegistrationFormData;
  errors: RegistrationErrors;
  updateField: <K extends keyof RegistrationFormData>(field: K, value: RegistrationFormData[K]) => void;
};

export default function AccountStep({ data, errors, updateField }: AccountStepProps) {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          required
          value={data.firstName}
          error={errors.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          placeholder="Kasun"
        />
        <Input
          label="Last Name"
          name="lastName"
          required
          value={data.lastName}
          error={errors.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          placeholder="Perera"
        />
      </div>

      <Input
        label="Calling Name"
        name="callingName"
        value={data.callingName}
        error={errors.callingName}
        onChange={(e) => updateField("callingName", e.target.value)}
        placeholder="What friends & family call you"
        hint="Optional — shown on your profile instead of your full name."
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        value={data.email}
        error={errors.email}
        onChange={(e) => updateField("email", e.target.value)}
        placeholder="you@example.com"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <PasswordInput
          label="Password"
          name="password"
          required
          value={data.password}
          error={errors.password}
          onChange={(e) => updateField("password", e.target.value)}
          hint="At least 8 characters."
        />
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={data.confirmPassword}
          error={errors.confirmPassword}
          onChange={(e) => updateField("confirmPassword", e.target.value)}
        />
      </div>
    </div>
  );
}

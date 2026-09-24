import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegistrationWizard from "@/features/registration/components/RegistrationWizard";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="font-sinhala text-2xl font-bold text-plum sm:text-3xl">
           Registration Form | ගිණුමක් සාදන්න
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            Just a few steps — you can review and change anything before you submit.
          </p>
        </div>
        <RegistrationWizard />
      </main>
      <Footer />
    </>
  );
}

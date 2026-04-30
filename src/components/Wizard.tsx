import { useState } from "react";
import { useForm } from "react-hook-form";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../utils/schema"
import type { FormData } from "../utils/schema";

function Wizard() {

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

   const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function next() {
    if(currentStep == 0){
      const isValid = await trigger(["firstName", "lastName", "dateOfBirth"]);
      if (isValid) setCurrentStep(prev => prev + 1);
    } else if(currentStep == 1){
      const isValid = await trigger(["email", "password", "confirmPassword"]);
      if (isValid) setCurrentStep(prev => prev + 1);
    }
  }

  function back() {
    setCurrentStep(prev => prev - 1);
  }

  function onSubmit(data: FormData) {
    console.log(data);
    setIsSubmitted(true);
  }


  if (isSubmitted) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-gray-800 text-lg">✓</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">All done</h2>
        <p className="text-sm text-gray-400">Your account has been created successfully.</p>
      </div>
    </div>
  );
}

return (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="min-h-screen flex items-center justify-center px-4"
  >
    <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-sm border border-gray-100">

      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">Create account</h1>
      <p className="text-sm text-gray-400 mb-6">Step {currentStep + 1} of 3</p>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-1 mb-8">
        <div
          className="bg-gray-800 h-1 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
        />
      </div>

      {/* Steps */}
      {currentStep === 0 && <StepOne register={register} errors={errors} />}
      {currentStep === 1 && <StepTwo register={register} errors={errors}  />}
      {currentStep === 2 && <StepThree watch={watch} />}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={back}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Back
          </button>
        ) : <span />}

        {currentStep < 2 && (
          <button
            type="button"
            onClick={next}
            className="ml-auto bg-gray-800 text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Next →
          </button>
        )}

        {currentStep === 2 && (
          <button
            type="submit"
            className="ml-auto bg-gray-800 text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Submit →
          </button>
        )}
      </div>
    </div>
  </form>
);
}

export default Wizard;
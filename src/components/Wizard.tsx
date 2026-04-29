import { useState } from "react";
import type { FormData } from "../types/formTypes";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import type { FormErrors } from "../types/formTypes";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validators";

function Wizard() {

  // 1. State — always at the top
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [errors, setErrors] = useState<FormErrors>({
  email: "",
  password: "",
  confirmPassword: "",
});

  // 2. Functions — always between state and return
function handleChange(field: keyof FormData, value: string) {
  setFormData(prev => ({ ...prev, [field]: value }));

  setErrors(prev => {
    const newErrors = { ...prev };

    if (field === "email") {
      newErrors.email = validateEmail(value);
    }

    if (field === "password") {
      newErrors.password = validatePassword(value);
      newErrors.confirmPassword = validateConfirmPassword(
        value,
        formData.confirmPassword
      );
    }

    if (field === "confirmPassword") {
      newErrors.confirmPassword = validateConfirmPassword(
        formData.password,
        value
      );
    }

    return newErrors;
  });
}

  function next() {
    setCurrentStep(prev => prev + 1);
  }

  function back() {
    setCurrentStep(prev => prev - 1);
  }

  function handleSubmit() {
  console.log(formData);
  setIsSubmitted(true);
  }

  if(isSubmitted) {
    return (
      <div>
        <h2>Success! 🎉</h2>
        <p>Your registration is complete.</p>
    </div>
    );
  }

  const isStepTwoValid =
  !errors.email &&
  !errors.password &&
  !errors.confirmPassword &&
  formData.email !== "" &&
  formData.password !== "" &&
  formData.confirmPassword !== "";

  // 3. Return — only JSX lives here
  return (
    <div>
      <p>Step {currentStep + 1} of 3</p>
      <div style={{ width: "100%", background: "#eee" }}>
        <div style={{
          width: `${((currentStep + 1) / 3) * 100}%`,
          background: "blue",
          height: "8px"
        }}/>
      </div>
      
      {currentStep === 0 && <StepOne formData={formData} handleChange={handleChange} />}
      {currentStep === 1 && <StepTwo formData={formData} errors={errors} handleChange={handleChange} />}
      {currentStep === 2 && <StepThree formData={formData} />}

      {currentStep > 0 && <button onClick={back}>Back</button>}
      {currentStep < 2 && (
        <button onClick={next} disabled= {currentStep === 1 && !isStepTwoValid}>
          Next
        </button>
      )}
      {currentStep === 2 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
}

export default Wizard;
export interface FormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface StepOneProps {
    formData: FormData;
    handleChange(field: keyof FormData, value: string): void;
}

export interface StepTwoProps {
    formData: FormData;
    errors: FormErrors;
    handleChange(field: keyof FormData, value: string): void;
}

export interface StepThreeProps {
    formData: FormData;
}

export type FormErrors = {
  email: string;
  password: string;
  confirmPassword: string;
};
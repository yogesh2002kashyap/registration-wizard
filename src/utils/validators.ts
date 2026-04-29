const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateEmail(value: string): string {
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Invalid email address";
    
  return "";
}

export function validatePassword(password: string): string {
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(password)) return "Must contain at least one uppercase letter";
  if (!/[a-z]/.test(password)) return "Must contain at least one lowercase letter";
  if (!/[0-9]/.test(password)) return "Must contain at least one number";
  if (!/[!@#$%^&*]/.test(password)) return "Must contain at least one special character";
  return "";
}

export function validateConfirmPassword(password: string, confirm: string): string {
  if (password !== confirm) return "Passwords do not match";
  return "";
}
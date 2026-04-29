import React, { useState } from "react";
import type { StepTwoProps } from "../types/formTypes";

const StepTwo: React.FC<StepTwoProps> = ({
  formData,
  errors,
  handleChange,
}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      {/* EMAIL */}
      <input
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="E-mail"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      {/* PASSWORD */}
      <input
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        placeholder="Password"
      />
      <button type="button" onClick={() => setShowPassword((prev: boolean) => !prev)}>
        {showPassword ? "Hide" : "Show"}
      </button>
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      {/* CONFIRM PASSWORD */}
      <input
        type={showConfirm ? "text" : "password"}
        value={formData.confirmPassword}
        onChange={(e) =>
          handleChange("confirmPassword", e.target.value)
        }
        placeholder="Confirm Password"
      />
      <button type="button" onClick={() => setShowConfirm((prev: boolean) => !prev)}>
          {showConfirm ? "Hide" : "Show"}
      </button>
      {errors.confirmPassword && (
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>
      )}
    </>
  );
};

export default StepTwo;
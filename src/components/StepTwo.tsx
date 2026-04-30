import React, { useState } from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import type { FormData } from "../utils/schema";

interface StepTwoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const StepTwo: React.FC<StepTwoProps> = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-5">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        Account Info
      </h2>

      {/* EMAIL */}
      <div className="relative">
        <label className="block text-xs text-gray-400 mb-1.5">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          placeholder="E-mail"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* PASSWORD */}
      <div className="relative">
        <label className="block text-xs text-gray-400 mb-1.5">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

        {errors.password && (
          <p className="text-red-500 text-xs mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="relative">
        <label className="block text-xs text-gray-400 mb-1.5">
          Confirm Password
        </label>

        <input
          type={showConfirm ? "text" : "password"}
          {...register("confirmPassword")}
          placeholder="Confirm Password"
          className="w-full border rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={() => setShowConfirm((prev) => !prev)}
          className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
        >
          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
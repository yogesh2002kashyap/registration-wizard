import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../utils/schema';

interface StepOneProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const StepOne: React.FC<StepOneProps> = ({ register, errors }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        Personal info
      </h2>

      <div>
        <label className="block text-xs text-gray-400 mb-1.5">First name</label>
        <input
          {...register("firstName")}
          placeholder="John"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
        />
        {errors.firstName && (
          <p className="text-xs text-red-400 mt-1">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1.5">Last name</label>
        <input
          {...register("lastName")}
          placeholder="Doe"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
        />
        {errors.lastName && (
          <p className="text-xs text-red-400 mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1.5">Date of birth</label>
        <input
          type="date"
          {...register("dateOfBirth")}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
        />
        {errors.dateOfBirth && (
          <p className="text-xs text-red-400 mt-1">{errors.dateOfBirth.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepOne;
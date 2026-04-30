import React from 'react';
import type { UseFormWatch } from 'react-hook-form';
import type { FormData } from '../utils/schema';

interface StepThreeProps {
  watch: UseFormWatch<FormData>
}

const StepThree: React.FC<StepThreeProps> = ({ watch }) => {
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const dateOfBirth = watch("dateOfBirth");
  const email = watch("email");

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        Review
      </h2>

      <div className="space-y-3">
        <p className="text-xs text-gray-400 uppercase tracking-wide">Personal</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Full name</span>
            <span className="text-gray-800">{firstName} {lastName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Date of birth</span>
            <span className="text-gray-800">{dateOfBirth}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-2">
        <p className="text-xs text-gray-400 uppercase tracking-wide">Account</p>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Email</span>
          <span className="text-gray-800">{email}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Password</span>
          <span className="text-gray-800">••••••••</span>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
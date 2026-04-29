import React from 'react';
import type { StepOneProps } from '../types/formTypes';

const StepOne: React.FC<StepOneProps> = ({ formData, handleChange }) => {
  return (
    <>
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        placeholder="First Name"
      />

      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        placeholder="Last Name"
      />

      <input
        type="date"
        value={formData.dateOfBirth}
        onChange={(e) => handleChange("dateOfBirth", e.target.value)}
      />
    </>
  );
};

export default StepOne;
import React from 'react';
import type { StepThreeProps } from '../types/formTypes';

const StepThree: React.FC<StepThreeProps> = ({ formData }) => {

  
  return (
    <>
      <div>
        <h2>Personal Info</h2>
        <p>{formData.firstName}</p>
        <p>{formData.lastName}</p>
        <p>{formData.dateOfBirth}</p>
      </div>

      <div>
        <h2>Account Details</h2>
        <p>{formData.email}</p>
        <p>••••••••</p>
      </div>
    </>
  );
};

export default StepThree;
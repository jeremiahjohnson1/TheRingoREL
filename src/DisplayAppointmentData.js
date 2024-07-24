import React from 'react';
import { useLocation } from 'react-router-dom';

function DisplayAppointmentData() {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="bg-amber-300 w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
      <h3 className="text-white text-[17pt] font-bold text-tracki">
        Appointment Details
      </h3>
      <div className="space-y-[24px]">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.secondName}</p>
        <p><strong>Phone Number:</strong> {formData.number}</p>
        <p><strong>Email Address:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.text}</p>
      </div>
    </div>
  );
}

export default DisplayAppointmentData;

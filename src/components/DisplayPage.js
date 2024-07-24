import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data available</div>;
  }

  const {
    firstName,
    lastName,
    middleName,
    phoneNumber,
    email,
    address,
    ssn,
    dob,
    gender,
    driversLicense,
    passportPhoto
  } = formData;

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-6">Submitted Data</h1>
      <div className="space-y-4">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Middle Name:</strong> {middleName}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Email Address:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>SSN:</strong> {ssn}</p>
        <p><strong>Date of Birth:</strong> {dob}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <div>
          <strong>Driver's License:</strong>
          {driversLicense && (
            <img
              src={URL.createObjectURL(driversLicense)}
              alt="Driver's License"
              className="mt-2"
              style={{ maxWidth: '300px' }}
            />
          )}
        </div>
        <div>
          <strong>Passport Photograph:</strong>
          {passportPhoto && (
            <img
              src={URL.createObjectURL(passportPhoto)}
              alt="Passport Photograph"
              className="mt-2"
              style={{ maxWidth: '300px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;

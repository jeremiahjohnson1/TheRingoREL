import React, { useState } from 'react';
import axios from 'axios';

const Verification = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    phoneNumber: '',
    email: '',
    address: '',
    ssn: '',
    dob: '',
    gender: '',
    driversLicense: null,
    passportPhoto: null,
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0], // Store file in formData
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission (which triggers a page reload)

    // Check if any field is empty
    for (let key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        setMessage('All fields are required.');
        setShowMessage(true);
        return;
      }
    }

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]); // Append each form field to FormData
    }

    try {
      // Send the form data to the backend
      await axios.post('http://localhost:3004/submit-form', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // If successful, show the success message
      setMessage('Form submitted successfully! An email will be sent to you shortly.');
      setShowMessage(true);

    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to submit the form. Please try again.');
      setShowMessage(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 relative">
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p>{message}</p>
            <button
              onClick={() => setShowMessage(false)}
              className="mt-4 px-4 py-2 bg-amber-300 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="bg-yellow-300 w-full p-8 rounded-sm max-w-lg mx-auto shadow-lg">
        <h3 className="text-gray-700 text-2xl font-bold mb-2">Verification Form</h3>
        <p>Please fill the form accurately, as information provided will be used in identity card and also in your personal form.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="First Name"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="Last Name"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="Middle Name"
            type="text"
            name="middleName"
            onChange={handleChange}
          />
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="Phone Number"
            type="number"
            name="phoneNumber"
            onChange={handleChange}
          />
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="Email Address"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="Address"
            type="text"
            name="address"
            onChange={handleChange}
          />
          <input
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            placeholder="SSN"
            type="number"
            name="ssn"
            onChange={handleChange}
          />
          <div>
            <label>Date Of Birth</label>
            <input
              className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
              placeholder="Date of Birth"
              type="date"
              name="dob"
              onChange={handleChange}
            />
          </div>
          <select
            className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
            name="gender"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div>
            <label className="block text-gray-700">Driver's License</label>
            <input
              className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
              type="file"
              name="driversLicense"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Passport Photograph</label>
            <input
              className="form-control w-full p-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-zinc-800"
              type="file"
              name="passportPhoto"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn bg-zinc-700 text-white hover:bg-amber-200 transition-all w-full py-4 rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;

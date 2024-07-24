import React, { useState } from "react";
import { social } from "../data";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the success message
    setSuccessMessage(true);
    // Optionally, clear the input fields
    e.target.reset();
  };

  const handleCloseMessage = () => {
    setSuccessMessage(false);
  };

  return (
    <section id="contact" className="section bg-zinc-700 text-white min-h-[732px]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact Us
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px] font-primary">
          We’re here to assist you with any questions or concerns you may have. Whether you need legal advice, want to schedule a consultation, or have general inquiries, our team is ready to help. Reach out to us through the form below, by phone, or via email, and we will get back to you promptly. Your satisfaction and peace of mind are our top priorities.
        </p>
        <form
          className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Full Name" className="form-control" />
          <input type="email" placeholder="Email Address" className="form-control" />
          <textarea placeholder="Your Message Here" className="textarea" />
          <button className="btn bg-amber-300 hover:bg-yellow-400 transition-all">
            Submit
          </button>
        </form>
        {successMessage && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded shadow-lg text-center'>
              <p>Message successfully sent.</p>
              <button
                onClick={handleCloseMessage}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between max-w-[205px] mx-auto">
          {social.map((item, index) => {
            return (
              <a href="#" key={index}>
                <img src={item.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;

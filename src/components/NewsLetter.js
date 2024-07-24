import React, { useState } from 'react';

const NewsLetter = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the success message
    setSuccessMessage(true);
    // Optionally, clear the input field (not required)
    e.target.reset();
  };

  const handleCloseMessage = () => {
    setSuccessMessage(false);
  };

  return (
    <section className='bg-amber-300 pt-[54px] pb-[74px]'>
      <div className='container mx-auto px-8 text-center'>
        <h3 className='font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]'>
          Subscribe to our NewsLetter
        </h3>
        <p className='font-primary text-white font-extrabold mb-[40px] text-sm'>
          Be The First To Get The Latest News About Us...
        </p>
        <form className='max-w-[600px] mx-auto flex flex-col lg:flex-row' onSubmit={handleSubmit}>
          <input
            className='form-control mb-4'
            placeholder='Your Email Address Here'
            type='email'
          />
          <button className='btn bg-zinc-700 hover:bg-zinc-500 lg:max-w-[150px] lg:ml-4'>
            JOIN
          </button>
        </form>
        {successMessage && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded shadow-lg text-center'>
              <p>You have successfully subscribed to our Newsletter.</p>
              <button
                onClick={handleCloseMessage}
                className='mt-4 px-4 py-2 bg-amber-300 text-gray rounded'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsLetter;

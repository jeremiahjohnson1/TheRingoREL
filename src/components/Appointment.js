import React, { useState } from "react";


function Appointment() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    e.target.reset();
  };
  const handleCloseMessage = () =>{
    setSuccessMessage(false);
  };


 


 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-amber-300 w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
          <h3 className="text-white text-[17pt] font-bold text-tracki">
            Book An Appointment
          </h3>
          <div className="space-y-[24px]">
            <input
              className="form-control rounded-0"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="form-control"
              placeholder="Last Name"
              type="text"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            <input
              className="form-control"
              placeholder="Phone Number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              className="form-control"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="resize-none w-full h-[123px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-zinc-800"
              placeholder="Your Message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn bg-neutral-700 text-amber-200 hover:bg-neutral-600 transition-all"
              onSubmit={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      {successMessage && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded shadow-lg text-center'>
              <p>Application Sent successfully.</p>
              <button
                onClick={handleCloseMessage}
                className='mt-4 px-4 py-2 bg-amber-300 text-white rounded'
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Appointment;

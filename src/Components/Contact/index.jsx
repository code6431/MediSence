import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullname || !email || !message) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33',
        background: '#f9f9f9',
      });
      return;
    }

    // Email validation (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        title: 'Invalid Email!',
        text: 'Please enter a valid email address.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f39c12',
        background: '#f9f9f9',
      });
      return;
    }

    console.log(fullname, email, message);

    Swal.fire({
      title: 'Thank you for contacting us!',
      text: 'We have received your message and will get back to you soon.',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Close',
      confirmButtonColor: '#007bff',
      background: '#f9f9f9',
      timer: 5000,
      timerProgressBar: true,
    });

    // Clear the form after submission
    setFullname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center py-16 px-8 max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
      
      <hr className="w-full my-6 border-t-2 border-blue-300" />

      <div className="flex flex-wrap justify-center items-start w-full gap-[10rem] mt-9">
        <img src="./contact.svg" alt="Contact" className="w-2/5 max-w-sm" />
        
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg bg-gray-100">
          <form onSubmit={contactUs}>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-lg font-semibold">Full Name</label>
              <input 
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text" 
                className="p-2 text-base border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-lg font-semibold">Email</label>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="p-2 text-base border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-lg font-semibold">Message</label>
              <textarea 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="4"
                className="p-2 text-base border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            <button 
              type="submit" 
              className="px-6 py-2 text-lg text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

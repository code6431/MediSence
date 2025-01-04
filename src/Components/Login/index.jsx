import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the SignUp component
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sign In Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800">Sign in</h2>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-gray-200 p-2 rounded-full mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="bg-gray-200 p-2 rounded-full mx-1">
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-gray-200 p-2 rounded-full mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
          <p className="text-gray-500 mt-4">or use your account</p>
          <form className="mt-4">
            <div className="mb-4">
              <input
                className="w-full p-3 border rounded bg-gray-200 focus:bg-white focus:outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border rounded bg-gray-200 focus:bg-white focus:outline-none"
                type="password"
                placeholder="Password"
              />
            </div>
            <a href="#" className="text-gray-500 text-sm hover:underline">
              Forgot your password?
            </a>
            <button
              className="w-full bg-blue-600 text-white py-3 mt-6 rounded hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
        {/* Right Section */}
        <div className="hidden md:flex md:w-1/2 bg-blue-800 text-white p-8 items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Hello, Friend!</h2>
            <p className="mt-4">Enter your personal details and start your journey with us</p>
            <button
              className="bg-white text-blue-800 py-3 px-6 mt-6 rounded hover:bg-gray-100 focus:outline-none"
              type="button"
              onClick={handleSignUpClick} // Handle click event
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

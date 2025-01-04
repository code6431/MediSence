import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function SignUpPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignInClick = () => {
    navigate('/signin'); // Navigate to the SignIn page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-4/5 max-w-4xl">
        {/* Sign In Section */}
        <div className="w-1/2 bg-blue-900 text-white p-10 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-6">To keep connected with us please login with your personal info</p>
          <button
            className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-blue-900"
            onClick={handleSignInClick} // Attach the click handler
          >
            Sign In
          </button>
        </div>
        {/* Sign Up Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
          <div className="flex space-x-4 mb-6">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <i className="fab fa-google text-red-600"></i>
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <i className="fab fa-linkedin-in text-blue-800"></i>
            </button>
          </div>
          <p className="text-gray-600 mb-4">or use your email for registration</p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Create Your Account</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </form>
        <p className="text-center text-md mt-6">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
        <Link
            to="/"
            className="block text-center mt-4 text-blue-600 hover:underline hover:text-blue-700 transition"
        >
            Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Register;

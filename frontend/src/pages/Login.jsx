import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement your own login logic here
      // ...

      // Simulate a successful login after a delay for demonstration
      await simulateLogin();
    } catch (error) {
      // Handle login error and display an error message
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login failed:', error);
    }
  };

  const simulateLogin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // In a real implementation, you would validate the user's credentials
        // and then resolve or reject the promise accordingly.
        resolve();
      }, 2000); // Simulate a 2-second delay for demonstration purposes
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        {error && (
          <div className="text-red-600 mb-4">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="mt-2">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

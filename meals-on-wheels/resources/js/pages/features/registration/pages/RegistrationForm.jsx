import React, { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userRole: "member",
    });
  
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Form Data Submitted:", formData);
    };

  return (
    <div className="min-h-screen bg-secondary-100 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-primary-700 mb-6">
            User Registration
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            {/* Password */}
<div className="relative">
  <label
    htmlFor="password"
    className="block text-gray-700 font-medium mb-2"
  >
    Password:
  </label>
  <input
    type={showPassword ? "text" : "password"} // Toggle input type
    id="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Enter your password"
    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
    required
  />
  {/* Eye Icon */}
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)} // Toggle visibility
    className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center text-gray-500"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

{/* Confirm Password */}
<div className="relative">
  <label
    htmlFor="confirmPassword"
    className="block text-gray-700 font-medium mb-2"
  >
    Confirm Password:
  </label>
  <input
    type={showConfirmPassword ? "text" : "password"} // Toggle input type
    id="confirmPassword"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm your password"
    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
    required
  />
  {/* Eye Icon */}
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle visibility
    className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center text-gray-500"
  >
    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>


            {/* User Role */}
            <div>
              <label
                htmlFor="userRole"
                className="block text-gray-700 font-medium mb-2"
              >
                Choose User Role:
              </label>
              <select
                id="userRole"
                name="userRole"
                value={formData.userRole}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="member">Member</option>
                <option value="caregiver">Caregiver</option>
                <option value="volunteer">Volunteer</option>
                <option value="partner">Partner</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-500 text-white font-medium px-6 py-2 rounded hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;

import React, { useState } from "react";

const MemberRegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        age: "",
        disease: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.age || isNaN(formData.age) || formData.age < 0)
            newErrors.age = "Valid age is required";
        if (!formData.disease) newErrors.disease = "Disease or disability is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
            // Add logic to send formData to the backend.
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-primary mb-6">
                    Member Registration
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-medium"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-gray-700 font-medium">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        ></textarea>
                        {errors.address && (
                            <p className="text-red-500 text-sm">{errors.address}</p>
                        )}
                    </div>

                    {/* Age */}
                    <div>
                        <label htmlFor="age" className="block text-gray-700 font-medium">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                    </div>

                    {/* Disease/Disability */}
                    <div>
                        <label htmlFor="disease" className="block text-gray-700 font-medium">
                            Disease or Disability
                        </label>
                        <input
                            type="text"
                            id="disease"
                            name="disease"
                            value={formData.disease}
                            onChange={handleChange}
                            placeholder="Enter your disease or disability"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
                        />
                        {errors.disease && (
                            <p className="text-red-500 text-sm">{errors.disease}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary text-white font-medium px-6 py-3 rounded hover:bg-secondary transition duration-300"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberRegistrationPage;

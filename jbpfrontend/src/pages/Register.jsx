import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accountType, setAccountType] = useState("seeker");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, userName, email, password, confirmPassword } = formData;

    if (!fullName || !userName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form Data:", {
      ...formData,
      role: accountType,
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Create account
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 font-medium hover:underline"
          >
            Log In
          </Link>
        </p>

        <div className="flex bg-gray-100 rounded-md overflow-hidden mb-6">
          <button
            onClick={() => setAccountType("seeker")}
            className={`w-1/2 px-4 py-2 text-sm font-medium transition ${
              accountType === "seeker"
                ? "bg-blue-900 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Seeker
          </button>
          <button
            onClick={() => setAccountType("employer")}
            className={`w-1/2 px-4 py-2 text-sm font-medium transition ${
              accountType === "employer"
                ? "bg-blue-900 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Employer
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Create Account →
          </button>
        </form>

        <Link
          to="/"
          className="block mt-6 text-center text-blue-600 font-medium hover:underline"
        >
          ← Go to Home
        </Link>
      </div>
    </div>
  );
}

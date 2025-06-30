// import { useState } from "react";
// import { HiEye, HiEyeOff } from "react-icons/hi";
// import { Link } from "react-router-dom";

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [accountType, setAccountType] = useState("recruiter");

//   // ✅ Add form fields state
//   const [formData, setFormData] = useState({
//     fullName: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // ✅ Input change handler
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Form submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload

//     const { fullName, username, email, password, confirmPassword } = formData;

//     if (!fullName || !username || !email || !password || !confirmPassword) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     // ✅ Do your register logic here (API call etc.)
//     console.log("Form submitted:", { accountType, ...formData });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           Create account.
//         </h2>
//         <p className="text-sm text-gray-500 mb-6">
//           Already have account?{" "}
//           <Link
//             to="/signin"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Log In
//           </Link>
//         </p>

//         <div className="flex bg-gray-100 rounded-md overflow-hidden mb-6">
//           <button
//             onClick={() => setAccountType("user")}
//             className={`w-1/2 px-4 py-2 text-sm font-medium transition ${
//               accountType === "user"
//                 ? "bg-blue-900 text-white"
//                 : "text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             User
//           </button>
//           <button
//             onClick={() => setAccountType("recruiter")}
//             className={`w-1/2 px-4 py-2 text-sm font-medium transition ${
//               accountType === "recruiter"
//                 ? "bg-blue-900 text-white"
//                 : "text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Recruiter
//           </button>
//         </div>

//         {/* ✅ Add onSubmit */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-2.5 text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <HiEyeOff /> : <HiEye />}
//             </button>
//           </div>

//           <div className="relative">
//             <input
//               type={showConfirm ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-2.5 text-gray-500"
//               onClick={() => setShowConfirm(!showConfirm)}
//             >
//               {showConfirm ? <HiEyeOff /> : <HiEye />}
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
//           >
//             Create Account →
//           </button>
//         </form>
//         <Link
//           to="/"
//           className="block mt-6 text-center text-blue-600 font-medium hover:underline"
//         >
//           ← Go to Home
//         </Link>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accountType, setAccountType] = useState("seeker");

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    coverImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "coverImage") {
      const file = e.target.files[0];
      setFormData({ ...formData, coverImage: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // ✅ Click on photo to remove
  const handleImageClick = () => {
    if (imagePreview) {
      setFormData({ ...formData, coverImage: null });
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, userName, email, password, confirmPassword, coverImage } = formData;

    if (!fullName || !userName || !email || !password || !confirmPassword || !coverImage) {
      alert("Please fill in all fields and upload a photo.");
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

    alert("Form submitted! Check console.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Create account</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-medium hover:underline">
            Log In
          </Link>
        </p>

        {/* ✅ Profile Photo with remove on click */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative group">
            <img
              src={imagePreview || "https://via.placeholder.com/120x120.png?text=Photo"}
              // alt="Preview"
              onClick={handleImageClick}
              className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-md cursor-pointer hover:opacity-80 transition"
              title={imagePreview ? "Click to remove photo" : "Add photo"}
            />
            <label
              htmlFor="coverImage"
              className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1.5 cursor-pointer hover:bg-blue-700 shadow"
              title="Change photo"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </label>
            <input
              id="coverImage"
              name="coverImage"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </div>
          <span className="mt-2 text-xs text-gray-500">
            {imagePreview ? "Click photo to remove" : "Upload your profile photo"}
          </span>
        </div>

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

import {
  FaBell,
  FaBriefcase,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  const logoutClick = () => {
    navigate("/")
  }
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm p-6 space-y-8">
        {/* Logo + Label */}
        <div>
          <h2 className="text-sm text-gray-400 uppercase mb-4">
            Candidate Dashboard
          </h2>
          <nav className="space-y-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              <FaBriefcase />
              Overview
            </NavLink>
            <NavLink
              to="/dashboard/applied"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              <FaBriefcase />
              Applied Jobs
            </NavLink>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <FaBookmark className="text-lg" />
              Favorite Jobs
            </button>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <FaBell className="text-lg" />
                Job Alert
              </button>
              <span className="text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full">
                09
              </span>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <FaCog className="text-lg" />
              Settings
            </button>
          </nav>
        </div>

        <button
          className="flex items-center gap-2 text-red-500 font-medium"
          onClick={logoutClick}
        >
          <FaSignOutAlt className="text-lg" />
          Log-out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Greeting */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Hello, Esther Howard
            </h2>
            <p className="text-sm text-gray-500">
              Here is your daily activities and job alerts
            </p>
          </div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-blue-500"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-50 rounded-md p-4">
            <p className="text-gray-500 text-sm">Applied jobs</p>
            <div className="text-xl font-bold text-gray-800 mt-1">589</div>
          </div>
          <div className="bg-yellow-50 rounded-md p-4">
            <p className="text-gray-500 text-sm">Favorite jobs</p>
            <div className="text-xl font-bold text-gray-800 mt-1">238</div>
          </div>
          <div className="bg-green-50 rounded-md p-4">
            <p className="text-gray-500 text-sm">Job Alerts</p>
            <div className="text-xl font-bold text-gray-800 mt-1">574</div>
          </div>
        </div>

        {/* Profile Incomplete Alert */}
        <div className="bg-red-500 text-white rounded-md p-4 flex justify-between items-center mt-6">
          <div className="flex items-center gap-4">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div>
              <p className="font-medium">
                Your profile editing is not completed.
              </p>
              <p className="text-sm">
                Complete your profile editing & build your custom Resume
              </p>
            </div>
          </div>
          <button className="bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-100">
            Edit Profile →
          </button>
        </div>

        {/* Recently Applied */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Recently Applied
            </h3>
            <button className="text-blue-600 text-sm hover:underline">
              View all →
            </button>
          </div>

          <div className="bg-white shadow-sm rounded-md divide-y">
            {[
              {
                company: "Upwork",
                role: "Networking Engineer",
                type: "Remote",
                location: "Washington",
                salary: "$50k–80k/month",
                date: "Feb 2, 2019 19:28",
                status: "Active",
              },
              {
                company: "Dribbble",
                role: "Product Designer",
                type: "Full Time",
                location: "Dhaka",
                salary: "$50k–80k/month",
                date: "Dec 7, 2019 23:26",
                status: "Active",
              },
              {
                company: "Apple",
                role: "Junior Graphic Designer",
                type: "Temporary",
                location: "Brazil",
                salary: "$50k–80k/month",
                date: "Feb 2, 2019 19:28",
                status: "Active",
              },
              {
                company: "Microsoft",
                role: "Visual Designer",
                type: "Contract Base",
                location: "Wisconsin",
                salary: "$50k–80k/month",
                date: "Dec 7, 2019 23:26",
                status: "Active",
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between px-6 py-4 ${
                  idx === 3 ? "border-l-4 border-blue-600" : ""
                }`}
              >
                <div>
                  <h4 className="font-medium text-gray-800">{job.role}</h4>
                  <div className="text-sm text-gray-500 flex gap-4">
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                  </div>
                  <span className="text-xs text-blue-600 font-medium inline-block mt-1">
                    {job.type}
                  </span>
                </div>
                <div className="text-sm text-gray-500">{job.date}</div>
                <div className="text-green-600 font-medium">{job.status}</div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

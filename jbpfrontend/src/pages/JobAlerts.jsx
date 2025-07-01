import { FaRegBookmark } from "react-icons/fa";

export default function JobAlerts() {
  const jobs = [
    {
      company: "Google",
      role: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15k-$20k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Dribbble",
      role: "UI/UX Designer",
      type: "Full Time",
      location: "Minnesota, USA",
      salary: "$10k-$15k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Upwork",
      role: "Front End Developer",
      type: "Internship",
      location: "Mymensingh, Bangladesh",
      salary: "$10k-$15k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Facebook",
      role: "Marketing Officer",
      type: "Full Time",
      location: "Montana, USA",
      salary: "$15k-$20k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Instagram",
      role: "Networking Engineer",
      type: "Full Time",
      location: "Michigan, USA",
      salary: "$5k-$10k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Google",
      role: "Senior UX Designer",
      type: "Full Time",
      location: "UK",
      salary: "$30k-$35k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Apple",
      role: "Junior Graphic Designer",
      type: "Full Time",
      location: "Bangladesh",
      salary: "$40k-$50k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Slack",
      role: "Product Designer",
      type: "Full Time",
      location: "Turkey",
      salary: "$50k-$70k",
      daysRemaining: "4 Days Remaining",
    },
    {
      company: "Adobe",
      role: "Project Manager",
      type: "Full Time",
      location: "Ohio, USA",
      salary: "$50k-$80k",
      daysRemaining: "4 Days Remaining",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Job Alerts <span className="text-sm text-gray-500">({jobs.length} new jobs)</span>
        </h1>
        <button className="text-sm text-blue-600 hover:underline">
          Edit Job Alerts
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`flex items-center justify-between bg-white p-4 rounded-md shadow-sm border ${
              index === 5 ? "border-blue-500" : ""
            }`}
          >
            <div>
              <h2 className="font-semibold text-gray-700">{job.role}</h2>
              <div className="text-sm text-gray-500">
                <p>{job.location}</p>
                <p>{job.salary}</p>
              </div>
              <div className="flex gap-2 text-xs mt-1">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                  {job.type}
                </span>
                <span className="text-gray-500">{job.daysRemaining}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button>
                <FaRegBookmark className="text-gray-600 hover:text-blue-600" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
                Apply Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {["01", "02", "03", "04", "05"].map((num, idx) => (
          <button
            key={idx}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              idx === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
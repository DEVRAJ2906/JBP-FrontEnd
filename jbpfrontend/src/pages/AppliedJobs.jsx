import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    logo: "https://cdn-icons-png.flaticon.com/512/732/732026.png", // Sample logos
    title: "Networking Engineer",
    tag: "Remote",
    location: "Washington",
    salary: "$50k-80k/month",
    date: "Feb 2, 2019 19:28",
    status: "Active",
  },
  {
    id: 2,
    logo: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
    title: "Product Designer",
    tag: "Full Time",
    location: "Dhaka",
    salary: "$50k-80k/month",
    date: "Dec 7, 2019 23:26",
    status: "Active",
  },
  {
    id: 3,
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    title: "Junior Graphic Designer",
    tag: "Temporary",
    location: "Brazil",
    salary: "$50k-80k/month",
    date: "Feb 2, 2019 19:28",
    status: "Active",
  },
  {
    id: 4,
    logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    title: "Visual Designer",
    tag: "Contract Base",
    location: "Wisconsin",
    salary: "$50k-80k/month",
    date: "Dec 7, 2019 23:26",
    status: "Active",
  },
];

export default function AppliedJobs() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-xl font-semibold mb-6">
        Applied Jobs <span className="text-gray-400">(589)</span>
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-12 text-sm font-medium border-b py-2 text-gray-600">
        <div className="col-span-5">Jobs</div>
        <div className="col-span-3">Date Applied</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2 text-right">Action</div>
      </div>

      {/* Job List */}
      {jobs.map((job, idx) => (
        <div
          key={job.id}
          className={`grid grid-cols-12 items-center py-4 border-b hover:shadow-sm transition ${
            idx === 3 ? "border border-blue-500 rounded-lg bg-white" : ""
          }`}
        >
          {/* Job Info */}
          <div className="col-span-5 flex items-center gap-4">
            <img src={job.logo} alt="logo" className="w-10 h-10 object-contain" />
            <div>
              <h3 className="font-medium text-gray-800">{job.title}</h3>
              <div className="flex gap-2 text-sm text-gray-500">
                <span>📍 {job.location}</span>
                <span>💲{job.salary}</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded mt-1 inline-block">
                {job.tag}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="col-span-3 text-sm text-gray-600">{job.date}</div>

          {/* Status */}
          <div className="col-span-2 text-green-600 flex items-center gap-1 text-sm">
            <FaCheckCircle className="text-green-500" />
            {job.status}
          </div>

          {/* Button */}
          <div className="col-span-2 text-right">
            <Link
              to="#"
              className="bg-blue-600 text-white px-4 py-1.5 text-sm rounded hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`w-8 h-8 rounded-full text-sm font-medium ${
              n === 4
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {n.toString().padStart(2, "0")}
          </button>
        ))}
        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">
          ➤
        </button>
      </div>
    </div>
  );
}

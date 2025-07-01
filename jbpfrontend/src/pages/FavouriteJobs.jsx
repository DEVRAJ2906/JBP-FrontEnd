import React from "react";
import { FaBookmark, FaArrowRight } from "react-icons/fa";

const favoriteJobs = [
  {
    company: "Google",
    role: "Technical Support Specialist",
    type: "Full Time",
    location: "Idaho, USA",
    salary: "$15k–$20k",
    status: "Job Expire",
    remaining: null,
    apply: false,
  },
  {
    company: "YouTube",
    role: "UI/UX Designer",
    type: "Full Time",
    location: "Minnesota, USA",
    salary: "$10k–$15k",
    remaining: "4 Days Remaining",
    apply: true,
  },
  {
    company: "LinkedIn",
    role: "Senior UX Designer",
    type: "Full Time",
    location: "United Kingdom of Great Britain",
    salary: "$30k–$35k",
    remaining: "4 Days Remaining",
    apply: true,
  },
  {
    company: "Apple",
    role: "Junior Graphic Designer",
    type: "Full Time",
    location: "Mymensingh, Bangladesh",
    salary: "$40k–$50k",
    remaining: "4 Days Remaining",
    apply: true,
  },
  {
    company: "Google",
    role: "Technical Support Specialist",
    type: "Full Time",
    location: "Idaho, USA",
    salary: "$15k–$20k",
    status: "Job Expire",
    remaining: null,
    apply: false,
  },
  {
    company: "Dribbble",
    role: "Product Designer",
    type: "Full Time",
    location: "Sivas, Turkey",
    salary: "$50k–$70k",
    remaining: "4 Days Remaining",
    apply: true,
  },
  {
    company: "Slack",
    role: "Project Manager",
    type: "Full Time",
    location: "Ohio, USA",
    salary: "$60k–$80k",
    remaining: "4 Days Remaining",
    apply: true,
  },
  {
    company: "Google",
    role: "Technical Support Specialist",
    type: "Full Time",
    location: "Idaho, USA",
    salary: "$15k–$20k",
    status: "Job Expire",
    remaining: null,
    apply: false,
  },
  {
    company: "Google",
    role: "Technical Support Specialist",
    type: "Full Time",
    location: "Idaho, USA",
    salary: "$15k–$20k",
    status: "Job Expire",
    remaining: null,
    apply: false,
  },
];

export default function FavoriteJobs() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Favorite Jobs <span className="text-gray-400">(17)</span>
      </h2>

      <div className="bg-white shadow-sm rounded-md divide-y">
        {favoriteJobs.map((job, idx) => (
          <div
            key={idx}
            className={`flex justify-between items-center px-6 py-4 ${
              idx === 2 ? "border-l-4 border-blue-600 bg-blue-50" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold uppercase">
                {job.company[0]}
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">
                  {job.role}
                  <span className="text-xs text-white bg-blue-500 ml-2 px-2 py-0.5 rounded">
                    {job.type}
                  </span>
                </h4>
                <div className="text-sm text-gray-500 flex gap-4">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                  {job.remaining && (
                    <span className="text-gray-400">{job.remaining}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <FaBookmark className="text-gray-500 text-xl" />
              {job.apply ? (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
                  Apply Now <FaArrowRight />
                </button>
              ) : (
                <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md cursor-not-allowed">
                  Deadline Expired
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

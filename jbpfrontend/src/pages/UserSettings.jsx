import { useState } from "react";
import { FaUpload, FaGlobe, FaFileAlt, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [resumeFiles, setResumeFiles] = useState([
    { name: "Professional Resume", size: "3.5 MB" },
    { name: "Product Designer", size: "4.7 MB" },
    { name: "Visual Designer", size: "1.3 MB" },
  ]);

  const removeFile = (index) => {
    const newFiles = [...resumeFiles];
    newFiles.splice(index, 1);
    setResumeFiles(newFiles);
  };

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Setting</h2>

      {/* Tabs (only Personal implemented visually) */}
      <div className="flex space-x-6 border-b pb-2 mb-8 text-gray-500">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Personal</button>
        <button className="hover:text-blue-600">Profile</button>
        <button className="hover:text-blue-600">Social Links</button>
        <button className="hover:text-blue-600">Account Setting</button>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col justify-center items-center text-center h-[180px]">
          <FaUpload className="text-gray-400 text-3xl mb-2" />
          <p className="text-gray-600 font-medium">Browse photo or drop here</p>
          <p className="text-xs text-gray-400">
            A photo larger than 400 pixels works best. Max size 5 MB.
          </p>
        </div>

        {/* Form Fields */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="border rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Title/headline"
            className="border rounded px-4 py-2 w-full"
          />
          <select className="border rounded px-4 py-2 w-full">
            <option>Experience</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>Educations</option>
          </select>
          <div className="col-span-2 flex items-center border rounded px-4 py-2">
            <FaGlobe className="text-gray-400 mr-2" />
            <input
              type="url"
              placeholder="Website url..."
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      <button className="mt-6 bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>

      {/* Resume Section */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Your Cv/Resume</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {resumeFiles.map((file, index) => (
            <div key={index} className="border rounded-md p-4 relative">
              <FaFileAlt className="text-2xl text-blue-600 mb-2" />
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500 mb-2">{file.size}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFile(index)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {/* Add CV */}
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center h-[120px]">
            <FaPlus className="text-gray-400 text-xl mb-1" />
            <p className="text-sm">Add Cv/Resume</p>
            <p className="text-xs text-gray-400">Browse file or drop here. only pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaSearch,FaCcVisa, FaCcStripe, FaCcPaypal, FaCcApplePay} from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { HiBriefcase, HiUserGroup } from "react-icons/hi";
import { LuBuilding2 } from "react-icons/lu";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
    <nav className="flex items-center justify-between px-6 h-[100px] border-b shadow-sm">
      {/* Left: Logo */}
      <div className="flex flex-col items-center justify-center w-[200px]">
        <img
          src="/Print.svg" // Replace with your logo path
          alt="Logo"
          className="h-[60px] w-auto mb-1"
        />
        <div className="text-xs font-semibold tracking-widest text-center leading-none">
          <div className="text-black">J B P</div>
          <div className="text-gray-700">JOB BOARD PLATFORM</div>
        </div>
      </div>

      {/* Right: Search Bar + Sign In */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search Bar */}
        <div className="flex items-center border rounded-md px-3 py-2 shadow-sm w-[400px]
        hover:border-blue-500 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-300 transition">
          <FaSearch className="text-blue-600 mr-2" size={14} />
          <input
            type="text"
            placeholder="Job title, keyword, company"
            className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Sign In Button */}
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
          <Link to="/signin">Sign In</Link>
        </button>
      </div>
    </nav>

    <section className="bg-[#f7f8fc] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Text & Search */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Find a job that suits <br /> your interest & skills.
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Discover thousands of job opportunities tailored to your skills and experience. Whether you're starting your career or looking for your next big move, JBP helps you connect with top companies across industries.
          </p>


          {/* Search Bar */}
          <div className="bg-white rounded-md shadow-md p-3 w-full max-w-xl mb-3">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/2
              hover:border-blue-500 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-300 transition">
                <FaSearch className="text-blue-600 mr-2" />
                <input
                  type="text"
                  placeholder="Job title, Keyword..."
                  className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/2
              hover:border-blue-500 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-300 transition">
                <MdLocationOn className="text-blue-600 mr-2" />
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm whitespace-nowrap">
                Find Job
              </button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="text-sm text-gray-600">
            <span className="mr-1">Suggestion:</span>
            <span>Designer,</span>
            <span className="ml-1">Programing,</span>
            <span className="ml-1 text-blue-600 font-medium">Digital Marketing,</span>
            <span className="ml-1">Video,</span>
            <span className="ml-1">Animation.</span>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex-1">
          <img
            src="/Illustration.png" // replace with your image path
            alt="Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 hover:border hover:border-blue-100 active:scale-[0.98]">
          <HiBriefcase className="text-blue-500 text-3xl bg-blue-100 p-2 rounded-md" />
          <div>
            <div className="text-xl font-semibold text-gray-900">1,75,324</div>
            <div className="text-sm text-gray-500">Live Job</div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 hover:border hover:border-blue-100 active:scale-[0.98]">
          <LuBuilding2 className="text-blue-500 text-3xl bg-blue-100 p-2 rounded-md" />
          <div>
            <div className="text-xl font-semibold text-gray-900">97,354</div>
            <div className="text-sm text-gray-500">Companies</div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 hover:border hover:border-blue-100 active:scale-[0.98]">
          <HiUserGroup className="text-blue-500 text-3xl bg-blue-100 p-2 rounded-md" />
          <div>
            <div className="text-xl font-semibold text-gray-900">38,47,154</div>
            <div className="text-sm text-gray-500">Candidates</div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 hover:border hover:border-blue-100 active:scale-[0.98]">
          <HiBriefcase className="text-blue-500 text-3xl bg-blue-100 p-2 rounded-md" />
          <div>
            <div className="text-xl font-semibold text-gray-900">7,532</div>
            <div className="text-sm text-gray-500">New Jobs</div>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & About */}
        <div>
          <img
            src="/Print.svg" // replace with your footer logo
            alt="JBP"
            className="h-10 mb-4"
          />
          <p>
            JBP is a smart job search and recruitment platform that connects job seekers with
            employers. With fast search, professional resume building, and intelligent matching,
            JBP makes hiring and job hunting easy and efficient.
          </p>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our services</h3>
          <ul className="space-y-2">
            <li>Find job</li>
            <li>Create resume</li>
            <li>Search company</li>
            <li>Pricing Plan</li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Help center</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center gap-3 mb-4 text-lg">
            <FaInstagram className="text-white" />
            <FaFacebookF className="text-white" />
            <FaWhatsapp className="text-white" />
            <FaLinkedinIn className="text-white" />
            <FaXTwitter className="text-white" />
          </div>
          <div className="flex items-start gap-2 mb-2">
            <MdLocationOn className="text-xl text-white mt-1" />
            <p>1500 Marilla St, Dallas, TX 75201</p>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-xl text-white" />
            <p>1 (847) 558-5560</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#eaeaea] py-4 px-6 flex flex-col md:flex-row items-center justify-between text-gray-800 text-sm">
        <p className="mb-2 md:mb-0">JBP Copyright © 2024</p>
        <div className="flex items-center gap-3 text-xl">
          <FaCcVisa />
          <FaCcStripe />
          <FaCcPaypal />
          <FaCcApplePay />
        </div>
      </div>
    </footer>
    </>
  );
}

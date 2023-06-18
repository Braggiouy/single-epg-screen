import React from "react";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      {/* Profile Icon */}
      <div className="hidden md:block">
        <img
          src="/path/to/profile-icon.png"
          alt="Profile Icon"
          className="h-8 w-8"
        />
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/path/to/company-logo.png"
          alt="Company Logo"
          className="h-12 w-12"
        />
      </div>

      {/* Search Box or Magnifier Icon */}
      <div className="flex items-center">
        {/* Mobile and Tablet View */}
        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1.5 rounded-md bg-gray-700 text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

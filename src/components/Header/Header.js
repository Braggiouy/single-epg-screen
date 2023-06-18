import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-black text-white">
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
          <a href="#" className="text-xl text-white">
            <FontAwesomeIcon icon={faSearch} />
          </a>
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

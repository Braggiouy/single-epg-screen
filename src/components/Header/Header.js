import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-black text-white">
      {/* Profile Icon */}
      <div className="hidden md:block">
        <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img src="/company-logo.png" alt="Company Logo" className="h-4 w-4" />
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

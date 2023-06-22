import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faHeart,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black py-4 w-full z-50 ">
      <div className="container mx-auto px-4 py-6 flex justify-center items-center">
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="text-xl text-white">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="#" className="text-xl text-white">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className="text-xl text-custom-text-gold">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#" className="text-xl text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="text-xl text-white">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
      </div>
    </footer>
  );
}

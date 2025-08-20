import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-6 py-3">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-2xl" />
        <h1 className="text-2xl font-bold text-pink-500">ClarityBoost</h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6"> {/* hidden on small screens, flex on medium+ */}
        <li>
          <Link to="/" className="hover:text-pink-400 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/upload" className="hover:text-pink-400 transition-colors duration-200">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-pink-400 transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-pink-400 transition-colors duration-200">
            Contact
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="bg-white text-black px-4 py-1 rounded-lg hover:bg-gray-200 transition-colors duration-200">
          Login
        </button>
        <button className="bg-pink-500 text-white px-4 py-1 rounded-lg hover:bg-pink-600 transition-colors duration-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


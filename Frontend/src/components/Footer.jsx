import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      
      {/* Grid container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Logo & Brand */}
        <div className="flex flex-col gap-2">
          <img src={logo} alt="ClarityBoost Logo" className="h-12 w-12 rounded-2xl" />
          <h1 className="text-2xl font-bold text-pink-500">ClarityBoost</h1>
          <p className="text-gray-400 text-sm mt-2">
            Enhance your images instantly with AI-powered tools.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-gray-300"> 
            <li><Link to="/" className="hover:text-pink-500 transition-colors">Home</Link></li>
            <li><Link to="/upload" className="hover:text-pink-500 transition-colors">Upload</Link></li>
            <li><Link to="/about" className="hover:text-pink-500 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-300 mb-2">Email: support@clarityboost.com</p>
          <p className="text-gray-300 mb-2">Phone: +91 8369411598</p>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © 2025 ClarityBoost. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;



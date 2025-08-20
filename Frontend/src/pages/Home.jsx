import React from "react";
import { Link } from "react-router-dom";
//import heroImage from "../assets/hero-image.png"; // placeholder image

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Enhance Your Images Instantly
            </h1>
            <p className="mb-6 text-lg md:text-xl text-white/90">
              ClarityBoost uses AI-powered tools to improve image clarity,
              reduce noise, and restore details in seconds.
            </p>
            <Link
              to="/upload"
              className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Upload Your Image
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80"
              alt="AI Image Enhancement"
              className="w-full max-w-md rounded-2xl shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Why Choose ClarityBoost?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">
                Instant Enhancement
              </h3>
              <p className="text-gray-600">
                Enhance your images in seconds with AI-powered algorithms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">
                Restore details and reduce noise for professional-looking
                images.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple interface for uploading, previewing, and downloading
                images.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

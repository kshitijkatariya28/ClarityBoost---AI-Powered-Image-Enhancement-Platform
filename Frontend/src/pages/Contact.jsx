import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Get in Touch
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Have questions or feedback? We’d love to hear from you.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600">
            <span className="font-medium">Email Support:</span>{" "}
            support@clarityboost.com
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Business Inquiries:</span>{" "}
            business@clarityboost.com
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Location:</span> ClarityBoost HQ,
            New Delhi, India
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Twitter
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

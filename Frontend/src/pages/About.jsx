import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center border-b pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight">ClarityBoost</h1>
          <p className="text-lg text-gray-600 mt-2">
            AI Powered Image Enhancement Platform
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-300 pl-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-7">
            ClarityBoost is an advanced AI-powered image enhancement platform
            designed to transform ordinary, low-quality photos into sharp,
            professional-grade visuals. Whether you are a photographer, content
            creator, marketer, or casual user, ClarityBoost empowers you to
            improve image clarity, restore lost details, and remove noise
            effortlessly.
          </p>
        </section>

        {/* Features (Card layout) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-300 pl-3">
            Key Features
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
              <h3 className="text-lg font-semibold mb-1">Instant Upload & Process</h3>
              <p className="text-gray-600 text-sm">
                Simple image upload with fast AI processing for quick results.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
              <h3 className="text-lg font-semibold mb-1">Before/After Slider</h3>
              <p className="text-gray-600 text-sm">
                Real-time comparison slider to visualize enhancements clearly.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
              <h3 className="text-lg font-semibold mb-1">One-Click Download</h3>
              <p className="text-gray-600 text-sm">
                Export the enhanced image instantly in high quality.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
              <h3 className="text-lg font-semibold mb-1">Clean, Responsive UI</h3>
              <p className="text-gray-600 text-sm">
                Minimal, distraction-free layout that works on all devices.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack (Card layout) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-300 pl-3">
            Tech Stack
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-1">MERN Stack</h3>
              <p className="text-gray-600 text-sm">
                MongoDB, Express.js, React, Node.js for a scalable, end-to-end app.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-1">AI Integration</h3>
              <p className="text-gray-600 text-sm">
                Residual Network-based models via HuggingFace API for enhancement.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-1">UI & State</h3>
              <p className="text-gray-600 text-sm">
                Tailwind CSS, React Router, Context API; smooth, maintainable UI.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-1">Networking & Utils</h3>
              <p className="text-gray-600 text-sm">
                Axios for API calls, secure request handling, and error boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-3 border-t pt-6">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-300 pl-3">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-7">
            Our mission is to make professional-grade image enhancement simple,
            accessible, and efficient for everyone—reducing the gap between
            complex editing software and everyday users with a seamless, intuitive
            experience.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;




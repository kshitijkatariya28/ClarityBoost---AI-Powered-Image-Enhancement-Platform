// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()

    let handleSubmit = (event)=>{
        event.preventDefault()
        navigate("/")
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md mx-auto p-8 bg-white rounded-xl  shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 p-5">
          Login to ClarityBoost
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label className="font-bold text-lg text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-gray-500 p-2 rounded-md"
              type="email"
              id="email"
              placeholder="Enter email"
              required
            />

            <label
              className="font-bold text-lg text-gray-700 mt-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-2 border-gray-500 p-2 rounded-md"
              type="password"
              id="password"
              placeholder="Enter email"
              required
            />

            <button className="bg-black text-white p-2 mt-10 rounded-md hover:bg-gray-800  shadow-2xl w-24 mx-auto ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

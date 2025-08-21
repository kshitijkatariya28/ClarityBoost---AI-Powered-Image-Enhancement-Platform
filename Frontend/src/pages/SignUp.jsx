import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   let navigate = useNavigate()

   let handleSubmit = (event)=>{
        event.preventDefault()
        navigate("/login")
   }

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className=" w-full max-w-md mx-auto  shadow-lg ">
        <h1 className="font-bold text-2xl text-center p-7">
          SignUp to ClarityBoost
        </h1>
        <form onSubmit={handleSubmit} >
          <div className="flex flex-col gap-3 p-5">
            <label className="text-lg font-bold text-gray-700" htmlFor="">
              First Name
            </label>
            <input
              type="text"
              className="border-2 border-gray-500 p-1 rounded-md"
              placeholder="First Name"
            />

            <label className="text-lg font-bold text-gray-700 mt-3" htmlFor="">
              Last Name
            </label>
            <input
              type="text"
              className="border-2 border-gray-500 p-1 rounded-md"
              placeholder="Last Name"
            />

            <label
              className="font-bold text-lg text-gray-700 mt-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 border-gray-500 p-1 rounded-md"
              type="email"
              id="email"
              placeholder="Enter Email"
              required
            />

            <label
              className="font-bold text-lg text-gray-700 mt-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-2 border-gray-500 p-1 rounded-md"
              type="password"
              id="password"
              placeholder="Enter Password"
              required
            />

            <button className="bg-black p-2 w-24 mx-auto rounded-xl mt-10 text-white m-3">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-[375px] h-[812px] bg-white rounded-3xl shadow-xl flex flex-col justify-end px-6 pb-10">

        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome to PopX
        </h2>

        <p className="text-gray-500 mt-3">
          Lorem ipsum dolor sit amet,
        </p>
        <p className="text-gray-500">
          consectetur adipiscing elit,
        </p>

        <div className="mt-8 flex flex-col gap-4">
          
          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-lg font-medium"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-purple-200 text-purple-800 py-3 rounded-lg font-medium"
          >
            Already Registered? Login
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;

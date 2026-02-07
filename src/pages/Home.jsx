import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 overflow-hidden">
      
      <div className="w-[375px] h-full max-h-[812px] bg-white rounded-3xl shadow-xl flex flex-col justify-end overflow-hidden">

        <div className="px-6 pb-10">

          <h2 className="text-[22px] font-semibold text-gray-900">
            Welcome to PopX
          </h2>

          <p className="text-gray-500 mt-3 text-sm leading-6">
            Lorem ipsum dolor sit amet,
          </p>
          <p className="text-gray-500 text-sm leading-6">
            consectetur adipiscing elit,
          </p>

          <div className="mt-8 flex flex-col gap-4">
            
            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-purple-500"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 rounded-lg font-medium bg-purple-200 text-purple-800"
            >
              Already Registered? Login
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;

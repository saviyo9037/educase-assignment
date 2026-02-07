import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh]   bg-white  flex items-center justify-center">
      <div className="w-full max-w-[375px] min-h-[100dvh] bg-gray-100 flex flex-col">
        <div className="flex-grow"></div>

        <div className="px-6 pb-8">
          <h2 className="text-[28px] font-semibold text-gray-900">
            Welcome to PopX
          </h2>

          <p className="text-gray-500 mt-1 text-[18px] leading-6">
            Lorem ipsum dolor sit amet,
          </p>
          <p className="text-gray-500 text-[18px]  leading-6">
            consectetur adipiscing elit,
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 text-[18px] rounded-lg text-white font-medium bg-gradient-to-r bg-[#9249e7]"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 rounded-lg font-medium bg-gray-300 text-black"
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

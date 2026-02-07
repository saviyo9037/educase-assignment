import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email && password;

  const handleLogin = () => {
    if (!isValid) return;

    const userData = {
      fullName: "User",
      email: email,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/account", { state: userData });
  };

  return (
    <div className="min-h-[100dvh] flex justify-center bg-gray-00">
      <div className="w-[375px] h-[812px] bg-gray-100 px-6 pt-10 flex flex-col">
        <div>
          <h1 className="text-[28px] font-[600] text-gray-900 leading-[34px]">
            Signin to your <br /> PopX account
          </h1>

          <p className="text-gray-500 text-[16px] mt-4 leading-6">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[12px] font-[500] text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] placeholder-gray-400 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[12px] font-[500] text-purple-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] placeholder-gray-400 focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        {/* <div className="flex-grow"></div> */}

        <div className="pb-8 mt-6">
          <button
            onClick={handleLogin}
            disabled={!isValid}
            className={`w-full py-3 rounded-lg text-[16px] font-[500] transition
              ${
                isValid
                  ? "bg-gradient-to-r bg-[#9249e7] text-white"
                  : "bg-gray-300 text-white cursor-not-allowed"
              }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

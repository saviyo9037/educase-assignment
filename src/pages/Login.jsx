import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    const userData = {
      fullName: "User", // default name
      email: email,
    };

 
    localStorage.setItem("user", JSON.stringify(userData));


    navigate("/account", { state: userData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] h-[812px] bg-white rounded-3xl shadow-xl px-6 py-10">

        <h2 className="text-2xl font-semibold mb-6">
          Signin to your PopX account
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-3 border rounded-lg mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!data.success) return alert(data.message);

    localStorage.setItem("loggedUser", JSON.stringify(data.user));
    navigate(`/user-dashboard/${data.user.id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={login} className="w-full bg-black text-white p-2 rounded">
        Login
      </button>
    </div>
  );
};

export default UserLogin;

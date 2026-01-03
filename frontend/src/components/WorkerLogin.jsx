import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const WorkerLogin = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    const res = await fetch(`${API}/workers/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    localStorage.setItem("loggedWorker", JSON.stringify(data.worker));
    navigate(`/worker-dashboard/${data.worker.id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Worker Login</h2>

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border p-2 mb-4 rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={login}
        className="w-full bg-black text-white py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default WorkerLogin;

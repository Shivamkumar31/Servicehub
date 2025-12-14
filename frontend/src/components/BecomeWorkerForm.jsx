import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BecomeWorkerForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    phone: "",
    experience: "",
    address: "",
    lat: null,
    lng: null,
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((prev) => ({
          ...prev,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }));
        alert("Location captured ✅");
      },
      () => alert("Location permission denied ❌")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.lat || !form.lng) {
      alert("Please share your location");
      return;
    }

    const res = await fetch("http://localhost:5000/workers/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // ✅ SAVE LOGGED-IN WORKER
    localStorage.setItem("loggedWorker", JSON.stringify(data.worker));

    // ✅ REDIRECT TO DASHBOARD
    navigate(`/worker-dashboard/${data.worker.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Become a Worker</h2>

      <input
        required
        placeholder="Full Name"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

<input
  required
  type="tel"
  placeholder="Phone Number"
  className="w-full border p-2 mb-3 rounded"
  onChange={(e) => setForm({ ...form, phone: e.target.value })}
/>


      <select
        required
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Service</option>
        <option>Plumbing</option>
        <option>Electrician</option>
        <option>Carpentry</option>
        <option>Tutoring</option>
        <option>Photography</option>
        <option>Pet Care</option>
      </select>

      <input
        required
        placeholder="Experience (years)"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
      />

      <textarea
        required
        placeholder="Full Address"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button
        type="button"
        onClick={getLocation}
        className="w-full bg-yellow-500 text-white py-2 mb-3 rounded"
      >
        Share Location
      </button>

      <button className="w-full bg-black text-white py-2 rounded">
        Register / Login as Worker
      </button>
    </form>
  );
};

export default BecomeWorkerForm;

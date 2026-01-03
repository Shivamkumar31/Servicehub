import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationSearch from "./LocationSearch";
const API = import.meta.env.VITE_API_URL;
const BecomeWorkerForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    experience: "",
    address: "",
    lat: null,
    lng: null,
    photo: null,
  });

  const submit = async (e) => {
    e.preventDefault();

    if (!form.lat || !form.lng) {
      alert("Please select your location");
      return;
    }

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));

    const res = await fetch(`${API}/workers/register`, {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    if (!data.success) return alert(data.message);

    localStorage.setItem("loggedWorker", JSON.stringify(data.worker));
    navigate(`/worker-dashboard/${data.worker.id}`);
  };

  return (
    <form
      onSubmit={submit}
      className="
        max-w-md mx-auto
        p-8 bg-white rounded-xl shadow-lg
        space-y-4
      "
    >
      <h2 className="text-2xl font-bold text-center mb-2">
        Become a Worker
      </h2>

      <input
        placeholder="Name"
        required
        className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        required
        className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <select
        required
        className="w-full border rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500"
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
        placeholder="Experience (years)"
        required
        className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
      />

      {/* Location */}
      <div className="pt-2">
        <LocationSearch
          onSelect={(loc) =>
            setForm({ ...form, address: loc.address, lat: loc.lat, lng: loc.lng })
          }
        />
      </div>

      {/* File Upload */}
      <div className="pt-2">
        <label className="block text-sm font-medium mb-1">
          Profile Photo
        </label>
        <input
          type="file"
          required
          accept="image/*"
          className="
            w-full text-sm
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700
          "
          onChange={(e) =>
            setForm({ ...form, photo: e.target.files[0] })
          }
        />
      </div>

      <button
        className="
          w-full mt-4
          bg-black text-white
          py-3 rounded-md
          font-semibold
          hover:bg-gray-900
          transition
        "
      >
        Register
      </button>
    </form>
  );
};

export default BecomeWorkerForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationSearch from "../components/LocationSearch";
const API = import.meta.env.VITE_API_URL;
const UserRegister = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    address: "",
    lat: null,
    lng: null,
  });

  const navigate = useNavigate();

  const register = async () => {
    if (!form.lat || !form.lng) {
      alert("Please select location");
      return;
    }

    const res = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!data.success) return alert(data.message);

    localStorage.setItem("loggedUser", JSON.stringify(data.user));
    navigate(`/user-dashboard/${data.user.id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>

      <input
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <LocationSearch
        onSelect={loc =>
          setForm({
            ...form,
            address: loc.address,
            lat: loc.lat,
            lng: loc.lng,
          })
        }
      />

      <button
        onClick={register}
        className="w-full bg-black text-white p-2 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default UserRegister;

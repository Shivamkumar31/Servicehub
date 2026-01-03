import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const UserDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login-user");
      return;
    }

    fetch(`${API}/bookings/user/${id}`)
      .then((res) => res.json())
      .then(setBookings)
      .catch(console.error);
  }, [id, navigate, user]);

  // ✅ FIXED LOGOUT
  const logout = () => {
    localStorage.removeItem("loggedUser");

    // 🔴 IMPORTANT: remove search location too
    localStorage.removeItem("searchLat");
    localStorage.removeItem("searchLng");

    // ✅ FORCE FULL RESET
    window.location.replace("/login-user");
  };

  const displayName = user?.email
    ? user.email.split("@")[0]
    : "User";

  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex container mx-auto mt-6 gap-6">

      {/* LEFT */}
      <div className="w-1/4 bg-white shadow rounded p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl">
            {avatarLetter}
          </div>
          <div>
            <p className="text-sm">Hello,</p>
            <p className="font-bold">{displayName}</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>

      {/* RIGHT */}
      <div className="w-3/4 bg-white shadow rounded p-6">
        <h2 className="text-xl font-bold mb-4">My Bookings</h2>

        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          bookings.map((b) => (
            <div key={b.id} className="border p-4 mb-3 rounded">
              <p><b>Worker:</b> {b.workerName}</p>
              <p><b>Status:</b> {b.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

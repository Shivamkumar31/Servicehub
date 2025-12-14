import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDashboard = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:5000/bookings/user/${id}`)
    .then(res => res.json())
    .then(setBookings);
}, [id]);


  const logout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  return (
    <div className="flex container mx-auto mt-6 gap-6">

      {/* LEFT */}
      <div className="w-1/4 bg-white shadow rounded p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl">
            {user.username[0].toUpperCase()}
          </div>
          <div>
            <p className="text-sm">Hello,</p>
            <p className="font-bold">{user.username}</p>
          </div>
        </div>

        <button onClick={logout} className="text-red-600">Logout</button>
      </div>

      {/* RIGHT */}
      <div className="w-3/4 bg-white shadow rounded p-6">
        <h2 className="text-xl font-bold mb-4">My Bookings</h2>

        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          bookings.map(b => (
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

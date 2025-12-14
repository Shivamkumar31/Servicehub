import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkerDashboard = () => {
  const { workerId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState(0);

  // Fetch worker bookings
  const fetchBookings = async () => {
    const res = await fetch(
      `http://localhost:5000/bookings/worker/${workerId}`
    );
    const data = await res.json();
    setBookings(data);

    // 🔥 Count new/pending bookings
    const pending = data.filter((b) => b.status === "PENDING").length;
    setNotifications(pending);
  };

  // Load at mount
  useEffect(() => {
    fetchBookings();
  }, []);

  // Accept / Reject handler
  const updateStatus = async (bookingId, status) => {
    await fetch(`http://localhost:5000/bookings/${bookingId}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    setMessage(`Booking ${status.toLowerCase()} ✅`);
    fetchBookings();
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("loggedWorker");
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Worker Dashboard</h1>

        <div className="relative">
          {/* Notification Button */}
          <button className="relative bg-gray-800 text-white px-4 py-2 rounded-full">
            Dashboard
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="ml-4 bg-black text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}

      {/* BOOKINGS */}
      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="border p-4 rounded bg-white shadow">
              <p><b>Customer Address:</b> {b.address}</p>
              <p><b>Date:</b> {b.date}</p>
              <p><b>Time:</b> {b.time}</p>

              <p>
                <b>Status:</b>{" "}
                <span
                  className={
                    b.status === "PENDING"
                      ? "text-yellow-600"
                      : b.status === "ACCEPTED"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {b.status}
                </span>
              </p>

              {/* SHOW ACCEPT/REJECT ONLY IF PENDING */}
              {b.status === "PENDING" && (
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => updateStatus(b.id, "ACCEPTED")}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => updateStatus(b.id, "REJECTED")}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkerDashboard;

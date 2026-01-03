import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import LocationSearch from "./LocationSearch";

const BookingForm = ({ worker, onClose, onSubmit }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleSubmit = () => {
    if (!loggedUser) {
      alert("Please login to book a service");
      return;
    }

    if (!date || !time || !address || !lat || !lng) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ Save USER LOCATION (for distance)
    const updatedUser = {
      ...loggedUser,
      lat,
      lng,
      address,
    };
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

    onSubmit({
      workerId: worker.id,
      workerName: worker.name,
      userId: loggedUser.id,
      date,
      time,
      address,
      lat,
      lng,
      notes,
      image,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl w-full max-w-md relative">

        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Book {worker.name}
        </h2>

        <div className="space-y-4">

          {/* DATE */}
          <input
            type="date"
            className="w-full border px-3 py-2 rounded-md"
            onChange={(e) => setDate(e.target.value)}
          />

          {/* TIME */}
          <input
            type="time"
            className="w-full border px-3 py-2 rounded-md"
            onChange={(e) => setTime(e.target.value)}
          />

          {/* LOCATION SEARCH */}
          <LocationSearch
            onSelect={(loc) => {
              setAddress(loc.address);
              setLat(loc.lat);
              setLng(loc.lng);
            }}
          />

          {/* NOTES */}
          <textarea
            placeholder="Describe the problem"
            className="w-full border px-3 py-2 rounded-md h-24"
            onChange={(e) => setNotes(e.target.value)}
          />

          {/* IMAGE */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
          />
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-600 text-white rounded-md"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingForm;

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const BookingForm = ({ worker, onClose, onSubmit }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);


  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Show image preview
    }
  };

const handleSubmit = () => {
if (!loggedUser) {
    alert("Please login to book a service");
    return;
  }

  if (!date || !time || !address) {
    alert("Please fill all fields!");
    return;
  }

  onSubmit({
    workerId: worker.id,        // ✅ REQUIRED
    workerName: worker.name,
   //// UPDATED to include userId

    // ✅ ADD THIS
    userId: loggedUser.id,
    date,
    time,
    address,
    notes,
    image,
  });

  onClose();
};

  return (
    // ⭐ FIXED — No more dark background
    <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">

      {/* Animated Popup Box */}
      <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl w-full max-w-md animate-scaleIn relative">

        {/* Close Button */}
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
          <div>
            <label className="font-semibold">Select Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* TIME */}
          <div>
            <label className="font-semibold">Select Time</label>
            <input
              type="time"
              className="w-full border px-3 py-2 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="font-semibold">Address</label>
            <input
              type="text"
              placeholder="Your home address"
              className="w-full border px-3 py-2 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* PROBLEM DESCRIPTION */}
          <div>
            <label className="font-semibold">Describe the Problem</label>
            <textarea
              placeholder="Explain the issue..."
              className="w-full border px-3 py-2 rounded-md mt-1 h-24 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="font-semibold">Upload Problem Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="w-full mt-1"
              onChange={handleImageSelect}
            />

            {/* Image Preview */}
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mt-3 w-full h-40 object-cover rounded-md"
              />
            )}
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>




  );
};

export default BookingForm;

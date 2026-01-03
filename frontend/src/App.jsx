import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedServices from "./components/FeaturedServices";
import WorkerList from "./components/WorkerList";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import BecomeWorkerForm from "./components/BecomeWorkerForm";
import SetUserLocation from "./components/SetUserLocation";

import WorkerLogin from "./components/WorkerLogin";
import WorkerDashboard from "./pages/WorkerDashboard";
import UserDashboard from "./pages/UserDashboard";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

import { services } from "./data/mockdata";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredServices = selectedCategory
    ? services.filter((s) => s.category === selectedCategory)
    : services;

  // ✅ booking submit
  const handleBookingSubmit = async (booking) => {
    try {
    const API = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const data = await res.json();

      <WorkerList onSelectWorker={setSelectedWorker} />

      localStorage.setItem("bookingId", data.booking.id);
      setBookingSuccess(true);
      setSelectedWorker(null);
    } catch (err) {
      console.error("Booking failed", err);
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Routes>
        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <main className="container mx-auto px-4">
              <Hero />

              <Categories
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  setSelectedWorker(null);
                  setBookingSuccess(false);
                }}
              />

              <FeaturedServices
                services={filteredServices}
                onSelectService={(category) => {
                  setSelectedCategory(category);
                  setSelectedWorker(null);
                  setBookingSuccess(false);
                }}
              />

              {selectedCategory && (
                <WorkerList
                  selectedCategory={selectedCategory}
                  onSelectWorker={setSelectedWorker}
                />
              )}

              {selectedWorker && (
                <BookingForm
                  worker={selectedWorker}
                  onClose={() => setSelectedWorker(null)}
                  onSubmit={handleBookingSubmit}
                />
              )}

              {bookingSuccess && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-sm text-center">
                    <h2 className="text-xl font-bold mb-2 text-green-600">
                      Booking Request Sent!
                    </h2>
                    <p className="text-gray-600">
                      Worker will respond within <b>1 minute</b>.
                    </p>
                    <button
                      className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-md"
                      onClick={() => setBookingSuccess(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </main>
          }
        />

        {/* ================= WORKERS PAGE ================= */}
        {/* 🔴 THIS ROUTE WAS MISSING */}
        <Route
          path="/workers"
          element={
            <main className="container mx-auto px-4 py-6">
              <WorkerList
                selectedCategory={selectedCategory}
                onSelectWorker={setSelectedWorker}
              />
            </main>
          }
        />

        {/* ================= USER ================= */}
        <Route path="/login-user" element={<UserLogin />} />
        <Route path="/register-user" element={<UserRegister />} />
        <Route path="/set-location" element={<SetUserLocation />} />
        <Route path="/user-dashboard/:id" element={<UserDashboard />} />

        {/* ================= WORKER ================= */}
        <Route
          path="/login-worker"
          element={
            <main className="container mx-auto px-4 py-10">
              <WorkerLogin />
            </main>
          }
        />

        <Route
          path="/become-worker"
          element={
            <main className="container mx-auto px-4 py-10">
              <BecomeWorkerForm />
            </main>
          }
        />

        <Route
          path="/worker-dashboard/:workerId"
          element={<WorkerDashboard />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

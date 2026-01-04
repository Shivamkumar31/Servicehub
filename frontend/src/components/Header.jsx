import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/helpkart_logo_icon.png";
const API = import.meta.env.VITE_API_URL;
const Header = () => {
  const [pendingWorkerCount, setPendingWorkerCount] = useState(0);
  const [pendingUserCount, setPendingUserCount] = useState(0);

  // ---- SAFE LOCALSTORAGE PARSE ----
  const getStored = (key) => {
    try {
      const item = localStorage.getItem(key);
      if (!item || item === "undefined") return null;
      return JSON.parse(item);
    } catch {
      return null;
    }
  };

  const loggedWorker = getStored("loggedWorker");
  const loggedUser = getStored("loggedUser");

  // ---- WORKER NOTIFICATION COUNT ----
  useEffect(() => {
    if (!loggedWorker) return;

    fetch(`${API}/bookings/worker/${loggedWorker.id}`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.filter((b) => b.status === "PENDING").length;
        setPendingWorkerCount(count);
      });
  }, [loggedWorker]);

  // ---- USER NOTIFICATION COUNT ----
  useEffect(() => {
    if (!loggedUser) return;

    fetch(`${API}/bookings/user/${loggedUser.id}`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.filter((b) => b.status === "ACCEPTED").length;
        setPendingUserCount(count);
      });
  }, [loggedUser]);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="HelpKart Logo" className="w-10 h-10 rounded-lg" />
          <h1 className="text-2xl font-bold text-gray-900">
            Help<span className="text-yellow-500">Kart</span>
          </h1>
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/">Services</Link>
          </li>

          {loggedWorker && (
            <Link to={`/worker-dashboard/${loggedWorker.id}`} className="relative font-medium">
              Dashboard
              {pendingWorkerCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {pendingWorkerCount}
                </span>
              )}
            </Link>
          )}

          {loggedUser && (
            <Link to={`/user-dashboard/${loggedUser.id}`} className="relative font-medium">
              My Bookings
              {pendingUserCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {pendingUserCount}
                </span>
              )}
            </Link>
          )}

          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center space-x-4">

          {/* USER LOGGED OUT */}
          {!loggedWorker && !loggedUser && (
            <div className="flex items-center space-x-4">

              {/* WORKER DROPDOWN */}
              <div className="relative group">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black transition">
                  Become a Worker
                </button>

                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg
                                opacity-0 group-hover:opacity-100 group-hover:translate-y-1
                                transition-all duration-200 invisible group-hover:visible">
                  <Link
                    to="/login-worker"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-100 hover:text-yellow-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/become-worker"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-100 hover:text-yellow-600"
                  >
                    Register
                  </Link>
                </div>
              </div>

              {/* USER DROPDOWN */}
              <div className="relative group">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black transition">
                  User
                </button>

                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg
                                opacity-0 group-hover:opacity-100 group-hover:translate-y-1
                                transition-all duration-200 invisible group-hover:visible">
                  <Link
                    to="/login-user"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register-user"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  >
                    Register
                  </Link>
                </div>
              </div>

            </div>
          )}

          {/* WORKER ICON */}
          {loggedWorker && (
            <Link
              to={`/worker-dashboard/${loggedWorker.id}`}
              className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center"
            >
              {loggedWorker.name?.charAt(0)}
            </Link>
          )}

          {/* USER ICON */}
          {loggedUser && (
            <Link
              to={`/user-dashboard/${loggedUser.id}`}
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center"
            >
              {loggedUser.name?.charAt(0)}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
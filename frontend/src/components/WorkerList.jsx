import { useEffect, useState } from "react";

const WorkerList = ({ selectedCategory, onSelectWorker }) => {
  const [workers, setWorkers] = useState([]);
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // api url
const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let url = "";

    if (loggedUser?.lat && loggedUser?.lng) {
      url = `${API}/workers/with-distance?lat=${loggedUser.lat}&lng=${loggedUser.lng}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
    } else {
      url = selectedCategory
        ? `${API}/workers/category/${selectedCategory}`
        : `${API}/workers`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch workers");
        return res.json();
      })
      .then(setWorkers)
      .catch(() => setWorkers([]));
  }, [selectedCategory]);

  if (!workers.length) {
    return <p className="text-center mt-10 text-gray-500">No workers available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {workers.map((w) => (
        <div
          key={w.id}
          onClick={() => onSelectWorker(w)}
          className="
            bg-white rounded-xl border border-gray-200
            p-4 cursor-pointer
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          {/* TOP */}
          <div className="flex items-center gap-4">
            <img
              src={`http://localhost:5000${w.photo}`}
              alt={w.name}
              className="w-14 h-14 rounded-full object-cover border"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 leading-tight">
                {w.name}
              </h3>
              <p className="text-sm text-gray-500">{w.category}</p>
            </div>
          </div>

          {/* DISTANCE */}
          <div className="mt-3">
            {w.distance ? (
              <p className="text-sm text-blue-600 font-medium">
                📍 {w.distance.toFixed(2)} km away
              </p>
            ) : (
              <p className="text-xs text-gray-400">
                Login to see nearest workers
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkerList;

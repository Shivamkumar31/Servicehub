import { useEffect, useState } from "react";

const WorkerList = ({ selectedCategory, onSelectWorker }) => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchWorkers = async () => {
      setLoading(true);
      setError(null);

      try {
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

        const res = await fetch(url, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch workers");

        const data = await res.json();
        if (isMounted) setWorkers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          if (isMounted) {
            setError("Unable to load workers. Please try again.");
            setWorkers([]);
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchWorkers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500 animate-pulse">
        Loading workers…
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        {error}
      </div>
    );
  }

  if (!workers.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No workers available
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
      {workers.map((w) => (
        <div
          key={w.id}
          onClick={() => onSelectWorker(w)}
          className="
            bg-white rounded-xl border border-gray-200
            p-4 sm:p-5
            cursor-pointer
            transition-all duration-300
            active:scale-95
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          {/* TOP */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={`${API}${w.photo}`}
              alt={w.name}
              className="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover border"
              onError={(e) => {
                e.target.src = "/avatar.png";
              }}
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base sm:text-sm leading-tight">
                {w.name}
              </h3>
              <p className="text-sm sm:text-xs text-gray-500">
                {w.category}
              </p>
<p className="text-sm sm:text-xs text-gray-500">
                {w.experience} years experience
              </p>

            </div>
          </div>

          {/* DISTANCE */}
          <div className="mt-3">
            {w.distance !== undefined ? (
              <p className="text-sm text-blue-600 font-medium">
                📍 {w.distance.toFixed(2)} km away
              </p>
            ) : (
              <p className="text-xs text-red-400">
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

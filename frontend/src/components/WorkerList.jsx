import React, { useEffect, useState } from "react";

const WorkerList = ({ selectedCategory, onSelectWorker }) => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedCategory) return;

    setLoading(true);

    fetch(`http://localhost:5000/workers/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory]);

  if (!selectedCategory) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">
        Available {selectedCategory} Workers
      </h2>

      {loading && <p>Loading workers...</p>}

      {!loading && workers.length === 0 && (
        <p className="text-gray-500">
          No workers available for this service yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((w) => (
          <div
            key={w.id}
            onClick={() => onSelectWorker(w)}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            {/* Image optional — remove if you don’t store it yet */}
            {w.image && (
              <img
                src={w.image}
                alt={w.name}
                className="w-full h-32 object-cover rounded-md"
              />
            )}

            <h3 className="font-semibold mt-3">{w.name}</h3>

            <p className="text-sm text-gray-600">
              {w.experience} years experience
            </p>

            <p className="text-xs text-gray-500 mt-1">{w.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerList;

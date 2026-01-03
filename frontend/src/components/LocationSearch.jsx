import { useState } from "react";

const LocationSearch = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async (q) => {
    setQuery(q);
    if (q.length < 3) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${q}`
    );
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="relative">
      <input
        className="w-full border p-2 rounded"
        placeholder="Enter location"
        value={query}
        onChange={(e) => search(e.target.value)}
      />

      <ul className="absolute bg-white border w-full z-10">
        {results.map((r) => (
          <li
            key={r.place_id}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onSelect({
                address: r.display_name,
                lat: r.lat,
                lng: r.lon,
              });
              setResults([]);
              setQuery(r.display_name);
            }}
          >
            {r.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSearch;

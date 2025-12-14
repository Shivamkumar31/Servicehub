import React, { useState } from "react";

const SearchBar = ({ categories, services, workers, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (text) => {
    setQuery(text);

    const q = text.toLowerCase();

    const filteredCategories = categories.filter((cat) =>
      cat.name.toLowerCase().includes(q)
    );

    const filteredServices = services.filter((srv) =>
      srv.title.toLowerCase().includes(q)
    );

    const filteredWorkers = workers.filter((w) =>
      w.name.toLowerCase().includes(q)
    );

    onSearch({
      categories: filteredCategories,
      services: filteredServices,
      workers: filteredWorkers,
    });
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search services, categories or workers..."
        className="w-full border px-4 py-2 rounded-md shadow-sm"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

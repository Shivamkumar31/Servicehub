// src/components/FeaturedServices.jsx
import React from "react";
import { services } from "../data/mockData";
import ServiceCard from "./ServiceCard";

const FeaturedServices = () => {
  return (
    // CHANGED: Reduced padding
    <div className="py-4">
      {/* CHANGED: Smaller heading, less margin */}
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        Featured Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
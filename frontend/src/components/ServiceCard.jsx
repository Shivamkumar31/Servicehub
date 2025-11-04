// src/components/ServiceCard.jsx
import React from "react";
import { StarIcon } from "../data/mockData";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      {/* CHANGED: Reduced image height */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-24 object-cover"
      />
      {/* CHANGED: Reduced padding */}
      <div className="p-2">
        {/* CHANGED: Smaller text and margin */}
        <h3 className="text-base font-semibold text-gray-800 mb-1">
          {service.title}
        </h3>
        <div className="flex items-center">
          <div className="flex text-yellow-500">
            {/* CHANGED: Smaller stars */}
            {[...Array(service.rating)].map((_, i) => (
              <StarIcon key={i} className="w-3 h-3" />
            ))}
          </div>
          {/* CHANGED: Smaller text and margin */}
          <span className="text-gray-600 text-xs ml-1">
            ({service.reviews})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
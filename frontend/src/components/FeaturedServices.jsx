// src/components/FeaturedServices.jsx
import React from "react";

const FeaturedServices = ({ services, onSelectService }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => onSelectService(service.category)} 
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <img
            src={service.image}
            className="w-full h-32 object-cover rounded-md"
            alt={service.title}
          />

          <h3 className="font-semibold mt-3">{service.title}</h3>

          <p className="text-sm text-gray-500">
            ⭐ {service.rating} ({service.reviews} reviews)
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedServices;

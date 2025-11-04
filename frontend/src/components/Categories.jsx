// src/components/Categories.jsx
import React from "react";
import { categories } from "../data/mockData";

const Categories = () => {
  return (
    <div className="py-4">
      {/* CHANGED: Changed 'justify-center' to 'justify-start' 
        to align the icons to the left.
      */}
      <div className="flex justify-start items-center space-x-4 md:space-x-8 overflow-x-auto pb-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-24 text-center group"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color} mb-2 group-hover:shadow-lg transition-shadow`}
              >
                <Icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>
              <p className="text-xs font-medium text-gray-700">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
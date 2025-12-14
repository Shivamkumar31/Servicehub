// src/components/Categories.jsx
import React from "react";
import { categories } from "../data/mockdata";

const Categories = ({ onSelectCategory }) => {
  return (
    <div className="py-6">
      <div className="flex gap-6 overflow-x-auto">

        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              onClick={() => onSelectCategory(cat.name)}
              className="flex flex-col items-center cursor-pointer group hover:scale-105 transition"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${cat.color}`}>
                <Icon className={`w-7 h-7 ${cat.iconColor}`} />
              </div>

              <p className="text-sm font-semibold mt-2">{cat.name}</p>

              <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                {cat.description}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Categories;

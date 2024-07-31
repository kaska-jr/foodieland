import React from "react";

const Nutrition = ({ name, value }: NutritionProps) => {
  return (
    <div className="py-4 border-b flex items-center justify-between">
      <h1 className="text-gray-600">{name}</h1>
      <span className="text-secondary-200 font-bold">{value}</span>
    </div>
  );
};

export default Nutrition;

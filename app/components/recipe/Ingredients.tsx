"use client";
import React from "react";
import Ingredient from "./Ingredient";
const INGREDIENTS_DATA = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet",
  },
];
const Ingredients = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-8">Ingredients</h1>
      <div>
        <p className="text-black font-bold py-4">For main dish</p>
        {INGREDIENTS_DATA.map((data) => {
          return <Ingredient key={data.id} {...data} />;
        })}
      </div>
      <div>
        <p className="text-black font-bold py-4">For the sauce</p>
        {INGREDIENTS_DATA.map((data) => {
          return <Ingredient key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Ingredients;

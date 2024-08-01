"use client";
import React from "react";
import { Ingredient } from "@/app/components";
import { INGREDIENTS_DATA } from "@/app/utils/data";

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

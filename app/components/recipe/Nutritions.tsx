import React from "react";
import Nutrition from "./Nutrition";
import { nanoid } from "nanoid";

const NUTRITION_DATA = [
  {
    id: nanoid(),
    name: "Calories",
    value: "219.9 kcal",
  },
  {
    id: nanoid(),
    name: "Total fat",
    value: "10.7 g",
  },
  {
    id: nanoid(),
    name: "Carbohydrates",
    value: "22.3 g",
  },
  {
    id: nanoid(),
    name: "Protein",
    value: "8.9 g",
  },
];

const Nutritions = () => {
  return (
    <div className="p-8 rounded-3xl bg-secondary-100 dark:bg-secondary-100 w-full h-full flex flex-col justify-between min-h-[550px] max-h-[600px]">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold pb-2">Nutrition Information</h1>
        <div className="flex flex-col">
          {NUTRITION_DATA.map((data) => {
            return (
              <Nutrition key={data.id} name={data.name} value={data.value} />
            );
          })}
        </div>
      </div>

      <p className="text-gray-400 text-center">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
  );
};

export default Nutritions;

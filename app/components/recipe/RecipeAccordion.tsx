import React from "react";
import { Expansion } from "@/app/components";
import { RECIPE_ACCORDION_DATA } from "@/app/utils/data";

const RecipeAccordion = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold py-8">Directions</h1>
      {RECIPE_ACCORDION_DATA.map((data, index) => {
        return <Expansion key={data.id} data={data} serialNo={index + 1} />;
      })}
    </div>
  );
};

export default RecipeAccordion;

import { Container, Recipe } from "@/app/components";
import { RECIPES } from "@/app/utils/data";
import React from "react";

const DeliciousRecipes = () => {
  function sliceArrayToFour(arr: RECIPE_TYPE[]) {
    return arr.slice(9, 17);
  }
  const slicedRecipes = sliceArrayToFour(RECIPES);
  return (
    <Container>
      <div className="flex flex-col md:flex-row text-center md:text-start gap-5 md:items-center py-10">
        <h1 className="font-bold clampHeader1 capitalize text-secondary-200">
          Try this delicious recipe to make your day
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {slicedRecipes.map((RECIPE) => {
          return <Recipe key={RECIPE.id} {...RECIPE} />;
        })}
      </div>
    </Container>
  );
};

export default DeliciousRecipes;

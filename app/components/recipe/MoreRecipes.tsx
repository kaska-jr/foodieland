import React from "react";
import { SectionHeader, Recipe, Container } from "@/app/components";
import { RECIPES } from "@/app/utils/data";

const MoreRecipes = () => {
  function sliceArrayToFour(arr: RECIPE_TYPE[]) {
    return arr.slice(10, 14);
  }
  const slicedRecipes = sliceArrayToFour(RECIPES);

  return (
    <div className="py-20">
      <div className="my-16">
        <SectionHeader headerText="You may like these recipe" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {slicedRecipes.map((recipe: RECIPE_TYPE) => (
            <Recipe key={recipe.id} {...recipe} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MoreRecipes;

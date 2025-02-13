import React from "react";
// import { Container, SectionHeader, Recipe } from "@/app/components";
import { RECIPES } from "../../../app/utils/data";
import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";
import Recipe from "./Recipe";

const Recipes = () => {
  function sliceArrayToFour(arr: RECIPE_TYPE[]) {
    // This function takes an array of recipes and slices a portion of it.
    return arr.slice(0, 9);
  }
  const slicedRecipes = sliceArrayToFour(RECIPES);

  return (
    <Container>
      <div className="my-20">
        <SectionHeader
          headerText="Simple and tasty recipes"
          subHeaderText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-20">
          {slicedRecipes.map((recipe, index) => {
            if (index === 5) {
              return (
                <div
                  key={recipe.id}
                  className="w-full overflow-hidden rounded-2xl max-h-[380px] lg:max-h-[350px] "
                  style={{
                    backgroundImage: `url(${recipe.recipeImg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                ></div>
              );
            }
            return <Recipe key={recipe.id} {...recipe} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Recipes;

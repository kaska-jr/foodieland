import { RECIPES } from "@/app/utils/data";
import React from "react";
import {
  Container,
  Newsletter,
  Ingredients,
  MoreRecipes,
  RecipeAccordion,
  RecipeSuggestions,
  SingleRecipeBanner,
  SingleRecipeHeader,
  Ads,
} from "@/app/components";
import Link from "next/link";

const SingleRecipe = ({ params }: { params: { recipe_id: number } }) => {
  const { recipe_id } = params;
  const recipe = RECIPES.find((recipe) => recipe.id === Number(recipe_id));
  if (recipe && recipe.name) {
    return (
      <section>
        <SingleRecipeHeader name={recipe.name} />
        <SingleRecipeBanner {...recipe} />
        <Container>
          <div className="w-full flex gap-10">
            <div className="basis-[65%]">
              <Ingredients />
              <RecipeAccordion />
            </div>
            <div className="basis-[35%]">
              <RecipeSuggestions />
              <Ads />
            </div>
          </div>
        </Container>
        <Newsletter />
        <MoreRecipes />
      </section>
    );
  } else {
    return (
      <div className="min-h-[calc(100vh-300px)] w-full flex flex-col items-center justify-center">
        <Container>
          <div className="flex items-center flex-col justify-center h-full w-full">
            Recipe not found{" "}
            <Link href="/" className="text-red-600 font-semibold">
              please check out other recipes
            </Link>
          </div>
        </Container>
      </div>
    );
  }
};

export default SingleRecipe;

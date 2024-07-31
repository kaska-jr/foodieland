import { Container, Newsletter, SectionHeader } from "@/app/components";
import Ingredients from "@/app/components/recipe/Ingredients";
import MoreRecipes from "@/app/components/recipe/MoreRecipes";
import RecipeAccordion from "@/app/components/recipe/RecipeAccordion";
import SingleRecipeBanner from "@/app/components/recipe/SingleRecipeBanner";
import SingleRecipeHeader from "@/app/components/recipe/SingleRecipeHeader";
import { RECIPES } from "@/app/utils/data";
import React from "react";

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
            <div className="basis-[35%]"></div>
          </div>
        </Container>
        <Newsletter />
        <MoreRecipes />
      </section>
    );
  } else {
    return <div>Recipe not found</div>;
  }
};

export default SingleRecipe;

import { RECIPE_SUGGESTIONS } from "@/app/utils/data";
import Link from "next/link";
import React from "react";

const RecipeSuggestions = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-8 ">Other Recipes</h1>
      <div className="flex flex-col gap-4">
        {RECIPE_SUGGESTIONS.map((data) => {
          return (
            <Link
              href={`/recipe/${data.id}`}
              key={data.id}
              className="w-full flex gap-6"
            >
              <div
                className="min-h-[120px] max-h-[150px] rounded-xl flex-1"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="flex flex-col flex-1 p-4">
                <h1 className="text-sm font-bold pb-5">{data.name}</h1>
                <p className="text-black text-xs">{data.author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeSuggestions;

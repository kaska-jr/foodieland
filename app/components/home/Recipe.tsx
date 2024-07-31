import { nanoid } from "nanoid";
import React from "react";
import Tag from "../shared/Tag";
import Loved from "./Loved";
import UnLoved from "./UnLoved";

const Recipe = ({ name, recipeImg, id, loved, time, tagText }: RECIPE_TYPE) => {
  const RecipeTagData = [
    {
      id: nanoid(),
      imgUrl: "/Timer.svg",
      text: time,
      TagClasses: "",
    },
    {
      id: nanoid(),
      imgUrl: "/ForkKnife.svg",
      text: tagText,
      TagClasses: "",
    },
  ];

  return (
    <div className="p-4 max-w-sm md:max-w-lg mx-auto overflow-hidden bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)] rounded-2xl max-h-[380px] lg:max-h-[350px]">
      <div className="flex flex-col h-full">
        <div className="md:shrink-0 rounded-lg overflow-hidden h-fit relative">
          <img
            className="h-52 w-full object-cover"
            src={recipeImg}
            alt="Card Image"
          />
          <div className="absolute top-[10px] right-[10px]">
            {loved ? <Loved /> : <UnLoved />}
          </div>
        </div>

        <div className="py-2 flex-col flex justify-between flex-1">
          <h2 className="text-lg font-bold tracking-wider clampSubHeader min-h-10">
            {name}
          </h2>
          <div className="flex gap-3 items-center">
            {RecipeTagData.map((tag) => (
              <Tag
                key={tag.id}
                imgUrl={tag.imgUrl}
                text={tag.text}
                TagClasses={tag.TagClasses}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

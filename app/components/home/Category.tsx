import React from "react";

const Category = ({ categoryClass, imgUrl, name }: CATEGORY_TYPE) => {
  return (
    <div
      className={`flex flex-col bg-gradient-to-t ${categoryClass} w-36 h-32 rounded-3xl items-center justify-center rounded-tr-none rounded-tl-none p-2`}
    >
      <div className="h-full flex flex-col">
        <img
          src={imgUrl}
          alt={name}
          height={100}
          width={100}
          className="-mt-10"
        />
      </div>
      <span className="text-base capitalize font-bold self-center">{name}</span>
    </div>
  );
};

export default Category;

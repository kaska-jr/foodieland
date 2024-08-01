import React from "react";

const Category = ({ categoryClass, imgUrl, name }: CATEGORY_TYPE) => {
  return (
    <div
      className={`basis-2/6 lg:basis-[15%]  mt-16 lg:mt-0 flex flex-col bg-gradient-to-t ${categoryClass} h-32 rounded-3xl items-center justify-center rounded-tr-none rounded-tl-none p-2`}
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

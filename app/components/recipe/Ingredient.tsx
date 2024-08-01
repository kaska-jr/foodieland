"use client";
import React from "react";

const Ingredient = ({ name }: { name: string }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div>
      <div
        className="flex items-center gap-6 border-b py-6 cursor-pointer"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {isChecked ? (
          <img src={"/checked.svg"} alt="checked" className="h-5 w-auto" />
        ) : (
          <img src={"/unchecked.svg"} alt="unchecked" className="h-5 w-auto" />
        )}

        <p
          className={`${
            isChecked ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default Ingredient;

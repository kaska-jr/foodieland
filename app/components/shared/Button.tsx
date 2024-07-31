import React from "react";

const Button = ({
  iconUrl,
  text,
  buttonClasses,
}: {
  iconUrl?: string;
  text: string;
  buttonClasses?: string;
}) => {
  return (
    <button
      className={`${buttonClasses} px-6 py-3 rounded-xl text-[12px] flex items-center gap-2 font-semibold h-fit`}
    >
      <span>{text}</span>
      {iconUrl && (
        <img
          src={iconUrl}
          className="w-[18px] h-auto fill-white dark:fill-white stroke-white dark:stroke-white"
          alt={`${text}-icon`}
        />
      )}
    </button>
  );
};

export default Button;

//Possible prop
// text="View Recipes"
// iconUrl="/PlayCircle.svg"
// buttonClasses="bg-secondary-200 text-primary dark:bg-secondary-200 dark:text-primary"

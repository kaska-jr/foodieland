import React from "react";

const Tag = ({
  imgUrl,
  text,
  TagClasses,
}: {
  imgUrl: string;
  text: string;
  TagClasses?: string;
}) => {
  return (
    <span
      className={`${TagClasses} px-3 py-1 rounded-full text-center capitalize flex items-center gap-2 h-fit`}
    >
      <img src={imgUrl} className="w-[18px] h-auto" alt={`${text}-icon`} />
      <span className="text-[13px]">{text}</span>
    </span>
  );
};

export default Tag;

// Possible prop
// TagClasses="dark:bg-primary bg-primary text-secondary-200 dark:text-secondary-200 font-bold"

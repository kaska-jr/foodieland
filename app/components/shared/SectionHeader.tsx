import React from "react";

const SectionHeader = ({
  headerText,
  subHeaderText,
}: {
  headerText?: string;
  subHeaderText?: string;
}) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-secondary-200 clampHeader1 text-center">
        {headerText}
      </h1>
      <h4 className="max-w-2xl text-gray-400 text-center">{subHeaderText}</h4>
    </div>
  );
};

export default SectionHeader;

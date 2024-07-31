"use client";
import React from "react";

const Expansion = ({
  data,
  serialNo,
}: {
  data: ExpansionProps;
  serialNo: number;
}) => {
  const { name, paragraph1, accordionImg, open } = data;
  const [isOpen, setIsOpen] = React.useState(open);
  return (
    <div className="w-full flex flex-col gap-10 border-b py-10">
      <div
        className="flex gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={"/unchecked.svg"} alt="unchecked" className="h-5 w-5 block" />
        <div>
          <p className="text-black font-bold pb-2">
            {serialNo}. {name}
          </p>
          <p className="text-black">{paragraph1}</p>
        </div>
      </div>
      {isOpen && (
        <div className="flex gap-2">
          <div className="w-5 h-5"></div>
          <div>
            <div
              className="w-full min-h-[400px] max-h-[500px] rounded-3xl py-6"
              style={{
                backgroundImage: `url(${accordionImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="text-black py-10">{paragraph1}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expansion;

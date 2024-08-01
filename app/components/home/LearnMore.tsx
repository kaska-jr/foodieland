import React from "react";
import { Container, Button } from "@/app/components";
import { LEARN_MORE_DATA } from "@/app/utils/data";

const LearnMore = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-5 md:gap-10 min-h-96 lg:items-center">
        <div className="flex flex-col gap-8 flex-1 order-2 lg:order-1">
          <div className="text-start flex flex-col">
            <h1 className="text-5xl font-bold text-secondary-200 clampHeader1">
              Everyone can be a <br />
              chef in their own kitchen
            </h1>
            <h4 className="max-w-2xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </h4>
          </div>
          <Button
            text="Learn More"
            buttonClasses="bg-secondary-200 text-primary dark:bg-secondary-200 dark:text-primary w-fit"
          />
        </div>
        <div className="flex-1 min-h-96 order-1 lg:order-2">
          <div className="w-full lg:w-[80%] ml-auto bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)] h-full relative rounded-b-2xl">
            <img
              src="/portrait-happy-male-chef-dressed-uniform.svg"
              className="-ml-10 block object-fit"
              alt="portrait-happy-male-chef-dressed-uniform"
            />
            {LEARN_MORE_DATA.map((tag) => (
              <img
                key={tag.id}
                src={tag.imgUrl}
                alt="tomatoes"
                className={tag.TagClasses}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LearnMore;

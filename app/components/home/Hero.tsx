import React from "react";
import { Container, Button, Tag } from "@/app/components";
import { nanoid } from "nanoid";

const HeroTagData = [
  {
    id: nanoid(),
    imgUrl: "/Timer.svg",
    text: "30 minutes",
    TagClasses:
      "dark:bg-gray-300 bg-gray-300 text-secondary-200 dark:text-secondary-200",
  },
  {
    id: nanoid(),
    imgUrl: "/ForkKnife.svg",
    text: "Chicken",
    TagClasses:
      "dark:bg-gray-300 bg-gray-300 text-secondary-200 dark:text-secondary-200",
  },
];

const Hero = () => {
  return (
    <Container>
      <div className="flex items-center rounded-3xl overflow-clip h-[calc(100vh-130px)] min-h-[500px] my-10 relative">
        <div className="bg-secondary-100 dark:bg-secondary-100 h-full flex-1 p-10 flex flex-col">
          <div className="flex flex-col gap-8 h-fit">
            <Tag
              imgUrl="/nameTagIcon.svg"
              text="Hot Recipes"
              TagClasses="dark:bg-primary bg-primary text-secondary-200 dark:text-secondary-200 font-bold"
            />
            <div>
              <h1 className="clampHeader2 font-bold">
                Spicy delicious <br /> chicken wings
              </h1>
              <p className="max-w-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
              </p>
            </div>

            <div className="flex gap-4">
              {HeroTagData.map((tag) => (
                <Tag
                  key={tag.id}
                  imgUrl={tag.imgUrl}
                  text={tag.text}
                  TagClasses={tag.TagClasses}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between items-end w-full">
            <div className="flex items-center gap-4">
              <img
                src="/chef-avatar.png"
                alt="chef-avatar"
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
              <div>
                <h3 className="text-secondary-200 font-bold text-sm">
                  John Smith
                </h3>
                <span className="text-gray-600 text-sm">15 March 2022</span>
              </div>
            </div>
            <div>
              <Button
                text="View Recipes"
                iconUrl="/PlayCircle.svg"
                buttonClasses="bg-secondary-200 text-primary dark:bg-secondary-200 dark:text-primary"
              />
            </div>
          </div>
        </div>

        <div className="w-full text-white flex-1 h-full bg-[url('/bannerImage-chicken.jpeg')] bg-right bg-no-repeat bg-cover"></div>

        <div className="absolute top-[8%] left-[54%] -translate-x-1/2">
          <img
            src="/Badge.png"
            alt="badge"
            className="w-[100px] md:w-[120px] "
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

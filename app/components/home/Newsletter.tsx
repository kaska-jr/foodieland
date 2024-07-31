import React from "react";
import { SectionHeader, Container, Button } from "@/app/components";

const Newsletter = () => {
  return (
    <Container>
      <div className="min-h-96  bg-secondary-100 dark:bg-secondary-100 p-20 rounded-3xl relative overflow-hidden w-full">
        <SectionHeader
          headerText="Deliciousness to your inbox"
          subHeaderText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        />
        <img
          src="/newsletter-img-1.png"
          alt="newsletter-img-1"
          className="absolute left-[0] -translate-x-[15%] -translate-y-[-10%] h-64 rotate-[20deg]"
        />
        <img
          src="/newsletter-img-leave.png"
          alt="newsletter-img-leave"
          className="absolute right-[20%] -translate-y-[20%] h-32"
        />
        <img
          src="/newsletter-img-2.png"
          alt="newsletter-img-2"
          className="absolute right-0 translate-x-[15%] -translate-y-[-10%] h-64 rotate-[20deg]"
        />
        <div className="flex items-center justify-center w-full my-7">
          <div className="relative w-fit">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-white dark:bg-white border border-gray-300 rounded-2xl w-96 p-4"
            />
            <div className="absolute right-2 h-fit w-fit top-1/2 -translate-y-1/2">
              <Button
                text="subscribe"
                buttonClasses="bg-secondary-200 text-primary dark:bg-secondary-200 dark:text-primary rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;

import React from "react";
import { Button, Container, SectionHeader } from "@/app/components";
import FeedPosts from "./FeedPosts";

const Instagram = () => {
  return (
    <div className="bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)] w-full py-10">
      <Container>
        <div className="mt-20 flex flex-col items-center">
          <SectionHeader
            headerText="Check out @foodieland on Instagram"
            subHeaderText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim consectetuipisicing eli"
          />

          <FeedPosts />
          <Button
            text="Visit Our Instagram"
            iconUrl="/004-instagram.svg"
            buttonClasses="bg-secondary-200 text-primary dark:bg-secondary-200 dark:text-primary"
          />
        </div>
      </Container>
    </div>
  );
};

export default Instagram;

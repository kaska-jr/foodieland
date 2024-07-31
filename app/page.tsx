import Image from "next/image";
import { Button, SectionHeader, Tag } from "./components";

export default function Home() {
  return (
    <main className="flex">
      <Tag
        imgUrl="/Timer.svg"
        text="30 minutes"
        TagClasses="dark:bg-gray-300 bg-gray-300 text-secondary-200 dark:text-secondary-200"
      />
      <Button
        text="View All Categories"
        buttonClasses="bg-secondary-100 text-secondary-200 dark:bg-secondary-100 dark:text-secondary-200"
      />
      <SectionHeader
        headerText="Simple and tasty recipes"
        subHeaderText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      />
    </main>
  );
}

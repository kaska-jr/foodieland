"use client";
import { Categories, Hero, Recipes } from "./components";
import LearnMore from "./components/home/LearnMore";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Categories />
      <Recipes />
      <LearnMore />
    </main>
  );
}

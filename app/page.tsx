"use client";
import {
  Categories,
  Hero,
  Recipes,
  Instagram,
  LearnMore,
  DeliciousRecipes,
  Newsletter,
} from "./components";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Categories />
      <Recipes />
      <LearnMore />
      <Instagram />
      <DeliciousRecipes />
      <Newsletter />
    </main>
  );
}

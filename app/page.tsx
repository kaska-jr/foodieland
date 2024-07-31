"use client";
import { Categories, Hero, Recipes, Instagram, LearnMore } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Categories />
      <Recipes />
      <LearnMore />
      <Instagram />
    </main>
  );
}

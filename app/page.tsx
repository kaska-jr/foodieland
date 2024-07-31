"use client";
import { Categories, Hero, Recipes } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Categories />
      <Recipes />
    </main>
  );
}

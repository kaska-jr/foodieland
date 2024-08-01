// Home.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Mock the imported components
jest.mock("../app/components", () => ({
  Categories: jest.fn(() => <div>Categories Component</div>),
  Hero: jest.fn(() => <div>Hero Component</div>),
  Recipes: jest.fn(() => <div>Recipes Component</div>),
  Instagram: jest.fn(() => <div>Instagram Component</div>),
  LearnMore: jest.fn(() => <div>LearnMore Component</div>),
  DeliciousRecipes: jest.fn(() => <div>DeliciousRecipes Component</div>),
  Newsletter: jest.fn(() => <div>Newsletter Component</div>),
}));

test("renders Home component with all sections", () => {
  render(<Home />);

  expect(screen.getByText("Hero Component")).toBeInTheDocument();
  expect(screen.getByText("Categories Component")).toBeInTheDocument();
  expect(screen.getByText("Recipes Component")).toBeInTheDocument();
  expect(screen.getByText("LearnMore Component")).toBeInTheDocument();
  expect(screen.getByText("Instagram Component")).toBeInTheDocument();
  expect(screen.getByText("DeliciousRecipes Component")).toBeInTheDocument();
  expect(screen.getByText("Newsletter Component")).toBeInTheDocument();
});

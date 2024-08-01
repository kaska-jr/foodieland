import React from "react";
import { render, screen } from "@testing-library/react";
import Recipes from "../app/components/home/Recipes"; // Adjust the import path as necessary
import { RECIPES } from "../app/utils/data";
import { nanoid } from "nanoid";

// Mock the imported components
jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mock-id"),
}));

jest.mock("../app/components/shared/Container", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => <div>{children}</div>),
}));
jest.mock("../app/components/shared/SectionHeader", () => ({
  __esModule: true,
  default: jest.fn(({ headerText, subHeaderText }) => (
    <div>
      <h1>{headerText}</h1>
      <h2>{subHeaderText}</h2>
    </div>
  )),
}));
jest.mock("../app/components/home/Recipe", () => ({
  __esModule: true,
  default: jest.fn(({ title }) => <div>{title}</div>),
}));

describe("Recipes", () => {
  test("renders Recipes component with correct content", () => {
    render(<Recipes />);

    // Check if SectionHeader is rendered with correct text
    expect(screen.getByText("Simple and tasty recipes")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      )
    ).toBeInTheDocument();

    // Check if Recipe components are rendered for each recipe
    RECIPES.slice(0, 9).forEach((recipe, index) => {
      if (index === 5) {
        // Check the special case for the 6th recipe
        const recipeDiv = screen.getAllByRole("img")[index];
        expect(recipeDiv).toBeInTheDocument();
        expect(recipeDiv).toHaveStyle(
          `background-image: url(${recipe.recipeImg})`
        );
      } else {
        // Check for recipe name
        const nameElement = screen.getByText(recipe.name);
        expect(nameElement).toBeInTheDocument();

        // Check for recipe time
        const timeElement = screen.getByText(recipe.time);
        expect(timeElement).toBeInTheDocument();
      }
    });
  });
});

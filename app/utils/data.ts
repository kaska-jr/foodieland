import { nanoid } from "nanoid";

// Navigation Links
export const NAV_LINKS: NAV_LINKS_TYPE[] = [
  {
    id: nanoid(),
    name: "home",
    href: "/",
  },
  {
    id: nanoid(),
    name: "recipes",
    href: "/recipes",
  },
  {
    id: nanoid(),
    name: "blogs",
    href: "#",
  },
  {
    id: nanoid(),
    name: "contact",
    href: "#",
  },
  {
    id: nanoid(),
    name: "about us",
    href: "#",
  },
];

// Banner Carousel Data
export const BANNER_CAROUSEL_DATA: BANNER_CAROUSEL_DATA_TYPE[] = [
  {
    id: nanoid(),
    name: "Hot Recipes",
    nameTagIcon: "/nameTagIcon.png",
    header: "Spicy delicious chicken wings",
    subHeader:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
    image: "/bannerImage-chicken.jpeg",
    bannerBadge: "/Badge.png",
    time: "30 Minutes",
    tag: "Chicken",
    chef: "John Smith",
    dateOfCreation: "15 March 2022",
  },
];

// Category Data
export const CATEGORY: CATEGORY_TYPE[] = [
  {
    id: nanoid(),
    name: "breakfast",
    imgUrl: "/category-breakfast.svg",
  },
  {
    id: nanoid(),
    name: "choclate",
    imgUrl: "/category-choclate.svg",
  },
  {
    id: nanoid(),
    name: "lunch",
    imgUrl: "/category-lunch.svg",
  },
  {
    id: nanoid(),
    name: "dessert",
    imgUrl: "/category-dessert.svg",
  },
  {
    id: nanoid(),
    name: "meat",
    imgUrl: "/category-meat.svg",
  },
  {
    id: nanoid(),
    name: "vegan",
    imgUrl: "/category-meat.svg",
  },
];

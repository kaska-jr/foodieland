import { nanoid } from "nanoid";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Navigation Links
export const NAV_LINKS: NAV_LINKS_TYPE[] = [
  {
    id: nanoid(),
    text: "home",
    url: "/",
  },
  {
    id: nanoid(),
    text: "recipes",
    url: "/recipes",
  },
  {
    id: nanoid(),
    text: "blogs",
    url: "#",
  },
  {
    id: nanoid(),
    text: "contact",
    url: "#",
  },
  {
    id: nanoid(),
    text: "about us",
    url: "#",
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
export const CATEGORIES: CATEGORY_TYPE[] = [
  {
    id: nanoid(),
    name: "breakfast",
    imgUrl: "/category-breakfast.svg",
    categoryClass: "from-[rgba(112,130,70,0.1)] to-[rgba(112,130,70,0)]",
  },
  {
    id: nanoid(),
    name: "vegan",
    imgUrl: "/category-vegan.svg",
    categoryClass: "from-[rgba(108,198,63,0.1)] to-[rgba(108,198,63,0)]",
  },
  {
    id: nanoid(),
    name: "meat",
    imgUrl: "/category-meat.svg",
    categoryClass: "from-[rgba(204,38,27,0.1)] to-[rgba(204,38,27,0)]",
  },
  {
    id: nanoid(),
    name: "dessert",
    imgUrl: "/category-dessert.svg",
    categoryClass: "from-[rgba(240,158,0,0.1)] to-[rgba(240,158,0,0)]",
  },
  {
    id: nanoid(),
    name: "lunch",
    imgUrl: "/category-lunch.svg",
    categoryClass: "from-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0)]",
  },
  {
    id: nanoid(),
    name: "choclate",
    imgUrl: "/category-choclate.svg",
    categoryClass: "from-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0)]",
  },
];

// Social Links Data
export const SOCIAL_LINKS: SOCIAL_LINKS_TYPE[] = [
  {
    id: nanoid(),
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: nanoid(),
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: nanoid(),
    url: "https://www.twitter.com",
    icon: <FaInstagram />,
  },
];

//Recipes Data
export const RECIPES: RECIPE_TYPE[] = [
  {
    id: nanoid(),
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    recipeImg: "/recipe-img-1.png",
    loved: true,
    time: "30 Minutes",
    tagText: "snack",
  },

  {
    id: nanoid(),
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    recipeImg: "/recipe-img-2.png",
    loved: false,
    time: "30 Minutes",
    tagText: "fish",
  },
  {
    id: nanoid(),
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    recipeImg: "/recipe-img-3.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Breakfast",
  },
  {
    id: nanoid(),
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    recipeImg: "/recipe-img-4.png",
    loved: true,
    time: "30 Minutes",
    tagText: "Healthy",
  },
  {
    id: nanoid(),
    name: "Chicken Meatballs with Cream Cheese Sauce",
    recipeImg: "/recipe-img-5.png",
    loved: false,
    time: "30 Minutes",
    tagText: "meat",
  },
  {
    id: nanoid(),
    name: "",
    recipeImg: "/Ads.png",
    loved: undefined,
    time: "",
    tagText: "",
  },
  {
    id: nanoid(),
    name: "Fruity Pancake with Orange & Blueberry",
    recipeImg: "/recipe-img-6.png",
    loved: false,
    time: "30 Minutes",
    tagText: "sweet",
  },
  {
    id: nanoid(),
    name: "The Best Easy One Pot Chicken and Rice",
    recipeImg: "/recipe-img-7.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Snack",
  },
  {
    id: nanoid(),
    name: "The Creamiest Creamy Chicken and Bacon Pasta",
    recipeImg: "/recipe-img-8.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Noodles",
  },
];

export const LEARN_MORE_DATA = [
  {
    id: nanoid(),
    imgUrl: "/tomatoes.svg",
    TagClasses:
      "block absolute left-0 -translate-x-1/2 bottom-[20%] w-10 h-auto lg:w-12 lg:h-auto ",
  },
  {
    id: nanoid(),
    imgUrl: "/garlic.svg",
    TagClasses:
      "block absolute right-[26%] top-[15%] w-10 h-auto lg:w-12 lg:h-auto",
  },
  {
    id: nanoid(),
    imgUrl: "/category-meat.svg",
    TagClasses:
      "block absolute left-[10%] top-[10%] w-10 h-auto lg:w-12 lg:h-auto",
  },
  {
    id: nanoid(),
    imgUrl: "/category-vegan.svg",
    TagClasses:
      "block absolute right-[3%] top-[30%] w-10 h-auto lg:w-12 lg:h-auto",
  },
];

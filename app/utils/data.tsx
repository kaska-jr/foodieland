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
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    recipeImg: "/recipe-img-1.png",
    loved: true,
    time: "30 Minutes",
    tagText: "snack",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },

  {
    id: 2,
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    recipeImg: "/recipe-img-2.png",
    loved: false,
    time: "30 Minutes",
    tagText: "fish",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 3,
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    recipeImg: "/recipe-img-3.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Breakfast",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    recipeImg: "/recipe-img-4.png",
    loved: true,
    time: "30 Minutes",
    tagText: "Healthy",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 5,
    name: "Chicken Meatballs with Cream Cheese Sauce",
    recipeImg: "/recipe-img-5.png",
    loved: false,
    time: "30 Minutes",
    tagText: "meat",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 6,
    name: "",
    recipeImg: "/Ads.png",
    loved: undefined,
    time: "",
    tagText: "",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 7,
    name: "Fruity Pancake with Orange & Blueberry",
    recipeImg: "/recipe-img-6.png",
    loved: false,
    time: "30 Minutes",
    tagText: "sweet",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 8,
    name: "The Best Easy One Pot Chicken and Rice",
    recipeImg: "/recipe-img-7.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Snack",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },
  {
    id: 7,
    name: "The Creamiest Creamy Chicken and Bacon Pasta",
    recipeImg: "/recipe-img-8.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Noodles",
    recipieClasses:
      "bg-gradient-to-t from-[rgba(231,249,253,1)] to-[rgba(231,249,253,0.001)]",
  },

  {
    id: 8,
    name: "Mixed Tropical Fruit Salad with Superfood Boosts ",
    recipeImg: "/delicious-meal-1.png",
    loved: true,
    time: "30 Minutes",
    tagText: "healthy",
    recipieClasses: "",
  },
  {
    id: 9,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    recipeImg: "/delicious-meal-2.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Western",
    recipieClasses: "",
  },
  {
    id: 10,
    name: "Healthy Japanese Fried Rice with Asparagus",
    recipeImg: "/delicious-meal-3.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Healthy",
    recipieClasses: "",
  },
  {
    id: 11,
    name: "Cauliflower Walnut Vegetarian Taco Meat",
    recipeImg: "/delicious-meal-4.png",
    loved: true,
    time: "30 Minutes",
    tagText: "Eastern",
    recipieClasses: "",
  },
  {
    id: 12,
    name: "Chicken Meatballs with Cream Cheese Sauce",
    recipeImg: "/delicious-meal-5.png",
    loved: false,
    time: "30 Minutes",
    tagText: "meat",
    recipieClasses: "",
  },

  {
    id: 13,
    name: "Barbeque Spicy Sandwiches with Chips and Hummus",
    recipeImg: "/delicious-meal-6.png",
    loved: false,
    time: "30 Minutes",
    tagText: "snack",
    recipieClasses: "",
  },
  {
    id: 14,
    name: "Firecracker Vegan Lettuce Wraps - Spicy!  ",
    recipeImg: "/delicious-meal-7.png",
    loved: false,
    time: "30 Minutes",
    tagText: "healthy",
    recipieClasses: "",
  },
  {
    id: 15,
    name: "Chicken Ramen Soup with Mushroom ",
    recipeImg: "/delicious-meal-8.png",
    loved: false,
    time: "30 Minutes",
    tagText: "Noodles",
    recipieClasses: "",
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

//instagram post
export const INSTAGRAM_DATA: INSTAGRAM_TYPE[] = [
  {
    id: nanoid(),
    postImage: "/insta-feed-1.png",
    caption:
      "The vegetables dishes need to have certain vitamin for those people",
    likes: "44,686",
    firstLiker: "craig_love",
    handle: "Foodieland.",
    comments: [
      { id: nanoid(), username: "commenter1", text: "Amazing!" },
      { id: nanoid(), username: "commenter2", text: "Wow!" },
    ],
    time: "September 19",
  },

  {
    id: nanoid(),
    postImage: "/insta-feed-2.png",
    caption:
      "Sweet food can bring someon into happiness as long as they don’t eat to much",
    likes: "44,686",
    firstLiker: "craig_love",
    handle: "Foodieland.",
    comments: [
      { id: nanoid(), username: "commenter1", text: "Amazing!" },
      { id: nanoid(), username: "commenter2", text: "Wow!" },
    ],
    time: "September 19",
  },
  {
    id: nanoid(),
    postImage: "/insta-feed-3.png",
    caption:
      "What are you doing before start cooking? prepare the  tools or ingredients?",
    likes: "44,686",
    firstLiker: "craig_love",
    handle: "Foodieland.",
    comments: [
      { id: nanoid(), username: "commenter1", text: "Amazing!" },
      { id: nanoid(), username: "commenter2", text: "Wow!" },
    ],
    time: "September 19",
  },
  {
    id: nanoid(),
    postImage: "/insta-feed-4.png",
    caption:
      "Steak never be wrong, it’s suitable for you who want romantic dinner",
    likes: "44,686",
    firstLiker: "craig_love",
    handle: "Foodieland.",
    comments: [
      { id: nanoid(), username: "commenter1", text: "Amazing!" },
      { id: nanoid(), username: "commenter2", text: "Wow!" },
    ],
    time: "September 19",
  },
];

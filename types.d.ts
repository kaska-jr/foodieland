type NAV_LINKS_TYPE = {
  id: string;
  text: string;
  url: string;
};

type BANNER_CAROUSEL_DATA_TYPE = {
  id: string;
  name: string;
  nameTagIcon: string;
  header: string;
  subHeader: string;
  image: string;
  bannerBadge: string;
  time: string;
  tag: string;
  chef: string;
  dateOfCreation: string;
};

type CATEGORY_TYPE = {
  id: string;
  name: string;
  imgUrl: string;
  categoryClass: string;
};

type SOCIAL_LINKS_TYPE = {
  id: string;
  url: string;
  icon: ReactElement;
};

type RECIPE_TYPE = {
  id: string;
  name: string;
  recipeImg: string;
  loved: boolean | undefined;
  time: string;
  tagText: string;
};

type INSTAGRAM_TYPE = {
  id: string;
  postImage: string;
  likes: string;
  caption: string;
  firstLiker: string;
  handle: string;
  comments: {
    id: string;
    username: string;
    text: string;
  }[];
  time: string;
};

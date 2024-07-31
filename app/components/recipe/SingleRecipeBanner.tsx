import React from "react";
import Container from "../shared/Container";
import Nutritions from "./Nutritions";

const SingleRecipeBanner = ({
  name,
  recipeImg,
}: {
  name: string;
  recipeImg: string;
}) => {
  return (
    <Container>
      <div className="flex items-center gap-10 w-full my-10">
        <div
          className="basis-[65%] min-h-[550px] max-h-[600px] rounded-3xl drop-shadow-xl"
          style={{
            backgroundImage: `url(${recipeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="basis-[35%] min-h-[550px] max-h-[600px]">
          <Nutritions />
        </div>
      </div>
      <p className="text-gray-400 my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Container>
  );
};

export default SingleRecipeBanner;

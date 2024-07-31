import React from "react";
import Expansion from "./Expansion";

const RecipeAccordion = () => {
  const RECIPE_ACCORDION_DATA = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      paragraph1:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit  amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      accordionImg: "/accordion-img.png",
      open: true,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet",
      paragraph1:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit  amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      accordionImg: "/accordion-img.png",
      open: false,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet",
      paragraph1:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit  amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      accordionImg: "/accordion-img.png",
      open: false,
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet",
      paragraph1:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit  amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      accordionImg: "/accordion-img.png",
      open: false,
    },
  ];

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold py-8">Directions</h1>
      {RECIPE_ACCORDION_DATA.map((data, index) => {
        return <Expansion key={data.id} data={data} serialNo={index + 1} />;
      })}
    </div>
  );
};

export default RecipeAccordion;

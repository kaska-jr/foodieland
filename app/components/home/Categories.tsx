import React from "react";
import { Container, Button, Category } from "@/app/components";
import { CATEGORIES } from "@/app/utils/data";

const Categories = () => {
  return (
    <Container>
      <div className="flex items-center justify-between my-20">
        <h1 className="clampHeader1 font-bold">Categories</h1>
        <Button
          text="View All Categories"
          buttonClasses="bg-secondary-100 text-secondary-200 dark:bg-secondary-100 dark:text-secondary-200"
        />
      </div>
      <div className="flex items-center justify-between my-20">
        {CATEGORIES.map((CATEGORY) => {
          return <Category key={CATEGORY.id} {...CATEGORY} />;
        })}
      </div>
    </Container>
  );
};

export default Categories;

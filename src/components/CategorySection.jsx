import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../Store/useCategoryStore";

const CategorySection = () => {
  const {categories} = useCategoryStore();
  console.log(categories);

  const title = "Product Catagories";
  return (
    <section className="p-5">
      <Container>
      <p className="mb-3 text-2xl font-bold  text-gray-500">{title}</p>
      <div className="flex overflow-scroll hide-scrollbar ">
        {/* <CategoryButton categoryName="all" key={"all"} current={true} /> */}
        {categories.map((category) => (
          <CategoryButton key={category.id} category={category} />
        ))}
      </div>
      </Container>
    </section>
  );
};

export default CategorySection;

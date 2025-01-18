import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../Store/useProductStore";
import useCategoryStore from "../Store/useCategoryStore";

const ProductSection = () => {
 
  const {products} = useProductStore();
  const {categories} = useCategoryStore();

  const currentCategory = categories.find(el => el.isActive === true);

  return (
    <section className="px-5 mb-3">
     <Container>
     <p className="mb-3 text-2xl font-bold  text-gray-500">
        Available Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.filter(el => currentCategory.name === "all" ||el.category === currentCategory.name).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     </Container>
    </section>
  );
};

export default ProductSection;

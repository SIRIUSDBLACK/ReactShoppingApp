import React from "react";
import useCategoryStore from "../Store/useCategoryStore";



const CategoryButton = ({ category:{id,name,isActive} }) => {
  const {activeState} = useCategoryStore();
  const handleClickCategoryBtn = () => {
  activeState(id);
}
  return (
    <button
    onClick={handleClickCategoryBtn}
      className={`${
        isActive && "bg-black text-white " 
      } border text-nowrap border-black px-5  py-2 me-2 `}
    >
      {name}
    </button>
  );
};

export default CategoryButton;

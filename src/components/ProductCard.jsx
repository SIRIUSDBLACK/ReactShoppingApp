import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../Store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug
  },
}) => {
  const {carts,addItem} = useCartStore();

  
  const handleAddItemToCart = (event) => {
    event.stopPropagation()
    const newItem = {id:Date.now(), productId:id ,quantity:1}
    addItem(newItem)
    toast.success("Added to the cart")
  }
  const handleAddedItemToCart = (event) => {
    event.stopPropagation()
    toast("The item is already in the cart")
  }

  const navigate = useNavigate();

  const goToProductDetail = () => {
    navigate(`product-detail/${slug}`)
  }

  return (
    <div onClick={goToProductDetail} to={`/product-detail/${id}`} className="border py-3 cursor-pointer  border-black flex  flex-col gap-5 px-2">
      <img className="w-full object-contain h-40" src={image} alt="" />

      <div className="flex flex-col mt-auto justify-start">
        <p className="font-semibold line-clamp-2">{title}</p>
        <Rating rate= {rate}/>
        <div className="flex mt-3 items-end   justify-between">
          <p>Price(${price}) </p>
          {carts.find((cart) =>(cart.productId === id)) ? 
          <button onClick={handleAddedItemToCart} className="border hover:bg-black hover:text-white bg-black text-white border-black px-2 py-1">Added</button>
            :
          <button onClick={handleAddItemToCart} className="border hover:bg-black hover:text-white border-black px-2 py-1">Add to Cart</button>
        }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

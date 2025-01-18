import React from "react";
import useProductStore from "../Store/useProductStore";
import useCartStore from "../Store/useCartStore";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseItem, decreaseItem, removeItem } = useCartStore();

  const product = products.find((el) => el.id === productId);
  const cost = product.price * quantity;

  const handleIncreaseItem = () => {
    increaseItem(productId);
  };
  const handleDecreaseItem = () => {
    if (quantity > 1) {
      decreaseItem(productId);
    } else {
      Swal.fire({
        title: "Are you sure to remove this item for the cart?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove it!",
        cancelButtonText: "No, cancel!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeItem(productId);
          toast.success("Removed from the cart");
        }
      });
    }
  };

return (
  <div className="">
    <div className="w-full h-28 mb-4 border grid grid-cols-6 items-center border-black p-5">
      <div className="col-span-1">
        <img src={product.image} alt="" className="h-20" />
      </div>

      <div className="col-span-3 ps-2">
        <div className="flex flex-col gap-3">
          <p>{product.title}</p>
          <p className="text-gray-500">Price: ${product.price}</p>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-3">
        <p className="font-semibold">Quantity</p>
        <div className="flex gap-2">
          <button
            onClick={handleDecreaseItem}
            className="bg-black text-white px-2 py-0"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleIncreaseItem}
            className="bg-black text-white px-2 py-0"
          >
            +
          </button>
        </div>
      </div>

      <div className="col-span-1 text-end">
        <p className="font-bold text-xl">$ {cost}</p>
      </div>
    </div>
  </div>
);
}
export default Cart;

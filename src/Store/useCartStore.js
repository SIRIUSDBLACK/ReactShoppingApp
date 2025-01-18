import { create } from "zustand";
import carts from "../data/carts";

const useCartStore = create((set) =>({
    carts : [
        {
            id : 1,
            productId : 2,
            quantity : 3,
        },
        {
            id : 2,
            productId : 6,
            quantity : 3,
        }
    ],
    increaseItem : (id) => {
        set((state) => ({carts : state.carts.map(el => el.productId === id ? {...el,quantity: el.quantity+1}:el)}))
    } ,
    decreaseItem : (id) => {
        set((state) => ({carts : state.carts.map(el => el.productId === id ? {...el,quantity: el.quantity-1}:el)}))
    } ,
    removeItem : (id) => {
        set((state) => ({carts: state.carts.filter(el => el.productId !== id)}))
    },
    addItem : (newItem) => {
        set((state) => ({carts: [...state.carts,newItem]}))
    }
}) )

export default useCartStore;
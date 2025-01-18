import { Link } from "react-router-dom";
import Container from "./Container";
import MyCart from "../Pages/MyCart";
import useCartStore from "../Store/useCartStore";

export default function Header() {
  const {carts} = useCartStore();
  return (
    <header className="p-5">
      <Container>
      <div className="flex justify-between items-center">
        <Link to={"/"} className="text-3xl font-bold ">Online Shop</Link>
        <Link to={"/my-cart"} className="border relative border-black px-5 py-2">
          My Cart{" "}
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs px-2 rounded-full py-1 text-white bg-red-500">
            {carts.length}
          </span>
        </Link>
      </div>
      </Container>   
    </header>
  );
}

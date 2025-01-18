import { createRoot } from "react-dom/client";
import "./index.css"
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";


const root = document.querySelector("#root");
createRoot(root).render(<RouterProvider router={router}/>);

// const categories = [
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
//     ];
// const title = document.createElement("p");

// title.innerText = "Product Categories";
// title.classList.add("text-3xl","text-gray-500")
// root.append(title);

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add('border', 'px-4' ,'py-2' , '');
//     return btn;
// }

// categories.forEach((category) => root.append(categoryButton(category)));




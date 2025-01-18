import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from "../components/Container";
import Rating from '../components/Rating';
import BreadCrumb from '../components/BreadCrumb';
import useProductStore from '../Store/useProductStore';
import useCartStore from '../Store/useCartStore';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const {products} = useProductStore();
  const {carts,addItem} = useCartStore();
  const {ProductSlug} = useParams();
  const currentProduct = products.find((product) => product.slug == ProductSlug)
  const handleAddToCartBtn = () => {
    const newItem = {
      id : Date.now(),
      productId : currentProduct.id,
      quantity : 1 
    }
    addItem(newItem);
    toast.success("Added to Cart")
  }
  const handleAddedToCartBtn = (event) => {
    event.stopPropagation()
    toast("The item is already in the cart")
  }
  return (
 <Container>
  <BreadCrumb currentPage={"Product Detail"} />
  <div className='p-3'>
  <div className='w-full border border-black p-5 grid grid-cols-1 md:grid-cols-2 items-center '>
    <div className='col-span-1'><img className='w-[200px]' src={currentProduct.image} alt="" /></div>
    <div className='col-span-1 flex flex-col gap-5 items-start'>
      <h1 className='font-bold text-2xl'>{currentProduct.title}</h1>
      <p className='bg-gray-200 text-gray-950 px-3 py-1'>{currentProduct.category}</p>
      <p>{currentProduct.description}</p>
      <div> 
        <Rating rate={currentProduct.rating.rate}/>
      </div>      
      <div className='flex items-center w-full justify-between'>
        <p>Price: $ {currentProduct.price}</p>
        {carts.find(el => el.productId === currentProduct.id)?
        <button onClick={handleAddedToCartBtn} className="border bg-black text-white border-black px-2 py-1">Added</button>
        :
        <button onClick={handleAddToCartBtn} className="border hover:bg-black hover:text-white border-black px-2 py-1">Add to Cart</button>
        }
      </div>
    </div>

  </div>
  </div>
 </Container>
  )
}

export default ProductDetail